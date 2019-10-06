import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BorderedTitle from './BorderedTitle';

class SurveyEntry extends Component {
    static defaultProps = {
        'onConfirm': () => { },
        'onCancel': () => { },
        'href': "#"
    };
    constructor(props) {
        super(props);
        this.state = {
            reserved: 1
        }
    }

    render() {
        const { onConfirm, onCancel, href, ...props } = this.props;
        const { reserved } = this.state
        return (
            <div {...props}>
                <BorderedTitle padX="10px" padY="0px" className="h5">我已了解本問卷調查目的，<br /></BorderedTitle>
                <BorderedTitle padX="10px" padY="0px" className="h5">並同意參與。</BorderedTitle>

                <div className="custom-control custom-radio">
                    <input type="radio" id="reserved-1" name="reserved" className="custom-control-input" value="1" checked={reserved===1} onChange={() => {this.setState({reserved: 1})}}/>
                    <label className="custom-control-label" htmlFor="reserved-1">同意提供本案與資料庫未來使用</label>
                </div>
                <div className="custom-control custom-radio">
                    <input type="radio" id="reserved-0" name="reserved" className="custom-control-input" value="0" checked={reserved===0} onChange={() => {this.setState({reserved: 0})}}/>
                    <label className="custom-control-label" htmlFor="reserved-0">僅同意供本案使用</label>
                </div>
                <br />
                <Link to={`${href}?reserved=${reserved}`} className="mx-3 text-white btn btn-warning" target="_blank">送出</Link>
            </div>
        )
    }
}
export default SurveyEntry;
