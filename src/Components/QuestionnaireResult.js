import React, { Component } from "react";
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
                <div className="container pt-5">
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
                    </div>
                </div>
            </div>
        )
    }
}


function PreTest(props) {
    return (
        <div className="bg-white">
            <div className="container pt-5">
                <div class="row">
                    <div className="col-12 col-lg-6 mb-5">
                        <p>現在還沒有資料歐歐</p>
                    </div>
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
        'id': "0"
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
        Api.getScore(this.props.id).then(data => {
            this.setState({ 'data': data, 'success': true });
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
