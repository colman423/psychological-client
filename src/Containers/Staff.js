import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Route, Link } from 'react-router-dom';

import Navbar, { NavLink } from "../Components/Navbar";
import Overlap from "../Components/Overlap";
import CommonHealth from "../Components/CommonHealth";

import backgroundHealth from '../Images/background/health.png';
import backgroundQuestionnaire from '../Images/background/questionnaire.png';
import backgroundStress from '../Images/background/stress.png';
import backgroundConsultation from '../Images/background/consultation.png';


const basePath = "/staff";

function Staff({ match }) {
    console.log("Staff");
    return (
        <div>
            <Navbar img={backgroundHealth} >
                <NavLink to={`${basePath}/health/`} className="nav-link text-white">職場健康心理學</NavLink>
                <NavLink to={`${basePath}/questionnaire/`} className="nav-link text-white">員工自我檢測</NavLink>
                <NavLink to={`${basePath}/consultation/`} className="nav-link text-white">諮商/職業醫學科</NavLink>
                <NavLink to={`${basePath}/stress/`} className="nav-link text-white">壓力管理與調適</NavLink>
            </Navbar>

            <Route path={`${basePath}/`} exact component={Health} />
            <Route path={`${basePath}/health/`} component={Health} />
            <Route path={`${basePath}/questionnaire/`} component={Questionnaire} />
            <Route path={`${basePath}/stress/`} component={Stress} />
            <Route path={`${basePath}/consultation/`} component={Consultation} />
        </div>
    );
}

class Health extends Component {
    render() {
        return (
            <div>
                <Helmet><title>Psychological | Staff</title></Helmet>
                <Overlap img={backgroundHealth} >
                    <h3>職場健康心理學</h3>
                    <h4 className="float-right">What is Occupational Psychology?</h4>
                </Overlap>
                <CommonHealth />
            </div>
        );
    }
}

class Questionnaire extends Component {
    render() {
        return (
            <div>
                <Helmet><title>Psychological | Staff</title></Helmet>
                <Overlap img={backgroundQuestionnaire} >
                    <h3>自我檢測問卷</h3>
                    <h4 className="float-right">Questionnaire</h4>
                </Overlap>
                <div className="text-white p-3">
                    <p>點進網址，可檢測現階段您所在公司之實務方案所帶給您的感受，同時可測量在目前職位上您所感受的過勞、工作壓力及工作疲勞程度。</p>
                    <div>
                        <Link to={`/questionnaire/staff/1/${this.state.theme}`} className="text-white" target="_blank">
                            <i className="far fa-check-square"></i><span> 職場心理健康</span>
                        </Link>
                    </div>

                    <div className="mt-1">
                        <Link to={`/questionnaire/staff/2/${this.state.theme}`} className="text-white" target="_blank">
                            <i className="far fa-check-square"></i><span> 職場心理健康 2</span>
                        </Link>
                    </div>

                    <select className="custom-select mt-5" onChange={(e) => this.setState({ theme: e.target.value })}>
                        <option value="default">default</option>
                        <option value="bootstrap">bootstrap ( this is ugly QQ )</option>
                        <option value="orange">orange</option>
                        <option value="darkblue">darkblue</option>
                        <option value="darkrose">darkrose</option>
                        <option value="stone">stone</option>
                        <option value="winter">winter</option>
                        <option value="winterstone">winterstone</option>
                    </select>
                </div>
            </div>
        );
    }

    constructor(props) {
        super(props);
        this.state = {
            theme: "default"
        };
    }
}

class Stress extends Component {
    render() {
        return (
            <div>
                <Helmet><title>Psychological | Staff</title></Helmet>
                <Overlap img={backgroundStress} >
                    <h3>壓力管理與調適方法</h3>
                    <h4 className="float-right">Stress management \& adaption</h4>
                </Overlap>
                <div className="text-white p-3">
                    <p>面對工作壓力，想必會伴隨著不論是生理或是心理上的不適感，這邊提供您一些可幫助緩解甚至解除壓力的方法。</p>
                </div>
            </div>
        );
    }
}

class Consultation extends Component {
    render() {
        return (
            <div>
                <Helmet><title>Psychological | Enterprise</title></Helmet>
                <Overlap img={backgroundConsultation} >
                    <h3>諮商諮詢服務</h3>
                    <h4 className="float-right">Consultation</h4>
                </Overlap>
                <div className="text-white p-3">
                    <p>若您無法自己排除壓力，心理上的不適感無法下降，請不要吝於請求協助。</p>
                    <p>我們提供可供您咨詢的機構，希望能幫助您解除不論是生理或是心理上的不適感。</p>
                </div>
            </div>
        );
    }
}

export default Staff;
