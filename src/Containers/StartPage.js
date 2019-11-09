import React from 'react';
import { Image } from 'react-bootstrap';
import LotteryModal from '../Components/LotteryModal';
import LotteryPage from "../Containers/LotteryPage";
import ContactForm from '../Components/ContactForm';
import Navbar, { NavLink } from "../Components/Navbar";
import BigSpace from "../Components/BigSpace";
import backgroundHome from '../Images/background/home.png';
import icon from '../Images/logo/logo@2x.png';
import { Helmet } from "react-helmet";
import { Dropdown, ButtonGroup } from 'react-bootstrap';

function StartPage() {
    return (
        <>
            <div className=" h-100 pt-3">
                <Helmet><title>EAPick 員工協助與職場健康網</title></Helmet>

                <HomeNav />

                <Banner />

                <LotteryPage />

                <div className="bg-bluegreen text-white mt-4 pt-1 pb-4">
                    <Contact />
                    <HomeFooter />
                </div>

            </div>
            {/* <LotteryModal /> */}
        </>
    );
}

function HomeNav(props) {
    const enterprise = {
        title: '企業版',
        basePath: '/enterprise',
        links: [
            { url: '/health', text: "職場健康心理學" },
            { url: '/checklist', text: "方案檢核表" },
            { url: '/practice', text: "實務方案電子手冊" },
            { url: '/cases', text: "個案分析" },
            // { url: '/consultant', text: "顧問資源" },
        ]
    }
    const staff = {
        title: '員工版',
        basePath: '/staff',
        links: [
            { url: '/health', text: "職場健康心理學" },
            { url: '/questionnaire', text: "員工自我檢測" },
            { url: '/consultation', text: "諮商/職業醫學科" },
            { url: '/stress', text: "壓力管理與調適" },
        ]
    }
    const styles = {
        link: {
            padding: "0.25rem 1.5rem",
            textAlign: "inherit",
            whiteSpace: "nowrap"
        }
    }
    return (
        <Navbar>
            {[enterprise, staff].map((category, cateIndex) => (
                <React.Fragment key={cateIndex}>
                    <div className="d-none d-lg-block">
                        <Dropdown as={ButtonGroup} alignRight>
                            <NavLink to={category.basePath} className="nav-link text-white">
                                {category.title}
                            </NavLink>
                            <Dropdown.Toggle split variant="link" className="text-white" />
                            <Dropdown.Menu>
                                {category.links.map((link, linkIndex) => (
                                    <NavLink
                                        to={`${category.basePath}${link.url}`}
                                        className="nav-link text-dark"
                                        style={styles.link}
                                        key={linkIndex}
                                    >
                                        {link.text}
                                    </NavLink>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="d-lg-none">
                        <NavLink to={category.basePath} className="nav-link text-white">
                            {category.title}
                        </NavLink>
                        {category.links.map((link, linkIndex) => (
                            <NavLink
                                to={`${category.basePath}${link.url}`}
                                className="nav-link text-white"
                                key={linkIndex}
                            >
                                <BigSpace />{link.text}
                            </NavLink>
                        ))}
                    </div>
                </React.Fragment>
            ))}
        </Navbar>
    )
}


function Banner(props) {
    const styles = {
        container: {
            position: "relative",
            minHeight: "80px"
        },
        img: {
            zIndex: 2,
            width: "100%"
        },
        title: {
            zIndex: "-1",
            width: "100%",
            top: "0",
            textAlign: "center",
            position: "absolute",
            color: "white",
        }
    }
    return (
        <div style={styles.container}>
            <Image src={backgroundHome} fluid style={styles.img} ></Image>
            <div style={styles.title}>
                <h1 className="h5">員工協助與職場健康網</h1>
                <h2 className="h6">填問卷抽大獎</h2>
            </div>
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
