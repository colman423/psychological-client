import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Route, Redirect, Switch } from 'react-router-dom';
import queryString from 'query-string';
import * as log from 'loglevel'

import QuestionnaireBase from '../Components/QuestionnaireBase';
import QuestionnaireResult from '../Components/QuestionnaireResult';

import dataQs1 from '../Data/qs1.json';
import dataQs2 from '../Data/qs2.json';
import dataQsE from '../Data/qsE.json';

const basePath = "/questionnaire";

function QuestionnairePage({ match }) {
    return (
        <Switch>
            <Route path={`${basePath}/staff`}
                render={({ location }) => {
                    const rawReserved = queryString.parse(location.search).reserved || 1
                    const reserved = rawReserved!==0 && rawReserved!=='0'
                    const no = Math.floor(Math.random() * 2)
                    const data = no ? dataQs1 : dataQs2;
                    const name = no ? "qs1" : "qs2";
                    console.log("reserved", reserved)
                    return (
                        <QuestionnaireElement data={data} surveyName={name} reserved={reserved} />
                    )
                }}
            />
            <Route path={`${basePath}/enterprise`}
                render={({ location }) => {
                    const rawReserved = queryString.parse(location.search).reserved || 1
                    const reserved = rawReserved!==0 && rawReserved!=='0'
                    console.log("reserved", reserved)
                    return (
                        <QuestionnaireElement data={dataQsE} surveyName="qsE" reserved={reserved} />
                    )
                }}
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
        window.addEventListener("beforeunload", this.leavePrompt);
        log.debug(this.props)
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
                                reserved={this.props.reserved}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuestionnairePage;
