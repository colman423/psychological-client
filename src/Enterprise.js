import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import NavBanner, { NavLink, BannerTitle, BannerText } from "./NavBanner";
import backgroundHealth from './img/background-health.png';
import backgroundChecklist from './img/background-checklist.png';
import backgroundPractice from './img/background-practice.png';
import backgroundCases from './img/background-cases.png';
import backgroundConsultant from './img/background-consultant.png';
import { Route } from 'react-router-dom';

const basePath = "/enterprise";

function Enterprise({ match }) {
    console.log("Enterprise");
    return (
        <div>
            <Route path={`${basePath}/`} exact component={Health} />
            <Route path={`${basePath}/health/`} component={Health} />
            <Route path={`${basePath}/checklist/`} component={CheckList} />
            <Route path={`${basePath}/practice/`} component={Practice} />
            <Route path={`${basePath}/cases/`} component={Cases} />
            <Route path={`${basePath}/consultant/`} component={Consultant} />
        </div>
    );
}

class Health extends Component {
    render() {
        return (
            <div>
                <Helmet><title>Psychological | Enterprise</title></Helmet>
                <NavBanner img={backgroundHealth} >
                    <NavLink to={`${basePath}/health/`} className="nav-link text-white">職場心理健康</NavLink>
                    <NavLink to={`${basePath}/checklist/`} className="nav-link text-white">資源檢核表</NavLink>
                    <NavLink to={`${basePath}/practice/`} className="nav-link text-white">實務方案</NavLink>
                    <NavLink to={`${basePath}/cases/`} className="nav-link text-white">個案分析</NavLink>
                    <NavLink to={`${basePath}/consultant/`} className="nav-link text-white">顧問資源</NavLink>
                    <BannerTitle>
                        <h3>職場心理健康是什麼？</h3>
                        <h4 className="float-right">What is Occupational Psychology?</h4>
                    </BannerTitle>
                    <BannerText>
                        <p>早期，職場所重視的議題局限於員工的「身體健康」，意即確保員工沒有受傷、遭受生理疾病，並具備足夠工作的能力，
                            便符合「健康」的定義。近年來，隨著工作場域變得更加複雜，員工所遭遇的挑戰事件也逐漸增加，
                            當這些事件所造成的心理壓力過大而沒有得到適當處理時，便會對員工的健康產生影響。因此，
                            如何有效減少員工的心理壓力及過勞問題便成為各界關注的重要議題，不同領域的專家也以更全面的角度檢視員工健康議題，
                            並以「職業健康心理學（Occupational Health Psychology）」、「職場心理健康（Workplace Mental Health）」等名詞
                            [3] [4]。職場心理健康是一個涉及員工身心健康的重要議題，除了傳統的健康管理之外，也加入了工業與組織心理學、臨床心理學
                            、人因工程學的不同領域的技術與知識，透過整合不同學門的專長，提升員工的職場心理健康，減少組織中的負面結果，
                            全面保障員工的身心狀況 [5]。
                            </p>
                    </BannerText>
                </NavBanner>
            </div>
        );
    }
}

class CheckList extends Component {
    render() {
        return (
            <div>
                <Helmet><title>Psychological | Enterprise</title></Helmet>
                <NavBanner img={backgroundChecklist} >
                    <NavLink to={`${basePath}/health/`} className="nav-link text-white">職場心理健康</NavLink>
                    <NavLink to={`${basePath}/checklist/`} className="nav-link text-white">資源檢核表</NavLink>
                    <NavLink to={`${basePath}/practice/`} className="nav-link text-white">實務方案</NavLink>
                    <NavLink to={`${basePath}/cases/`} className="nav-link text-white">個案分析</NavLink>
                    <NavLink to={`${basePath}/consultant/`} className="nav-link text-white">顧問資源</NavLink>
                    <BannerTitle>
                        <h3>檢查自身公司的資源是否充足</h3>
                        <h4 className="float-right">Resource checklist</h4>
                    </BannerTitle>
                    <BannerText>
                        <p>依照貴公司目前現行實務方案進行勾選，檢核自身公司有無所需之資源。</p>
                    </BannerText>
                </NavBanner>
            </div>
        );
    }
}

class Practice extends Component {
    render() {
        return (
            <div>
                <Helmet><title>Psychological | Enterprise</title></Helmet>
                <NavBanner img={backgroundPractice} >
                    <NavLink to={`${basePath}/health/`} className="nav-link text-white">職場心理健康</NavLink>
                    <NavLink to={`${basePath}/checklist/`} className="nav-link text-white">資源檢核表</NavLink>
                    <NavLink to={`${basePath}/practice/`} className="nav-link text-white">實務方案</NavLink>
                    <NavLink to={`${basePath}/cases/`} className="nav-link text-white">個案分析</NavLink>
                    <NavLink to={`${basePath}/consultant/`} className="nav-link text-white">顧問資源</NavLink>
                    <BannerTitle>
                        <h3>實務方案參考</h3>
                        <h4 className="float-right">Practices</h4>
                    </BannerTitle>
                    <BannerText>
                        <p>我們整理了一些曾經得果獎的企業的所施行之有效的實務方案，可供貴公司參考。</p>
                        <p>我們依照資源做分類索引，貴公司可根據本網站的資源檢核表作為參考依據，評估貴公司腳為缺乏的資源為何，再以此選擇要參考哪一類別的實務方案。</p>
                    </BannerText>
                </NavBanner>
            </div>
        );
    }
}

class Cases extends Component {
    render() {
        return (
            <div>
                <Helmet><title>Psychological | Enterprise</title></Helmet>
                <NavBanner img={backgroundCases} >
                    <NavLink to={`${basePath}/health/`} className="nav-link text-white">職場心理健康</NavLink>
                    <NavLink to={`${basePath}/checklist/`} className="nav-link text-white">資源檢核表</NavLink>
                    <NavLink to={`${basePath}/practice/`} className="nav-link text-white">實務方案</NavLink>
                    <NavLink to={`${basePath}/cases/`} className="nav-link text-white">個案分析</NavLink>
                    <NavLink to={`${basePath}/consultant/`} className="nav-link text-white">顧問資源</NavLink>
                    <BannerTitle>
                        <h3>個案分析</h3>
                        <h4 className="float-right">Case study</h4>
                    </BannerTitle>
                    <BannerText>
                        <p>本網站特別針對某幾間企業作為個案進行更深入的研究，試圖為企業們找出有效的方案幫助提升職場心理健康。</p>
                    </BannerText>
                </NavBanner>
            </div>
        );
    }
}

class Consultant extends Component {
    render() {
        return (
            <div>
                <Helmet><title>Psychological | Enterprise</title></Helmet>
                <NavBanner img={backgroundConsultant} >
                    <NavLink to={`${basePath}/health/`} className="nav-link text-white">職場心理健康</NavLink>
                    <NavLink to={`${basePath}/checklist/`} className="nav-link text-white">資源檢核表</NavLink>
                    <NavLink to={`${basePath}/practice/`} className="nav-link text-white">實務方案</NavLink>
                    <NavLink to={`${basePath}/cases/`} className="nav-link text-white">個案分析</NavLink>
                    <NavLink to={`${basePath}/consultant/`} className="nav-link text-white">顧問資源</NavLink>
                    <BannerTitle>
                        <h3>顧問資源</h3>
                        <h4 className="float-right">Consultant</h4>
                    </BannerTitle>
                    <BannerText>
                        <p>在此，本網站整理了國內為企業解決職場心理健康問題之顧問公司，提供各企業尋求協助。</p>
                    </BannerText>
                </NavBanner>
            </div>
        );
    }
}

export default Enterprise;
