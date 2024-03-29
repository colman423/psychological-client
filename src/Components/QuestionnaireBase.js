import React, { Component } from "react";
import * as Survey from "survey-react";
import ClipLoader from 'react-spinners/ClipLoader';
import "survey-react/survey.css";
import "../Styles/custom-survey.scss";
import { withRouter } from 'react-router-dom'
import Api from '../Api';
import * as log from 'loglevel'

class QuestionnaireBase extends Component {
    static defaultProps = {
        'data': {},
        'surveyName': "",
        'customStyle': {

        },
        'leavePrompt': () => { },
        'nextConfirmText': "此問卷為不可逆，確定資料皆為正確者請按確定鍵。"
    };

    constructor(props) {
        super(props);
        this.state = {
            success: false,
            completing: false,
            id: "",
            token: ""
        }
    }

    componentDidMount() {
        Api.getIdToken(this.props.surveyName, this.props.reserved).then(result => {
            log.debug("getIdToken result", result);
            let success = result;
            let { id, token } = result.data;
            if (success) {
                log.debug("id & token", id, token);
                this.setState({ success, id, token });
            }
        })
        Survey
            .FunctionFactory
            .Instance
            .register("isEmail", (params) => {
                const email = params[0];
                return /\S+@\S+\.\S+/.test(email)
            });
        Survey.surveyLocalization.locales[Survey.surveyLocalization.defaultLocale].requiredError = "請填寫此題。";

    }

    onComplete = (survey, options) => {
        log.debug("onComplete")
        window.removeEventListener("beforeunload", this.props.leavePrompt);
        log.debug("Survey results: " + JSON.stringify(survey.data));
    }


    onUpdateQuestionCssClasses(survey, options) {
        var classes = options.cssClasses
        // options.question.isRequired,  options.question.name === "age" 
        if (options.question.getType() === "matrix") {
            classes.title = "custom-matrix-title sv_q_title";
            classes.root = "custom-matrix-root";
            classes.label = "custom-matrix-label";
            classes.input = "fa fa-check";

            let colCount = options.question.getColumns().length;
            classes.root += " colcount-" + colCount;

            if (survey.currentPage.name === "q12") {
                classes.root += " col-with-n";
            }

        }
        else if (options.question.getType() === "radiogroup") {
            classes.title = "custom-radio-title";
            classes.root = "custom-radio-root";
            classes.label = "custom-radio-label";
        }
        else if (options.question.getType() === "text") {
            classes.title = "custom-text-title";
        }
    }
    onTextMarkdown(survey, options) {
        options.html = options.text;
    }

    render() {
        var { data, customStyle } = this.props;
        var { success } = this.state;
        return (
            <div>
                {success ?
                    (
                        <Survey.Survey
                            sendResultOnPageNext
                            model={new Survey.Model(data)}
                            onComplete={this.onComplete}
                            css={customStyle}
                            onUpdateQuestionCssClasses={this.onUpdateQuestionCssClasses}
                            onTextMarkdown={this.onTextMarkdown}
                            onCompleting={this.onCompleting}
                            // onPartialSend={this.onPartialSend}
                            onCurrentPageChanging={this.onCurrentPageChanging}
                        />
                    ) : (
                        <Loading />
                    )
                }

            </div>
        )
    }

    sendPartial = (survey, callback) => {
        let data = this.getRawData(survey.data)
        let pageName = survey.currentPage.name;
        let { id, token } = this.state;
        log.debug("sendPartial", pageName, data, id, token);
        Api.uploadReply(pageName, data, id, token).then(result => {
            log.debug("sendPartial result", result);
            if (callback) callback(true);
        }).catch(err => {
            log.debug(err);
            if (callback) callback(false)
        });
    }
    onCompleting = (survey, options) => {
        log.debug("onCompleting")
        if (this.state.completing) {
            options.allowComplete = false;

            return false;
        }
        else {
            log.debug("onCompleting 2")
            this.setState({ completing: true });
            options.allowComplete = false;
            log.debug('completing', options);

            if (window.confirm(this.props.nextConfirmText)) {
                this.sendPartial(survey, (success) => {
                    log.debug(success)
                    let { id, token } = this.state;

                    this.props.history.push("/questionnaire/result/" + id + "?token=" + token)
                })
            }
        }
    }

    onCurrentPageChanging = (survey, options) => {
        if (options.oldCurrentPage) {
            options.allowChanging = false;
            log.debug("onCurrentPageChanging", options);

            if (window.confirm(this.props.nextConfirmText)) {
                this.sendPartial(survey)
                options.allowChanging = true;
                log.debug("changins")
            }
        }

    }

    getRawData(data) {
        let newData = {};
        for (let key of Object.keys(data)) {
            let { name, value } = getDeepData(data[key], key)
            newData[name] = value
        }
        return newData;

        function getDeepData(input, outKey) {
            if (typeof input == "object") {
                let key = Object.keys(input)[0];
                return getDeepData(input[key], key);
            }
            else {
                return {
                    'name': outKey,
                    'value': input
                }
            }
        }
    }
}


function Loading(props) {
    return (
        <div className="text-center pt-5">
            <ClipLoader
                color="white"
                size={50}
            />
        </div>
    )
}

export default withRouter(QuestionnaireBase);
