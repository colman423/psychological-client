import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import ClipLoader from 'react-spinners/ClipLoader';

import BorderedTitle from '../Components/BorderedTitle';

import { HorizontalBarChart, RadarChart, PieChart } from './Chart';
import Api from '../Api';
import * as log from 'loglevel'

class Result extends Component {
    static defaultProps = {
        data: {},
        average: {}
    }

    render() {
        let { data, average } = this.props;

        const resource = data.resource || [];
        for (let i = 0; i < resource.length; i++) {
            const key = resource[i].name;
            resource[i].average = average.resource[key]
        }
        log.debug("resource", resource)

        return (
            <div className="bg-white">
                <div className="container pt-5 pb-5">
                    <div className="row">
                        <div className="col-12 col-lg-6 mb-5">
                            {data.fatigue !== undefined && (
                                <div className="row">
                                    <div className="col-12">
                                        <BorderedTitle className="h4 font-weight-bold" radius="15px">疲勞狀況</BorderedTitle>
                                    </div>
                                    <div className="col-10 mt-3">
                                        <HorizontalBarChart value={data.fatigue} average={average.fatigue} />
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="col-12 col-lg-6 mb-5">
                            {data.GHQ !== undefined && (
                                <div className="row">
                                    <div className="col-12">
                                        <BorderedTitle className="h4 font-weight-bold" radius="15px">整體性健康</BorderedTitle>
                                    </div>
                                    <div className="col-10 mt-3">
                                        <HorizontalBarChart value={data.GHQ} average={average.GHQ} />
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="col-12 col-lg-6 mb-5">
                            {data.stress !== undefined && (
                                <div className="row">
                                    <div className="col-12">
                                        <BorderedTitle className="h4 font-weight-bold" radius="15px">壓力狀態</BorderedTitle>
                                        <p className="text-secondary">(若圖表旁未出現文字，請點選色塊)</p>
                                    </div>
                                    <div className="col-12 mt-1">
                                        <PieChart
                                            data={data.stress}
                                            averageLabel="壓力"
                                            averageText="輕微的壓力"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="col-12 col-lg-6 mb-5">
                            {data.overwork !== undefined && (
                                <div className="row">
                                    <div className="col-12">
                                        <BorderedTitle className="h4 font-weight-bold" radius="15px">過勞狀態</BorderedTitle>
                                        <p className="text-secondary">(若圖表旁未出現文字，請點選色塊)</p>
                                    </div>
                                    <div className="col-12 mt-1">
                                        <PieChart
                                            data={data.overwork}
                                            averageLabel="過勞"
                                            averageText="我有時會處於壓力狀態，雖然不如往常一樣的活力充沛，但我並沒有工作過勞的感受。"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="col-12">
                            {data.resource !== undefined && (
                                <div className="row mb-5">
                                    <div className="col-12">
                                        <BorderedTitle className="h4 font-weight-bold" radius="15px">職場健康心理資源指數</BorderedTitle>
                                    </div>
                                    <div className="col-12 col-lg-4">
                                        <RadarChart data={data.resource || []} />
                                    </div>
                                    <div className="col-12 col-lg-8">
                                        <p className="text-secondary">(綠色部分為優良企業測驗結果)</p>
                                        <p><b>彈性</b>: 泛指員工擁有足夠的工作時間以及相當程度的工作自主權，透過如實施彈性工時、遠距工作、家庭日等措施以完成工作任務以及平衡非工作領域的生活需求。</p>
                                        <p><b>經濟</b>: 泛指員工擁有充足經濟條件，可以維持正常生活水平以及應對生活突發事件，公司可以透過相關方案、措施或制度協助員工維持正常生活水平，幫助平衡員工因為生活所需而產生的壓力。</p>
                                        <p><b>身心</b>: 泛指員工擁有足以維繫或增進其生理以及心理達到正常水準的照護，公司可以透過如建設健身房、補助健康檢查，以及透過心理衛教講座、紓壓休閒設施等服務/方案，提升員工健康相關的知識與協助管道，確保員工擁有充足身心資源應對工作需求。</p>
                                        <p><b>專業</b>: 專業資源泛指員工得到工作所需之專業能力與技術的訓練，以及滿足員工於工作中自我提升的需求，透過提供工作內/外的訓練課程、師徒制、實務操演機會等，有效為員工提供專業資源，使其能應付職務所需，減緩其工作壓力、有效縮短工作時間。</p>
                                        <p><b>資訊</b>: 泛指員工所身處的組織在制度、系統等結構上設計秉持公平、資訊透明公開等原則，例如組織推行公平、透明的績效評估制度，減少員工因為不公平而產生的壓力、降低個體的不確定感、提升其對外在環境與內在行為的控制感，使員工於一更穩定的組織環境中工作。</p>
                                        <p><b>關係</b>: 泛指員工在工作以及非工作場域所獲得的歸屬與連結感，包含正向人際互動關係以及員工-組織連結，公司可透過團隊建立活動、家庭日以及組織表揚大會等方式增進關係資源，避免負向關係所導致的負向情緒以及情緒耗竭。</p>
                                    </div>
                                </div>
                            )}
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
                    <p>感謝您的填答，十分抱歉，由於目前累積的資料量尚不足以進行分析，因此還無法給予您立即的回饋。</p>
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
            data: {},
            average: {}
        }
    }

    componentDidMount() {
        log.debug(this.props);
        let { id, token } = this.props;
        Api.getScore(id, token).then(result => {
            this.setState({ 'data': result.data, 'success': result.success, 'average': AVERAGE });
        })
    }

    render() {
        let { data, average, success } = this.state;
        log.debug("render", data, average)

        return (
            <>
                <Helmet><title>Result | EAPick</title></Helmet>
                {/* <Loading /> */}
                {success ?
                    (
                        // data.preTest ?
                        data.pretest ?
                            <PreTest />
                            :
                            <Result data={data} average={average} />
                    )
                    :
                    <Loading />
                }

            </>
        )
    }
}


const AVERAGE = {

    'fatigue': 46.2,
    'resource': {
        "彈性": 69.9,
        "經濟": 51.1,
        "身心": 63.8,
        "專業": 52.4,
        "資訊": 35.7,
        "關係": 72.8
    }

}

export default QuestionnaireResult;
