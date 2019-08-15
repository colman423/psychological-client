import React, { Component } from 'react';
import Api from '../Api';
import * as log from 'loglevel'

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'name': "",
            'phone': "",
            'email': "",
            'message': ""
        }
    }



    sendContact = () => {
        log.debug(this.state);
        Api.uploadContact(this.state).then( result => {
            log.debug(result)
            alert(result);
        });
    }

    render() {
        log.debug(this.state)
        var { ...props } = this.props;
        return (
            <form {...props}>
                <div className="form-group row">
                    <div className="col-sm-8 mx-auto">
                        <input type="text" className="form-control" placeholder="姓名" onChange={e =>
                            this.setState({ 'name': e.target.value })
                        }></input>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-8 mx-auto">
                        <input type="tel" className="form-control" placeholder="聯絡電話" onChange={e =>
                            this.setState({ 'phone': e.target.value })
                        }></input>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-8 mx-auto">
                        <input type="email" className="form-control" placeholder="電子信箱" onChange={e =>
                            this.setState({ 'email': e.target.value })
                        }></input>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-8 mx-auto">
                        <textarea type="text" rows="5" className="form-control" placeholder="訊息" onChange={e =>
                            this.setState({ 'message': e.target.value })
                        }></textarea>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-12">
                        <button className="btn btn-warning text-white" type="button" onClick={this.sendContact}>送出</button>
                    </div>
                </div>
            </form>


        );
    }
}

export default ContactForm;
