import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Route, Redirect, Switch } from 'react-router-dom';
import { CSSTransition } from "react-transition-group";
import QuestionnaireBase from '../Components/QuestionnaireBase';

import dataQs1 from '../Data/qs1.json';
import dataQs2 from '../Data/qs2.json';

const basePath = "/questionnaire";

function QuestionnairePage({ match }) {
    return (
        <Switch>
            <Route path={`${basePath}/staff/1/:theme?`}
                component={(e) => <QuestionnaireElement data={dataQs1} theme={e.match.params.theme} />}
            />
            <Route path={`${basePath}/staff/2/:theme?`}
                component={(e) => <QuestionnaireElement data={dataQs2} theme={e.match.params.theme} />}
            />
            <Redirect to='/' />
        </Switch>
    );
}

class QuestionnaireElement extends Component {
    leavePrompt(e) {
        e.preventDefault();
        return e.returnValue = "要離開網站嗎？";
    }
    componentDidMount() {
        window.addEventListener("beforeunload", this.leavePrompt);
    }
    constructor(props) {
        super(props)
        this.state = { confirm: true };
        // this.state = { confirm: false };
    }
    confirm = () => {
        this.setState({
            ...this.state,
            confirm: true
        });
    }
    render() {
        return (
            <div>
                <Helmet><title>Survey</title></Helmet>
                <div className="container-fluid bg-orangegg">
                    <div className="row">
                        <QuestionnaireAnnounce
                            stateConfirm={this.state.confirm}
                            setConfirm={this.confirm}
                            description={Announce1()}
                            className="col-10 mx-auto mt-4 text-white"
                        />
                        <QuestionnaireTransition
                            stateConfirm={this.state.confirm}
                            data={this.props.data}
                            theme={this.props.theme}
                            leavePrompt={this.leavePrompt}
                        />

                    </div>
                </div>
            </div>
        )
    }
}

class QuestionnaireAnnounce extends Component {
    render() {
        var { description, stateConfirm, setConfirm, ...props } = this.props;
        return (
            <CSSTransition
                in={!stateConfirm}
                unmountOnExit={true}
                classNames={{ exit: "opacity-exit", exitActive: "opacity-exit-active" }}
                timeout={300}
            >
                <div {...props} >
                    {description}
                    <div className="mt-5 mb-5">
                        <div className="col-6 mx-auto row">
                            <span className="col-12 text-center mb-2">我已了解本意見調查目的，並同意參與。</span>
                            <button className="btn btn-success col-5" onClick={setConfirm}>是</button>
                            <span className="col-2"></span>
                            <button className="btn btn-secondary col-5" onClick={this.cancel}>否</button>
                        </div>
                    </div>
                </div>
            </CSSTransition>
        )
    }
}

class QuestionnaireTransition extends Component {
    render() {
        var { stateConfirm, ...props } = this.props;
        return (
            <CSSTransition
                in={stateConfirm}
                unmountOnExit={true}
                classNames={{ enter: "fadein-top-enter", enterActive: "fadein-top-enter-active" }}
                timeout={300}
            >
                <div className="col-12 col-lg-10 mx-auto px-0">
                    <QuestionnaireBase {...props }></QuestionnaireBase>
                </div>
            </CSSTransition>
        )
    }
}

function Announce1() {
    return (
        <div>
            <span>您好：<br /></span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本意見調查旨在探討員工個人對於組織提供關於職場心理健康促進措施之感受，本意見調查為一學術問卷，您的協助對於本研究有莫大的貢獻。由於本研究關心的是您個人的看法，任何問題皆沒有「對」或「錯」的答案，依照您於職場中真實意見填答即可。</span>
            <br />
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本問卷乃學術調查，嚴守研究倫理，所有填答資訊皆採匿名處理，且僅由研究人員經手，不會向任何人員揭露。一切填答資料僅提供給研究人員作為學術上的統計分析之用，不會做為其他任何用途，請您放心填答。填答本問卷時間約為15分鐘，您的協助對於本研究有莫大的貢獻，感謝您！<br /><br /></span>
            <span>執行單位：國立政治大學心理學系<br />計畫主持人：郭建志 副教授<br />敬上<br /><br /></span>
            <span>＊若您對本研究仍有疑慮，或想進一步洽詢研究單位，可與下列相關人員聯繫：<br />聯絡人：郭建志<br />電子郵件信箱：iopsylab2016@gmail.com</span>
        </div>
    )
}

export default QuestionnairePage;
