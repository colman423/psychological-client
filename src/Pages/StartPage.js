import React from 'react';
import { Image } from 'react-bootstrap';
import TitleIconBtn from '../Components/TitleIconBtn';
import HoverTransition from '../Components/HoverTransition';
import ContactForm from '../Components/ContactForm';
import backgroundHome from '../img/background-home.png';
import enterprise from '../img/enterprise.png';
import staff from '../img/staff.png';
import icon from '../img/icon-white.png';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

function StartPage() {
    return (
        <div>
            <div className=" h-100 pt-3">
                <Helmet><title>Psychological</title></Helmet>
                <h1 className="text-white text-center">
                    <img alt="Website Name" src={icon} width="50px"></img>
                    <span className="pl-3">EAPick</span>
                </h1>

                <div style={{ 'position': "relative" }}>
                    <Image src={backgroundHome} fluid style={{ 'zIndex': 2 }}></Image>
                    <div style={{ 'zIndex': "3", 'top': "40%", 'right': "5%", 'position': "absolute", 'transform': "translateY(-50%)" }}>
                        <div className="bg-white text-theme float-right py-4">
                            <h2 className="font-weight-bold my-0">員工協助與職場健康網</h2>
                        </div>
                    </div>
                </div>

                <div className="container">

                    <div className="row mt-5">
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
                                        <p><Link to="/staff/health" className="text-white w-100">職場心理健康</Link></p>
                                        <p><Link to="/staff/questionnaire" className="text-white w-100">自我檢測問卷</Link></p>
                                        <p><Link to="/staff/stress" className="text-white w-100">壓力管理與調適</Link></p>
                                        <p><Link to="/staff/consultation" className="text-white w-100">諮商諮詢服務</Link></p>
                                    </div>
                                </div>
                            </HoverTransition>
                        </div>
                    </div>


                </div>
            </div>
            <div className="bg-bluegreen text-white mt-4 pt-1 pb-4">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-12 my-3">
                            <h3>
                                <span className="h4">&#9679;</span>聯絡我們<span className="h4">&#9679;</span>
                            </h3>
                        </div>
                    </div>
                    <ContactForm className="col-10 mx-auto text-center">
                    </ContactForm>
                    <div className="row mt-4">
                        <div className="col-lg-1 text-center">
                            <img alt="Website Name" src={icon} width="50px"></img>
                        </div>
                        <div className="col-lg-11 row">
                            <div className="col-lg-4 border-right text-cenfter">
                                <div className="mx-auto">
                                    <span><i class="far fa-envelope"></i>&nbsp;&nbsp;iopsy2016lab@gmail.com</span>
                                    <br></br>
                                    <span><i class="fas fa-phone"></i>&nbsp;&nbsp;02-2939-3091 &nbsp; #67392</span>
                                </div>
                            </div>
                            <div className="col-lg-4 border-right text-cefnter">
                                <span>研究執行：單位國立政治大學</span>
                                <br></br>
                                <span>計畫主持人：郭建志 副教授</span>
                            </div>
                            <div className="col-lg-4 text-centefr">
                                <span>116</span>
                                <br></br>
                                <span>台北市文山區指南路二段64號</span>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    );
}

export default StartPage;
