import React, { Component } from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";

class QuestionnaireBase extends Component {
    static defaultProps = {
        'data': {},
        'customStyle': {
            // matrix: {
            //     // root: "table table-striped"
            // },
            // navigationButton: "button btn-lg"
        },
        onComplete: (survey, options) => {
            //Write survey results into database
            console.log("Survey results: " + JSON.stringify(survey.data));
        }
    };

    onUpdateQuestionCssClasses(survey, options) {
        console.log("onUpda")
        var classes = options.cssClasses

        classes.root = "sq-root";
        classes.title = "sq-title";
        classes.item = "sq-item";
        classes.label = "sq-label";

        if (options.question.isRequired) {
            classes.title = "sq-title sq-title-required";
            classes.root = "sq-root sq-root-required";
        }

        if (options.question.getType() === "checkbox") {
            classes.root = "sq-root sq-root-cb";
        }
    }



    render() {
        var { data, customStyle, onComplete } = this.props;

        return (
            <div>
                <Survey.Survey
                    model={new Survey.Model(data)}
                    onComplete={onComplete}
                    css={customStyle}
                // onUpdateQuestionCssClasses={this.onUpdateQuestionCssClasses}
                />
            </div>
        )
    }

}
export default QuestionnaireBase;

