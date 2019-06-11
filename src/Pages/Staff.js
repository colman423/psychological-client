import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Route, Link } from 'react-router-dom';

import Navbar, { NavLink } from "../Components/Navbar";
import Overlap from "../Components/Overlap";

import backgroundHealth from '../img/background-health.png';
import backgroundQuestionnaire from '../img/background-questionnaire.png';
import backgroundStress from '../img/background-stress.png';
import backgroundConsultation from '../img/background-consultation.png';


const basePath = "/staff";

function Staff({ match }) {
    console.log("Staff");
    return (
        <div>
            <Navbar img={backgroundHealth} >
                <NavLink to={`${basePath}/health/`} className="nav-link text-white">職場心理健康</NavLink>
                <NavLink to={`${basePath}/questionnaire/`} className="nav-link text-white">自我檢測問卷</NavLink>
                <NavLink to={`${basePath}/stress/`} className="nav-link text-white">壓力管理與調適</NavLink>
                <NavLink to={`${basePath}/consultation/`} className="nav-link text-white">諮商諮詢服務</NavLink>
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
                    <h3>職場心理健康是什麼？</h3>
                    <h4 className="float-right">What is Occupational Psychology?</h4>
                </Overlap>
                <div className="text-white p-3">
                    <p>早期，職場所重視的議題局限於員工的「身體健康」，意即確保員工沒有受傷、遭受生理疾病，並具備足夠工作的能力，
                        便符合「健康」的定義。近年來，隨著工作場域變得更加複雜，員工所遭遇的挑戰事件也逐漸增加，
                        當這些事件所造成的心理壓力過大而沒有得到適當處理時，便會對員工的健康產生影響。因此，
                        如何有效減少員工的心理壓力及過勞問題便成為各界關注的重要議題，不同領域的專家也以更全面的角度檢視員工健康議題，
                        並以「職業健康心理學（Occupational Health Psychology）」、「職場心理健康（Workplace Mental Health）」等名詞
                        [3] [4]。職場心理健康是一個涉及員工身心健康的重要議題，除了傳統的健康管理之外，也加入了工業與組織心理學、臨床心理學
                        、人因工程學的不同領域的技術與知識，透過整合不同學門的專長，提升員工的職場心理健康，減少組織中的負面結果，
                        全面保障員工的身心狀況 [5]。
                            </p>
                </div>
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
