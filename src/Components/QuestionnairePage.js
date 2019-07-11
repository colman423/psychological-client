import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Route, Redirect, Switch } from 'react-router-dom';
import QuestionnaireBase from '../Components/QuestionnaireBase';

import dataQs1 from '../Data/qs1.json';
import dataQs2 from '../Data/qs2.json';

const basePath = "/questionnaire";

function QuestionnairePage({ match }) {
    return (
        <Switch>
            <Route path={`${basePath}/staff/1/:theme?`}
                component={(e) => <QuestionnaireElement data={dataQs1} theme={e.match.params.theme} />}
            />
            <Route path={`${basePath}/staff/2/:theme?`}
                component={(e) => <QuestionnaireElement data={dataQs2} theme={e.match.params.theme} />}
            />
            <Redirect to='/' />
        </Switch>
    );
}

class QuestionnaireElement extends Component {
    leavePrompt(e) {
        e.preventDefault();
        return e.returnValue = "要離開網站嗎？";
    }
    componentDidMount() {
        window.addEventListener("beforeunload", this.leavePrompt);
    }
    render() {
        return (
            <div>
                <Helmet><title>Survey</title></Helmet>
                <div className="container-fluid bg-orangegg">
                    <div className="row">

                        <div className="col-12 col-lg-10 mx-auto px-0">
                            <QuestionnaireBase
                                data={this.props.data}
                                theme={this.props.theme}
                                leavePrompt={this.leavePrompt}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuestionnairePage;
