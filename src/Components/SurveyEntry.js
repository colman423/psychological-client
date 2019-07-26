import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                <Link to={href} className="mx-3 text-white" target="_blank">是{href.substr(-1)}</Link>
                <Link to="/" className="mx-3 text-white">否</Link>
            </div>
        )
    }
}
export default SurveyEntry;
