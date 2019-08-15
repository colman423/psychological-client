import React from 'react';
import { Image } from 'react-bootstrap';
import LotteryModal from '../Components/LotteryModal';
import LotteryPage from "../Containers/LotteryPage";
import ContactForm from '../Components/ContactForm';
import Navbar, { NavLink } from "../Components/Navbar";
import backgroundHome from '../Images/background/home.png';
import icon from '../Images/logo/logo@2x.png';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { Dropdown, ButtonGroup } from 'react-bootstrap';

function StartPage() {
    return (
        <>
            <div className=" h-100 pt-3">
                <Helmet><title>EAPick 員工協助與職場健康網</title></Helmet>

                <Navbar>
                    <Dropdown as={ButtonGroup} alignRight>
                        <NavLink to="/enterprise" className="nav-link text-white">企業版</NavLink>
                        <Dropdown.Toggle split variant="link" className="text-white" />
                        <Dropdown.Menu>
                            <Dropdown.Item href="/enterprise/health/">職場健康心理學</Dropdown.Item>
                            <Dropdown.Item href="/enterprise/checklist/">EAP檢核表</Dropdown.Item>
                            <Dropdown.Item href="/enterprise/practice/">實務方案</Dropdown.Item>
                            <Dropdown.Item href="/enterprise/cases/">個案分析</Dropdown.Item>
                            <Dropdown.Item href="/enterprise/consultant/">顧問資源</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown as={ButtonGroup} alignRight>
                        <NavLink to="/staff" className="nav-link text-white">員工版</NavLink>
                        <Dropdown.Toggle split variant="link" className="text-white" />
                        <Dropdown.Menu>
                            <Dropdown.Item href="/staff/health/">職場健康心理學</Dropdown.Item>
                            <Dropdown.Item href="/staff/questionnaire/">員工自我檢測</Dropdown.Item>
                            <Dropdown.Item href="/staff/consultation/">諮商/職業醫學科</Dropdown.Item>
                            <Dropdown.Item href="/staff/stress/">壓力管理與調適</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                </Navbar>

                <Banner />

                {/* <LotteryHeading /> */}
                <LotteryPage />

                <div className="bg-bluegreen text-white mt-4 pt-1 pb-4">
                    <Contact />
                    <HomeFooter />
                </div>

            </div>
            <LotteryModal />
        </>
    );
}

function Banner(props) {
    return (
        <div style={{ 'position': "relative" }}>
            <Image src={backgroundHome} fluid style={{ 'zIndex': 2 }}></Image>
            <div style={{ 'zIndex': "3", 'top': "40%", 'right': "5%", 'position': "absolute", 'transform': "translateY(-50%)" }}>
                <div className="bg-white text-theme float-right py-4">
                    <h2 className="font-weight-bold my-0">員工協助與職場健康網</h2>
                </div>
            </div>
        </div>
    )
}
function LotteryHeading(props) {
    return (
        <div className="bg-warning py-4 px-4 text-white mb-3">
            <h1><b>抽獎資訊</b></h1>
        </div>
    )
}
function Contact(props) {
    return (
        <div className="container">
            <div className="row text-center">
                <div className="col-12 my-3">
                    <h3>
                        <span className="h5">&#9679;</span>聯絡我們<span className="h5">&#9679;</span>
                    </h3>
                </div>
            </div>
            <ContactForm className="col-10 mx-auto text-center">
            </ContactForm>
        </div>
    )
}

function HomeFooter(props) {
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-1 text-center">
                    <img alt="EAPick Logo" src={icon} width="50px"></img>
                </div>
                <div className="col-md-11 row">
                    <div className="col-md-6 border-md-right text-center text-md-left">
                        <div className="mx-auto text-center">
                            <span><i className="far fa-envelope"></i>&nbsp;&nbsp;iopsylab2016@gmail.com</span>
                            <br />
                            <span>研究執行單位：國立政治大學心理學系工商心理學研究室</span>
                        </div>
                    </div>
                    <div className="col-md-6 text-center text-md-left">
                        <div className="mx-auto text-center">
                            <span>116</span>
                            <br />
                            <span>台北市文山區指南路二段64號</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default StartPage;
