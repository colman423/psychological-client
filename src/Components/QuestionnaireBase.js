import React, { Component } from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import "../css/custom-survey.scss";

class QuestionnaireBase extends Component {
    static defaultProps = {
        'data': {},
        'customStyle': {

        },
        'theme': "default",
        'leavePrompt': () => { }
    };

    onComplete = (survey, options) => {
        window.removeEventListener("beforeunload", this.props.leavePrompt );
        console.log("Survey results: " + JSON.stringify(survey.data));
    }


    onUpdateQuestionCssClasses(survey, options) {
        var classes = options.cssClasses
        // options.question.isRequired,  options.question.name === "age" 
        if (options.question.getType() === "matrix") {
            classes.root = "custom-matrix-root";
            classes.label = "custom-matrix-label";
            classes.input = "fa fa-check";

            let colCount = options.question.getColumns().length;
            classes.root += " colcount-" + colCount;

        }
        if (options.question.getType() === "radiogroup") {
            classes.title = "custom-radio-title";
            classes.root = "custom-radio-root";
            classes.label = "custom-radio-label";
        }
    }
    onTextMarkdown(survey, options) {
        options.html = options.text;
    }

    render() {
        console.log("ren");
        var { data, customStyle, theme } = this.props;
        Survey.StylesManager.applyTheme(theme);

        return (
            <div>
                <Survey.Survey
                    model={new Survey.Model(data)}
                    onComplete={this.onComplete}
                    css={customStyle}
                    onUpdateQuestionCssClasses={this.onUpdateQuestionCssClasses}
                    onTextMarkdown={this.onTextMarkdown}
                />
            </div>
        )
    }

}
export default QuestionnaireBase;
