import React, { Component } from 'react';
import BorderedTitle from './BorderedTitle';

class SurveyEntry extends Component {
    static defaultProps = {
        'confirm': () => {},
        'cancel': () => {},
    };

    render() {
        let { confirm, cancel, ...props } = this.props;
        return (
            <div {...props}>
                <BorderedTitle padX="10px" padY="0px" className="h5">我已了解本問卷調查目的，並同意參與。</BorderedTitle>
                <a className="mx-3 text-white" href="/client/questionnaire/staff/1" target="_blank">是</a>
                <a className="mx-3 text-white" onClick={cancel}>否</a>
            </div>
        )
    }
}
export default SurveyEntry;
