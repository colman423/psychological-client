import React, { Component } from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import "../css/custom-survey.scss";

class QuestionnaireBase extends Component {
    static defaultProps = {
        'data': {},
        'customStyle':{

        },
        'theme': "default",
        'onComplete': (survey, options) => {
            console.log("Survey results: " + JSON.stringify(survey.data));
        }
    };
    onUpdateQuestionCssClasses(survey, options) {
        var classes = options.cssClasses
        // classes.root = "sq-root sv_q_matrix";
        // classes.title = "sqq-title";
        // classes.item = "sqq-item";
        // classes.label = "sqq-label";

        // if (options.question.isRequired) {
        //     classes.title = "sqq-title sq-title-required";
        //     classes.root = "sqq-root sq-root-required";
        // }

        if (options.question.getType() === "matrix") {
            classes.root = "sv_q_matrixx custom-matrix-root";
            classes.label = "custom-matrix-label";
            classes.input = "fa fa-check";
        }
        else if (options.question.getType() === "rating") {
            classes.title = "custom-rating-title sv_q_title";
        }
        // else if( options.question.name === "age" ) {
        //     classes.root = "custom-age-input";
        // }
        // else if()
        // else if( options.question.getType() === "html" ) {
        //     classes.root = "sq-root sv_q_matrix";
        //     classes.title = "sqq-title";
        //     classes.item = "sqq-item";
        //     classes.label = "sqq-label";
        // }
    }


    render() {
        var { data, customStyle, onComplete, theme } = this.props;
        Survey.StylesManager.applyTheme(theme);

        return (
            <div>
                <Survey.Survey
                    model={new Survey.Model(data)}
                    onComplete={onComplete}
                    css={customStyle}
                onUpdateQuestionCssClasses={this.onUpdateQuestionCssClasses}
                />
            </div>
        )
    }

}
export default QuestionnaireBase;
