import React, { Component } from "react";

class Survey extends Component {
    static defaultProps = {
    };


    render() {
        var { data, customStyle, onComplete, theme } = this.props;
        Survey.StylesManager.applyTheme(theme);

        return (
            <div>
                <SurveyMatrix
                    data={{
                        "measure": ["公司沒有", "我不需要", "很少", "有時", "偶爾", "經常"],
                        "question": [{
                            'name': "q1",
                            'title': "I would like to experience the local festivals.",
                        }, {
                            'name': "q2",
                            'title':
                                "I would like to try Taiwanese foods."
                        }, {
                            'name': "q3",
                            'title':
                                "I would like to know more about Taiwanese aboriginal culture.",
                        }, {
                            'name': "q4",
                            'title':
                                "I would like to experience night life such as pub, clubbing, etc.",
                        }, {
                            'name': "q5",
                            'title':
                                "I would like to go to night market.",
                        }, {
                            'name': "q6",
                            'title':
                                "I would like to enjoy arts and cultural activities"
                        }
                        ]
                    }} />
            </div>
        )
    }

}


class SurveyMatrix extends Component {
    static defaultProps = {
        
    };

}
export default Survey;
