import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Route } from 'react-router-dom';

import Navbar, { NavLink } from "../Components/Navbar";
import Overlap from "../Components/Overlap";
import BigSpace from "../Components/BigSpace";
import BorderedTitle from "../Components/BorderedTitle";

import backgroundHealth from '../img/background-health.png';
import backgroundChecklist from '../img/background-checklist.png';
import backgroundPractice from '../img/background-practice.png';
import backgroundCases from '../img/background-cases.png';
import backgroundConsultant from '../img/background-consultant.png';


const basePath = "/enterprise";

function Enterprise({ match }) {
    console.log("Enterprise");
    console.log(match);
    return (
        <div>
            <Navbar img={backgroundHealth} >
                <NavLink to={`${basePath}/health/`} className="nav-link text-white">職場健康心理學</NavLink>
                <NavLink to={`${basePath}/checklist/`} className="nav-link text-white">EAP檢核表</NavLink>
                <NavLink to={`${basePath}/practice/`} className="nav-link text-white">實務方案</NavLink>
                <NavLink to={`${basePath}/cases/`} className="nav-link text-white">個案分析</NavLink>
                <NavLink to={`${basePath}/consultant/`} className="nav-link text-white">顧問資源</NavLink>
            </Navbar>

            <Route path={`${basePath}/`} exact component={Health} />
            <Route path={`${basePath}/health/`} component={Health} />
            <Route path={`${basePath}/checklist/`} component={CheckList} />
            <Route path={`${basePath}/practice/`} component={Practice} />
            <Route path={`${basePath}/cases/`} component={Cases} />
            <Route path={`${basePath}/consultant/`} component={Consultant} />
        </div>
    );
}

function Health() {
    return (
        <div>
            <Helmet><title>Psychological | Enterprise</title></Helmet>
            <Overlap img={backgroundHealth} >
                <h3>職場健康心理學</h3>
                <h4 className="float-right">What is Occupational Psychology?</h4>
            </Overlap>
            <div className="text-white p-3 px-md-4">
                <p><BigSpace></BigSpace>職場健康心理學（Occupational health psychology）將重點放在研究組織內員工的身心健康狀態，特別注意工作中存在的壓力、疾病及傷害等組織風險因素的一級預防。根據美國國家職業安全及健康機構（The National Institute for Occupational Safety and Health, NIOSH）的定義，職場健康心理學提倡的是改善員工的生活品質，並保護及提升員工之安全、健康及福祉。企業組織應在工作環境中透過措施降低員工暴露於工作危害中的機會，並提供員工相關知識及資源，以改善員工狀態。簡單的說，職場健康心理學除了重視員工的身體健康（physical health），也同樣重視心理層面（mental）的健康狀態。職場健康心理學所關注的議題廣泛，舉凡工作壓力、工作過勞，甚至是酒癮、職家衝突與平衡等，皆為職場健康心理學的研究範疇。</p>
                <p><BigSpace></BigSpace>職場健康心理學主要關注三個面向，內容如下所示：</p>
                <p><span><BigSpace len="6"></BigSpace>(1)工作環境(the work environment)</span>
                    <br></br>
                    <span><BigSpace len="8"></BigSpace>針對整個組織所推動健康實務，例如改善組織中的文化、氣候、關係、個人角色等等，依據以上內容減少組織中的壓力源，使組織營造出重視健康的工作環境。</span>
                </p>
                <p><span><BigSpace len="6"></BigSpace>(2)個人健康(the individual)</span>
                    <br></br>
                    <span><BigSpace len="8"></BigSpace>相對工作環境來說，此部分相對較關注於員工個人，例如員工的性別、年齡、健康狀況、情緒等面向，依據這些部分加以考慮健康實務措施，以採取適合措施以減少員工壓力的產生。</span>
                </p>
                <p><span><BigSpace len="6"></BigSpace>(3)工作─家庭方面(the work-family interface)</span>
                    <br></br>
                    <span><BigSpace len="8"></BigSpace>著重於員工的工作是否會對家庭產生負面影響，而隨著越來越多女性進入職場這項議題的重要性也逐漸增加，因此例如彈性工時、加班狀況、家庭照護等議題皆是此部分職場健康心理學所關注的項目。</span>
                </p>

                <BorderedTitle className="text-white h4 mt-4" radius="10px">員工協助方案</BorderedTitle>
                <p className="mt-3"><BigSpace></BigSpace>	面對職場中心理健康的危機，企業組織最常使用的因應方式為員工協助方案（Employee Assistance Programs, EAPs）。EAPs是企業透過系統化的專業服務，規劃方案與提供資源，以預防及解決可能導致員工工作生產力下降的組織與個人議題，使員工能以健康的身心投入工作，讓企業提升競爭力，塑造勞資雙贏。而國際員工協助專業協會（International Employee Assistance Professions Association）認為EAP為一工作場所計畫，旨在協助：</p>
                <p>1. 工作組織解決生產力相關問題。</p>
                <p>2. 透過「員工顧問（employee-clients）」協助員工找出及解決可能會影響個人工作表現的相關議題（如：健康、婚姻、家庭、財務、酒精、毒品、法務、情緒、壓力及其他個人議題）。</p>
                <p><BigSpace></BigSpace>根據勞動部「員工協助方案推動手冊」的說明，EAPs的服務方式多為建立制度化的服務系統，並將員工所遭遇的問題分成「工作」、「生活」與「健康」三大面向。</p>
            </div>
        </div >
    );
}

function CheckList() {
    return (
        <div>
            <Helmet><title>Psychological | Enterprise</title></Helmet>
            <Overlap img={backgroundChecklist} >
                <h3>檢查自身公司的資源是否充足</h3>
                <h4 className="float-right">Resource checklist</h4>
            </Overlap>
            <div className="text-white p-3">
                <p>依照貴公司目前現行實務方案進行勾選，檢核自身公司有無所需之資源。</p>
            </div>
        </div>
    );
}

function Practice() {
    return (
        <div>
            <Helmet><title>Psychological | Enterprise</title></Helmet>
            <Overlap img={backgroundPractice} >
                <h3>實務方案參考</h3>
                <h4 className="float-right">Practices</h4>
            </Overlap>
            <div className="text-white p-3">
                <p>我們整理了一些曾經得果獎的企業的所施行之有效的實務方案，可供貴公司參考。</p>
                <p>我們依照資源做分類索引，貴公司可根據本網站的資源檢核表作為參考依據，評估貴公司腳為缺乏的資源為何，再以此選擇要參考哪一類別的實務方案。</p>
            </div>
        </div>
    );
}

function Cases() {
    return (
        <div>
            <Helmet><title>Psychological | Enterprise</title></Helmet>
            <Overlap img={backgroundCases} >
                <h3>個案分析</h3>
                <h4 className="float-right">Case study</h4>
            </Overlap>
            <div className="text-white p-3">
                <p>本網站特別針對某幾間企業作為個案進行更深入的研究，試圖為企業們找出有效的方案幫助提升職場心理健康。</p>
            </div>
        </div>
    );
}

function Consultant() {
    return (
        <div>
            <Helmet><title>Psychological | Enterprise</title></Helmet>
            <Overlap img={backgroundConsultant} >
                <h3>顧問資源</h3>
                <h4 className="float-right">Consultant</h4>
            </Overlap>
            <div className="text-white p-3">
                <p>在此，本網站整理了國內為企業解決職場心理健康問題之顧問公司，提供各企業尋求協助。</p>
            </div>
        </div>
    );
}

export default Enterprise;
