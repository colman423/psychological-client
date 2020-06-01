import React from 'react';
import { Helmet } from "react-helmet";
import { Route } from 'react-router-dom';
import { Image } from 'react-bootstrap';

import PageComponent from "../Components/PageComponent";
import Navbar, { NavLink } from "../Components/Navbar";
import Footer from "../Components/Footer";
import Overlap from "../Components/Overlap";
import BorderedTitle from "../Components/BorderedTitle";
import SurveyEntry from "../Components/SurveyEntry";
import BigSpace from "../Components/BigSpace";
import CommonHealth from "../Containers/Health";
import LotteryPage from "../Containers/LotteryPage";

import backgroundChecklist from '../Images/background/checklist.png';
// import backgroundPractice from '../Images/background/practice.png';
// import backgroundCases from '../Images/background/cases.png';
// import backgroundConsultant from '../Images/background/consultant.png';
import comingSoon from '../Images/coming-soon.png';
import * as log from 'loglevel'


const basePath = "/enterprise";

function Enterprise({ match }) {
    log.debug("Enterprise");
    log.debug(match);
    return (
        <>
            <div className="main-container">
                <div className="main-content">
                    <Navbar>
                        <NavLink to={`${basePath}/health/`} className="nav-link text-white">職場健康心理學</NavLink>
                        <NavLink to={`${basePath}/checklist/`} className="nav-link text-white">方案檢核表</NavLink>
                        {/* <NavLink to={`${basePath}/consultant/`} className="nav-link text-white">顧問資源</NavLink> */}
                        <NavLink to={`/staff`} className="nav-link text-white">
                            <BorderedTitle className="h5" radius="10px">切換至員工版</BorderedTitle>
                        </NavLink>
                    </Navbar>

                    <Route path={`${basePath}/`} exact component={() => <Health path={`${basePath}/`} />} />
                    <Route path={`${basePath}/health/`} component={() => <Health path={`${basePath}/health/`} />} />
                    <Route path={`${basePath}/checklist/`} component={CheckList} />
                    <Route path={`${basePath}/consultant/`} component={Consultant} />
                    <Route path={`${basePath}/lottery/`} component={Lottery} />
                </div>
                <Footer />
            </div>
        </>
    );
}

class Health extends PageComponent {
    render() {
        log.debug("health", this.props);
        return (
            <>
                <Helmet><title>What is Occupational Health Psychology? | Enterprise</title></Helmet>
                <CommonHealth path={this.props.path} />
            </>
        );
    }
}

class CheckList extends PageComponent {
    render() {
        return (
            <>
                <Helmet><title>EAP checklist | Enterprise</title></Helmet>
                <Overlap img={backgroundChecklist} >
                    <h3>方案檢核表</h3>
                    <h4 className="">Checklist</h4>
                </Overlap>
                <div className="text-white p-3">
                    <p><BigSpace />本研究整理目前企業界、學術界所有企業方案實務後，彙整出19項方案，了解員工實務方案之實施效益，並期盼能建立一數據資料庫，供未來研究分析使用，增進學術與業界對於職場環境與員工心理健康的了解。懇請您詳閱各方案之執行內容，並判斷貴公司是否有執行與該執行內容相關的方案，若貴公司目前有施行相關方案，請您評估公司對該項方案的「重視程度」；若貴公司無施行該項方案，請圈選「沒有施行」。</p>
                    <p><BigSpace />由於本研究關心的是企業中各方案之施行狀況，以及企業對各方案的重視程度，故任何問題皆沒有「對」或「錯」之分，請您依照貴公司真實狀況填答即可。本問卷乃學術調查，嚴守研究倫理，所有填答資訊皆採匿名處理，且僅由研究人員經手，不會向任何人員揭露。一切填答資料僅提供給研究人員作為學術上的統計分析之用，不會作為其他用途。填答本問卷時間約為5分鐘，您的協助對於本研究有莫大的貢獻，感謝您！</p>
                    <p><BigSpace />若您完整填答此份問卷，可獲得：</p>
                    <p><BigSpace len="4" />1. 相同產業的重視程度之常模</p>
                    <p><BigSpace len="4" />2. 相同產業中員工之資源需求分布狀況</p>
                    <br />
                    <p><BigSpace />身為研究的參與者，您有以下的權利：</p>
                    <p><BigSpace />(1) 您無須負擔任何與本研究計畫相關的費用。</p>
                    <p><BigSpace />(2) 如果您對本研究計畫有任何問題，請隨時與計畫主持人/研究人員連絡。（電話：(02)2939-3091轉62981或電子郵件：cckuo@nccu.edu.tw）</p>
                    <p><BigSpace />(3) 如果您因參加本研究計畫而導致任何傷害時所產生之法律責任，將由主持人負責。</p>
                    <p><BigSpace />(4) 如果您因參與本研究計畫而感到權益受損或受到傷害，請與本案人類研究倫理審查委員會承辦人連絡（電話：(02)2939-3091轉66015或電子郵件：lchuang@nccu.edu.tw）。</p>
                    <p><BigSpace />本研究所有資料都僅用於研究之用，資料搜集後僅有研究者能接觸此資料，並僅作為當次研究目的之用，除非當事者同意，否則任何人無法接觸此資料。本研究所有研究成果皆只用於研究之用，不涉及任何商業行為。</p>
                    <p><BigSpace />再次感謝您的幫助！</p>

                    <SurveyEntry className="text-center mb-5" href="/questionnaire/enterprise" />
                </div>
            </>
        );
    }
}


class Consultant extends PageComponent {
    render() {
        return (
            <>
                <Helmet><title>Coming soon | Enterprise</title></Helmet>
                <div className="container my-3">
                    <div className="row">
                        <div className="col-4 mx-auto">
                            <Image src={comingSoon} fluid></Image>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

class Lottery extends PageComponent {
    render() {
        return (
            <>
                <Helmet><title>抽獎資訊 | Enterprise</title></Helmet>
                <LotteryPage linkText="方案檢核表" linkUrl={`${basePath}/checklist/`} />
            </>
        );
    }
}
export default Enterprise;
