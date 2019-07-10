import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Route, Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

import Navbar, { NavLink } from "../Components/Navbar";
import Footer from "../Components/Footer";
import Overlap from "../Components/Overlap";
import CommonHealth from "../Components/CommonHealth";
import { ContentImageDivider, TitleContentDivider, LocationContentDivider, LinkGroup } from "../Components/Consultant";

import backgroundHealth from '../Images/background/health.png';
import backgroundQuestionnaire from '../Images/background/questionnaire.png';
import backgroundStress from '../Images/background/stress.png';
import backgroundConsultation from '../Images/background/consultation.png';
import BigSpace from '../Components/BigSpace';
import hospitalJson from '../Data/hospitalJson.json'
import title1 from '../Images/consultation/title1.png';
import title2 from '../Images/consultation/title2.png';
import doc1 from '../Images/consultation/doc1.png';
import doc2 from '../Images/consultation/doc2.png';
import doc3 from '../Images/consultation/doc3.png';
import doc4 from '../Images/consultation/doc4.png';
import doc5 from '../Images/consultation/doc5.png';
import taipei from '../Images/consultation/location/taipei.png';
import sinbei from '../Images/consultation/location/sinbei.png';
import changhua from '../Images/consultation/location/changhua.png';
import chiayi from '../Images/consultation/location/chiayi.png';
import hsinchu from '../Images/consultation/location/hsinchu.png';
import taoyuan from '../Images/consultation/location/taoyuan.png';
import yilan from '../Images/consultation/location/yilan.png';
import keelung from '../Images/consultation/location/keelung.png';
import miaoli from '../Images/consultation/location/miaoli.png';
import taichung from '../Images/consultation/location/taichung.png';
import tainan from '../Images/consultation/location/tainan.png';
import kaohsiung from '../Images/consultation/location/kaohsiung.png';
import others from '../Images/consultation/location/others.png';


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
            <Footer />
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
                    <h3>員工自我檢測</h3>
                    <h4 className="float-right">Employee Survey</h4>
                </Overlap>
                <div className="text-white p-3">
                    <p><BigSpace />本意見調查旨在探討員工個人對於組織提供關於職場心理健康促進措施之感受，本一件調查為一學術問卷，您的協助對於本研究有莫大的貢獻。由於本研究關 新的是您個人的看法，任何問題皆沒有「對」或「錯」的答案，依照您於職場中真實意見填答即可。</p>
                    <p><BigSpace />本問卷乃學術調查，嚴守研究倫理，所有填答資訊皆採匿名處理，且僅由研究人員經手，不會向任何人員揭露。一切填答資料僅提供給研究人員作為學術上的統計分析之用，不會作為其他任何用途，請您放心填答。填答本問卷時間約為15分鐘，您的協助對於本研究有莫大的貢獻，感謝您！</p>
                    <p><BigSpace />若您完整填答此份問卷，可獲得：</p>
                    <p><BigSpace len="6" />1. 自身職場心理健康的狀況</p>
                    <p><BigSpace len="6" />2. 自己所擁有的資源在相同產業中的分佈狀況</p>
                    <p><BigSpace />然而，由於初期填寫的資料量尚不足，以上兩種回饋須待資料量較充足時才能計算，逤有需要獲得以上回饋，請在問卷最後留下電子信箱，研究人員將在計算出結果後寄送回饋單。</p>
                    <p><BigSpace />感謝您的耐心填答，在此祝您工作順利！</p>

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


class Consultation extends Component {
    render() {
        return (
            <div>
                <Helmet><title>Psychological | Enterprise</title></Helmet>
                <Overlap img={backgroundConsultation} >
                    <h3>諮商/職業醫學科</h3>
                    <h4 className="float-right">Mental Health Counselling Services</h4>
                </Overlap>
                <div className="text-white p-3">
                    <p><BigSpace />本網站僅提供職業健康心理的資訊，若有更進一步需要協助的部分，請參考以下相關連結及資訊。</p>

                    <div className="container">

                        <div className="row">

                            <ContentImageDivider image={doc1} className="row col-12">
                                <TitleContentDivider titleImg={title1}>
                                    <LocationContentDivider>
                                        <LinkGroup data={hospitalJson['head']}></LinkGroup>
                                    </LocationContentDivider>
                                </TitleContentDivider>
                            </ContentImageDivider>

                            <ContentImageDivider image={doc2} className="row col-12">
                                <TitleContentDivider titleImg={title2}>
                                    <LocationContentDivider locationImg={taipei}>
                                        <LinkGroup data={hospitalJson['taipei']}></LinkGroup>
                                    </LocationContentDivider>
                                    <LocationContentDivider locationImg={sinbei}>
                                        <LinkGroup data={hospitalJson['sinbei']}></LinkGroup>
                                    </LocationContentDivider>
                                </TitleContentDivider>
                            </ContentImageDivider>

                            <ContentImageDivider image={doc3} imageRight className="row col-12">
                                <LocationContentDivider locationImg={taoyuan}>
                                    <LinkGroup data={hospitalJson['taoyuan']}></LinkGroup>
                                </LocationContentDivider>
                                <LocationContentDivider locationImg={hsinchu}>
                                    <LinkGroup data={hospitalJson['hsinchu']}></LinkGroup>
                                </LocationContentDivider>
                                <LocationContentDivider locationImg={yilan}>
                                    <LinkGroup data={hospitalJson['yilan']}></LinkGroup>
                                </LocationContentDivider>
                                <LocationContentDivider locationImg={keelung}>
                                    <LinkGroup data={hospitalJson['keelung']}></LinkGroup>
                                </LocationContentDivider>
                            </ContentImageDivider>

                            <ContentImageDivider image={doc4} className="row col-12">
                                <LocationContentDivider locationImg={miaoli}>
                                    <LinkGroup data={hospitalJson['miaoli']}></LinkGroup>
                                </LocationContentDivider>
                                <LocationContentDivider locationImg={taichung}>
                                    <LinkGroup data={hospitalJson['taichung']}></LinkGroup>
                                </LocationContentDivider>
                                <LocationContentDivider locationImg={changhua}>
                                    <LinkGroup data={hospitalJson['changhua']}></LinkGroup>
                                </LocationContentDivider>
                                <LocationContentDivider locationImg={chiayi}>
                                    <LinkGroup data={hospitalJson['chiayi']}></LinkGroup>
                                </LocationContentDivider>
                            </ContentImageDivider>   

                            <ContentImageDivider image={doc5} imageRight className="row col-12">
                                <LocationContentDivider locationImg={tainan}>
                                    <LinkGroup data={hospitalJson['tainan']}></LinkGroup>
                                </LocationContentDivider>
                                <LocationContentDivider locationImg={kaohsiung}>
                                    <LinkGroup data={hospitalJson['kaohsiung']}></LinkGroup>
                                </LocationContentDivider>
                                <LocationContentDivider locationImg={others}>
                                    <LinkGroup data={hospitalJson['others']}></LinkGroup>
                                </LocationContentDivider>
                            </ContentImageDivider>
                        </div>
                    </div>
                </div>
            </div>
        );
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

export default Staff;
