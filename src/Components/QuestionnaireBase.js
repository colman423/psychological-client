import React, { Component } from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import "../Styles/custom-survey.scss";
import { withRouter } from 'react-router-dom'

class QuestionnaireBase extends Component {
    static defaultProps = {
        'data': {},
        'customStyle': {

        },
        'theme': "default",
        'leavePrompt': () => { }
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
        var { data, customStyle, theme } = this.props;
        Survey.StylesManager.applyTheme(theme);

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
                />
            </div>
        )
    }

    onPartialSend = (survey, options) => {
        console.log("partial");
        console.log(survey.currentPage, survey.currentPage.name);
        console.log(survey)
    }
    onCompleting = (survey, options) => {
        console.log('completing');
        options.allowComplete = false;
        console.log(survey.data)
        this.props.history.push("/enterprise")

    }
}
export default withRouter( QuestionnaireBase);
