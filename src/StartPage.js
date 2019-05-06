import React from 'react';
import TitleIconBtn from './Components/TitleIconBtn';
import HoverTransition from './Components/HoverTransition';
import enterprise from './img/enterprise.png';
import staff from './img/staff.png';
import icon from './img/icon-white.png';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

function StartPage() {
    return (
        <div className="container h-100 pt-3">
            <Helmet><title>Psychological</title></Helmet>
            <h1 className="text-white text-center">
                <img alt="Website Name" src={icon} width="50px"></img>
                <span className="pl-3">Website Name</span>
            </h1>
            <div className="row mt-6">
                <div className="col-6 text-center">
                    <HoverTransition transition={['opacity', 'scale', 'opacity-scale']} time={500}>
                        <TitleIconBtn text="企業代表" width="150px" img={enterprise}></TitleIconBtn>
                        <div className="w-100">
                            <div className="bg-secondary mx-auto pt-3 pb-2" style={{ 'width': "150px" }}>
                                <p><Link to="/enterprise/health" className="text-white w-100">職場心理健康</Link></p>
                                <p><Link to="/enterprise/checklist" className="text-white w-100">資源檢核表</Link></p>
                                <p><Link to="/enterprise/practice" className="text-white w-100">實務方案</Link></p>
                                <p><Link to="/enterprise/cases" className="text-white w-100">個案分析</Link></p>
                                <p><Link to="/enterprise/consultant" className="text-white w-100">顧問資源</Link></p>
                            </div>
                        </div>
                    </HoverTransition>
                </div>
                <div className="col-6 text-center">
                    <HoverTransition transition={['opacity', 'scale', 'opacity-scale']} time={500}>
                        <TitleIconBtn text="我是員工" width="150px" img={staff}></TitleIconBtn>
                        <div className="w-100">
                            <div className="bg-secondary mx-auto pt-4 pb-4" style={{ 'width': "150px" }}>
                                <p><Link to="/enterprise" className="text-white w-100">職場心理健康</Link></p>
                                <p><Link to="/enterprise" className="text-white w-100">自我檢測問卷</Link></p>
                                <p><Link to="/enterprise" className="text-white w-100">壓力管理與調適</Link></p>
                                <p><Link to="/enterprise" className="text-white w-100">諮商諮詢服務</Link></p>
                            </div>
                        </div>
                    </HoverTransition>
                </div>
            </div>
        </div>
    );
}

export default StartPage;
