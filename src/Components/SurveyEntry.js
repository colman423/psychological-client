import React, { Component } from 'react';
import BorderedTitle from './BorderedTitle';

class SurveyEntry extends Component {
    static defaultProps = {
        'onConfirm': () => {},
        'onCancel': () => {},
        'href': "#"
    };

    render() {
        let { onConfirm, onCancel, href, ...props } = this.props;
        return (
            <div {...props}>
                <BorderedTitle padX="10px" padY="0px" className="h5">我已了解本問卷調查目的，並同意參與。</BorderedTitle>
                <a className="mx-3 text-white" href={href} target="_blank">是</a>
                <a className="mx-3 text-white" onClick={onCancel}>否</a>
            </div>
        )
    }
}
export default SurveyEntry;
