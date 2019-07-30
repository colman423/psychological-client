import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Route, Redirect, Switch } from 'react-router-dom';
import queryString from 'query-string';
import QuestionnaireBase from '../Components/QuestionnaireBase';
import QuestionnaireResult from '../Components/QuestionnaireResult';

import dataQs1 from '../Data/qs1.json';
import dataQs2 from '../Data/qs2.json';
import dataQsE from '../Data/qsE.json';

const basePath = "/questionnaire";

function QuestionnairePage({ match }) {
    return (
        <Switch>
            <Route path={`${basePath}/staff/1`}
                component={(e) => <QuestionnaireElement data={dataQs1} surveyName="qs1"/>}
            />
            <Route path={`${basePath}/staff/2`}
                component={(e) => <QuestionnaireElement data={dataQs2} surveyName="qs2" />}
            />
            <Route path={`${basePath}/enterprise/1`}
                component={(e) => <QuestionnaireElement data={dataQsE} surveyName="qsE" />}
            />
            <Route path={`${basePath}/result/:id`}
                component={(e) => {
                    const id = e.match.params.id;
                    const token = queryString.parse(e.location.search).token;
                    return (<QuestionnaireResult id={id} token={token} />)
                }}
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
        // window.addEventListener("beforeunload", this.leavePrompt);
    }
    render() {
        return (
            <div>
                <Helmet><title>Survey | EAPick</title></Helmet>
                <div className="container-fluid bg-orangegg">
                    <div className="row">

                        <div className="col-12 col-lg-10 mx-auto px-0">
                            <QuestionnaireBase
                                data={this.props.data}
                                leavePrompt={this.leavePrompt}
                                surveyName={this.props.surveyName}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuestionnairePage;
