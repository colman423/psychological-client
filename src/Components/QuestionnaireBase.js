import React, { Component } from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import "../Styles/custom-survey.scss";
import { withRouter } from 'react-router-dom'
import Api from '../Api';

class QuestionnaireBase extends Component {
    static defaultProps = {
        'data': {},
        'customStyle': {

        },
        'leavePrompt': () => { },
        'nextConfirmText': "按下去就不能回上一下嚕，你確定嗎"
    };

    onComplete = (survey, options) => {
        window.removeEventListener("beforeunload", this.props.leavePrompt);
        console.log("Survey results: " + JSON.stringify(survey.data));
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
        console.log("ren");
        console.log(this.props);
        var { data, customStyle } = this.props;

        return (
            <div>
                <Survey.Survey
                    sendResultOnPageNext
                    model={new Survey.Model(data)}
                    onComplete={this.onComplete}
                    css={customStyle}
                    onUpdateQuestionCssClasses={this.onUpdateQuestionCssClasses}
                    onTextMarkdown={this.onTextMarkdown}
                    onCompleting={this.onCompleting}
                    onPartialSend={this.onPartialSend}
                    onCurrentPageChanging={this.onCurrentPageChanged}
                />
            </div>
        )
    }

    onPartialSend = (survey) => {
        console.log("partial", survey.currentPage.name, survey.data);
        let data = this.getRawData(survey.data)
        console.log(data);
        Api.uploadReply(survey.currentPage.name, data).then(result => {
            console.log(result);
        })
    }
    onCompleting = (survey, options) => {
        console.log('completing', options);
        options.allowComplete = false;
        if (window.confirm(this.props.nextConfirmText)) {
            let data = this.getRawData(survey.data)
            console.log(data);
            Api.uploadReply(survey.currentPage.name, survey.data).then(result => {
                console.log(result)
                this.props.history.push("/questionnaire/result/" + result.id)
            })
        }
    }

    onCurrentPageChanged = (survey, options) => {
        if( options.oldCurrentPage ) {
            options.allowChanging = false;
            console.log("data", survey, options);
            if ( window.confirm(this.props.nextConfirmText) ) {
                options.allowChanging = true;
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
export default withRouter(QuestionnaireBase);
