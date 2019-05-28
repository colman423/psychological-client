import React, { Component } from 'react';
import SurveyData from '../SurveyData/self-test.1.json';
import QuestionnaireBase from '../Components/QuestionnaireBase';



class Ques1 extends Component {
    
    render() {
        console.log(SurveyData)
        return (
            <QuestionnaireBase data={SurveyData}></QuestionnaireBase>
        ) 
    }
}

export default Ques1;