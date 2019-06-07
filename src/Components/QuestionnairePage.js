import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Route } from 'react-router-dom';
import QuestionnaireBase from '../Components/QuestionnaireBase';

import dataQs1 from '../SurveyData/self-test.1.json';

const basePath = "/questionnaire";

function QuestionnairePage({ match }) {
    console.log("QuestionnairePage");
    return (
        <div>
            <Route path={`${basePath}/staff/1`} component={Qs1} />
        </div>
    );
}

class Qs1 extends Component {
    render() {
        console.log(dataQs1)
        return (
            <div>
                <Helmet><title>Survey | Staff 1</title></Helmet>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-10 mx-auto">
                            <QuestionnaireBase data={dataQs1}></QuestionnaireBase>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default QuestionnairePage;
