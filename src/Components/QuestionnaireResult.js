import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import ClipLoader from 'react-spinners/ClipLoader';

import BorderedTitle from '../Components/BorderedTitle';

import { HorizontalBarChart, RadarChart, PieChart } from './Chart';
import Api from '../Api';

class Result extends Component {
    static defaultProps = {
        data: {}
    }

    render() {
        let { data } = this.props;
        return (
            <div className="bg-white">
                <div className="container pt-5 pb-5">
                    <div className="row">
                        <div className="col-12 col-lg-6 mb-5">
                            <div className="row">
                                <div className="col-12">
                                    <BorderedTitle className="h4 font-weight-bold" radius="15px">整體性健康</BorderedTitle>
                                </div>
                                <div className="col-10 mt-3">
                                    <HorizontalBarChart value={56} />
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6 mb-5">
                            <div className="row">
                                <div className="col-12">
                                    <BorderedTitle className="h4 font-weight-bold" radius="15px">疲勞狀況</BorderedTitle>
                                </div>
                                <div className="col-10 mt-3">
                                    <HorizontalBarChart value={56} />
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6 mb-5">
                            <div className="row">
                                <div className="col-12">
                                    <BorderedTitle className="h4 font-weight-bold" radius="15px">壓力狀態</BorderedTitle>
                                </div>
                                <div className="col-12 mt-1">
                                    <PieChart data={data.stress} />
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6 mb-5">
                            <div className="row">
                                <div className="col-12">
                                    <BorderedTitle className="h4 font-weight-bold" radius="15px">過勞狀態</BorderedTitle>
                                </div>
                                <div className="col-12 mt-1">
                                    <PieChart data={data.overwork} />
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="row">
                                <div className="col-12">
                                    <BorderedTitle className="h4 font-weight-bold" radius="15px">職場健康心理資源指數</BorderedTitle>
                                </div>
                                <div className="col-12 mb-5">
                                    <RadarChart data={data.resource || []} />
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <Link to="/" className=""><u>點我返回首頁</u></Link>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}


function PreTest(props) {
    return (
        <div className="container pt-5 text-white">
            <div className="row">
                <div className="col-12 col-lg-6 mx-auto">
                    <p>十分抱歉，由於目前累積的資料量尚不足以進行分析，因此還無法給予您立即的回饋。</p>
                    <p>待資料量足夠時，會將您個人的回饋檔案寄至前面您於個人資料中所留的電子信箱，屆時若有任何疑問歡迎與我們聯繫。</p>
                    <p>再次感謝您的填答，祝您工作一切順利！</p>
                    <Link to="/" className="text-white"><u>點我返回首頁</u></Link>
                </div>
            </div>
        </div>
    )
}

function Loading(props) {
    return (
        <div className="text-center pt-5">
            <ClipLoader
                color="white"
                size={50}
            />
        </div>
    )
}

class QuestionnaireResult extends Component {
    static defaultProps = {
        'id': "0",
        'token': ""
    };

    constructor(props) {
        super(props);
        this.state = {
            success: false,
            data: {}
        }
    }

    componentDidMount() {
        console.log(this.props);
        let { id, token } = this.props;
        Api.getScore(id, token).then(result => {
            this.setState({ 'data': result.data, 'success': result.success });
        })
    }

    componentDidUpdate() {
        console.log("update", this.state.data);
    }

    render() {
        let { data, success } = this.state;
        console.log("render", data)

        return (
            <>
                <Helmet><title>{this.props.id} Result</title></Helmet>
                {/* <Loading /> */}
                {success ?
                    (
                        // data.preTest ?
                        Math.floor(Math.random() * 2) ?
                            <PreTest />
                            :
                            <Result data={data} />
                    )
                    :
                    <Loading />
                }

            </>
        )
    }
}

export default QuestionnaireResult;
