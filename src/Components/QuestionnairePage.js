import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Route } from 'react-router-dom';
import QuestionnaireBase from '../Components/QuestionnaireBase';

import dataQs1 from '../SurveyData/qs1.json';
import dataQs2 from '../SurveyData/qs2.json';

const basePath = "/questionnaire";

function QuestionnairePage({ match }) {
    console.log("QuestionnairePage");
    return (
        <div>
            <Route path={`${basePath}/staff/1/:theme`} component={QuestionnaireElement} />
            <Route path={`${basePath}/staff/2/:theme`} component={Qs2} />
        </div>
    );
}

class QuestionnaireElement extends Component {
    render() {
        return (
            <div>
                <Helmet><title>Survey | Staff 1</title></Helmet>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-lg-10 mx-auto px-0">
                            <QuestionnaireBase data={dataQs1} theme={this.props.match.params.theme}></QuestionnaireBase>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Qs2 extends Component {
    render() {
        return (
            <div>
                <Helmet><title>Survey | Staff 2</title></Helmet>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-lg-10 mx-auto px-0">
                            <QuestionnaireBase data={dataQs2} theme={this.props.match.params.theme}></QuestionnaireBase>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuestionnairePage;
