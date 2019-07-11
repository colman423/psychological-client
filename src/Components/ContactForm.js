import React, { Component } from 'react';

class ContactForm extends Component {
    sendContact = () => {
        alert("send!")
    }

    render() {
        var {...props} = this.props;
        return (
            <form {...props}>
                <div className="form-group row">
                    <div className="col-sm-8 mx-auto">
                        <input type="text" className="form-control" id="input-name" placeholder="姓名"></input>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-8 mx-auto">
                        <input type="tel" className="form-control" id="input-phone" placeholder="聯絡電話"></input>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-8 mx-auto">
                        <input type="email" className="form-control" id="input-email" placeholder="電子信箱"></input>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-8 mx-auto">
                        <textarea type="text" className="form-control" id="input-message" placeholder="訊息"></textarea>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-12">
                        <button className="btn btn-warning text-white" onClick={this.sendContact}>送出</button>
                    </div>
                </div>
            </form>


        );
    }
}

export default ContactForm;
