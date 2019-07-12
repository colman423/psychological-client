import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Route } from 'react-router-dom';
// import { Image } from 'react-bootstrap';

import PageComponent from "../Components/PageComponent";
import Navbar, { NavLink } from "../Components/Navbar";
import Footer from "../Components/Footer";
import Overlap from "../Components/Overlap";
import CommonHealth from "../Components/CommonHealth";
import SurveyEntry from "../Components/SurveyEntry";
import { ContentImageDivider, TitleContentDivider, LocationContentDivider, LinkGroup } from "../Components/Consultant";
import YoutubePlayer from "../Components/YoutubePlayer";

import backgroundHealth from '../Images/background/health.png';
import backgroundQuestionnaire from '../Images/background/questionnaire.png';
import backgroundStress from '../Images/background/stress.png';
import backgroundConsultation from '../Images/background/consultation.png';
import BigSpace from '../Components/BigSpace';
import hospitalJson from '../Data/hospitalJson.json'
import title1 from '../Images/consultation/title1.png';
import title2 from '../Images/consultation/title2.png';
import doc1 from '../Images/consultation/doc1.png';
import doc2 from '../Images/consultation/doc2.png';
import doc3 from '../Images/consultation/doc3.png';
import doc4 from '../Images/consultation/doc4.png';
import doc5 from '../Images/consultation/doc5.png';
import taipei from '../Images/consultation/location/taipei.png';
import sinbei from '../Images/consultation/location/sinbei.png';
import changhua from '../Images/consultation/location/changhua.png';
import chiayi from '../Images/consultation/location/chiayi.png';
import hsinchu from '../Images/consultation/location/hsinchu.png';
import taoyuan from '../Images/consultation/location/taoyuan.png';
import yilan from '../Images/consultation/location/yilan.png';
import keelung from '../Images/consultation/location/keelung.png';
import miaoli from '../Images/consultation/location/miaoli.png';
import taichung from '../Images/consultation/location/taichung.png';
import tainan from '../Images/consultation/location/tainan.png';
import kaohsiung from '../Images/consultation/location/kaohsiung.png';
import others from '../Images/consultation/location/others.png';
import BorderedTitle from '../Components/BorderedTitle';


const basePath = "/staff";

function Staff({ match }) {
    console.log("Staff");
    return (
        <div>
            <Navbar img={backgroundHealth} >
                <NavLink to={`${basePath}/health/`} className="nav-link text-white">職場健康心理學</NavLink>
                <NavLink to={`${basePath}/questionnaire/`} className="nav-link text-white">員工自我檢測</NavLink>
                <NavLink to={`${basePath}/consultation/`} className="nav-link text-white">諮商/職業醫學科</NavLink>
                <NavLink to={`${basePath}/stress/`} className="nav-link text-white">壓力管理與調適</NavLink>
            </Navbar>

            <Route path={`${basePath}/`} exact component={Health} />
            <Route path={`${basePath}/health/`} component={Health} />
            <Route path={`${basePath}/questionnaire/`} component={Questionnaire} />
            <Route path={`${basePath}/stress/`} component={Stress} />
            <Route path={`${basePath}/consultation/`} component={Consultation} />
            <Footer />
        </div>
    );
}

class Health extends PageComponent {
    render() {
        return (
            <div>
                <Helmet><title>Psychological | Staff</title></Helmet>
                <Overlap img={backgroundHealth} >
                    <h3>職場健康心理學</h3>
                    <h4 className="float-right">What is Occupational Psychology?</h4>
                </Overlap>
                <CommonHealth staff />
            </div>
        );
    }
}

class Questionnaire extends PageComponent {
    render() {
        return (
            <div>
                <Helmet><title>Psychological | Staff</title></Helmet>
                <Overlap img={backgroundQuestionnaire} >
                    <h3>員工自我檢測</h3>
                    <h4 className="float-right">Employee Survey</h4>
                </Overlap>
                <div className="text-white p-3">
                    <p><BigSpace />本意見調查旨在探討員工個人對於組織提供關於職場心理健康促進措施之感受，本一件調查為一學術問卷，您的協助對於本研究有莫大的貢獻。由於本研究關 新的是您個人的看法，任何問題皆沒有「對」或「錯」的答案，依照您於職場中真實意見填答即可。</p>
                    <p><BigSpace />本問卷乃學術調查，嚴守研究倫理，所有填答資訊皆採匿名處理，且僅由研究人員經手，不會向任何人員揭露。一切填答資料僅提供給研究人員作為學術上的統計分析之用，不會作為其他任何用途，請您放心填答。填答本問卷時間約為15分鐘，您的協助對於本研究有莫大的貢獻，感謝您！</p>
                    <p><BigSpace />若您完整填答此份問卷，可獲得：</p>
                    <p><BigSpace len="6" />1. 自身職場心理健康的狀況</p>
                    <p><BigSpace len="6" />2. 自己所擁有的資源在相同產業中的分佈狀況</p>
                    <p><BigSpace />然而，由於初期填寫的資料量尚不足，以上兩種回饋須待資料量較充足時才能計算，逤有需要獲得以上回饋，請在問卷最後留下電子信箱，研究人員將在計算出結果後寄送回饋單。</p>
                    <p><BigSpace />感謝您的耐心填答，在此祝您工作順利！</p>

                    <SurveyEntry className="text-center mb-5" href={
                        "/client/questionnaire/staff/" + (Math.floor(Math.random() * 2) + 1)
                    } />
                </div>
            </div>
        );
    }
}


class Consultation extends PageComponent {
    render() {
        return (
            <div>
                <Helmet><title>Psychological | Enterprise</title></Helmet>
                <Overlap img={backgroundConsultation} >
                    <h3>諮商/職業醫學科</h3>
                    <h4 className="float-right">Mental Health Counselling Services</h4>
                </Overlap>
                <div className="text-white p-3">
                    <p><BigSpace />本網站僅提供職業健康心理的資訊，若有更進一步需要協助的部分，請參考以下相關連結及資訊。</p>

                    <div className="container">

                        <div className="row">

                            <ContentImageDivider image={doc1} className="row col-12">
                                <TitleContentDivider titleImg={title1}>
                                    <LocationContentDivider>
                                        <LinkGroup data={hospitalJson['head']}></LinkGroup>
                                    </LocationContentDivider>
                                </TitleContentDivider>
                            </ContentImageDivider>

                            <ContentImageDivider image={doc2} className="row col-12">
                                <TitleContentDivider titleImg={title2}>
                                    <LocationContentDivider locationImg={taipei}>
                                        <LinkGroup data={hospitalJson['taipei']}></LinkGroup>
                                    </LocationContentDivider>
                                    <LocationContentDivider locationImg={sinbei}>
                                        <LinkGroup data={hospitalJson['sinbei']}></LinkGroup>
                                    </LocationContentDivider>
                                </TitleContentDivider>
                            </ContentImageDivider>

                            <ContentImageDivider image={doc3} imageRight className="row col-12">
                                <LocationContentDivider locationImg={taoyuan}>
                                    <LinkGroup data={hospitalJson['taoyuan']}></LinkGroup>
                                </LocationContentDivider>
                                <LocationContentDivider locationImg={hsinchu}>
                                    <LinkGroup data={hospitalJson['hsinchu']}></LinkGroup>
                                </LocationContentDivider>
                                <LocationContentDivider locationImg={yilan}>
                                    <LinkGroup data={hospitalJson['yilan']}></LinkGroup>
                                </LocationContentDivider>
                                <LocationContentDivider locationImg={keelung}>
                                    <LinkGroup data={hospitalJson['keelung']}></LinkGroup>
                                </LocationContentDivider>
                            </ContentImageDivider>

                            <ContentImageDivider image={doc4} className="row col-12">
                                <LocationContentDivider locationImg={miaoli}>
                                    <LinkGroup data={hospitalJson['miaoli']}></LinkGroup>
                                </LocationContentDivider>
                                <LocationContentDivider locationImg={taichung}>
                                    <LinkGroup data={hospitalJson['taichung']}></LinkGroup>
                                </LocationContentDivider>
                                <LocationContentDivider locationImg={changhua}>
                                    <LinkGroup data={hospitalJson['changhua']}></LinkGroup>
                                </LocationContentDivider>
                                <LocationContentDivider locationImg={chiayi}>
                                    <LinkGroup data={hospitalJson['chiayi']}></LinkGroup>
                                </LocationContentDivider>
                            </ContentImageDivider>

                            <ContentImageDivider image={doc5} imageRight className="row col-12">
                                <LocationContentDivider locationImg={tainan}>
                                    <LinkGroup data={hospitalJson['tainan']}></LinkGroup>
                                </LocationContentDivider>
                                <LocationContentDivider locationImg={kaohsiung}>
                                    <LinkGroup data={hospitalJson['kaohsiung']}></LinkGroup>
                                </LocationContentDivider>
                                <LocationContentDivider locationImg={others}>
                                    <LinkGroup data={hospitalJson['others']}></LinkGroup>
                                </LocationContentDivider>
                            </ContentImageDivider>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class Stress extends PageComponent {
    render() {
        return (
            <div>
                <Helmet><title>Psychological | Staff</title></Helmet>
                <Overlap img={backgroundStress} >
                    <h3>壓力管理與調適</h3>
                    <h4 className="float-right">Stress management</h4>
                </Overlap>
                <div className="text-white p-3">
                    <p><BigSpace />在現代生活中，「壓力」是無法避免的，不論是工作或是生活，每個人每天都處於大大小小的壓力之中。壓力對人的影響涉及身心層面的健康，而既然壓力不可能消失，如何「管理」自己面對的壓力、讓自己更健康的與壓力共存就是很重要的。</p>
                    <p><BigSpace />根據世界衛生組織(World Health Organization, WHO) 的調查發現，工作相關的壓力是全球排名第二的健康問題，壓力與心血管疾病、肥胖、免疫系統疾病……等等健康議題。要預防上述健康問題的發生，並降低壓力對生活及健康造成的影響，以預防的心態學習如何管理自己的壓力更是現代人不可或缺的工具。</p>
                    <p><BigSpace />在身心醫學界被發現並證實有效的壓力管理技巧有很多，除了每一位健康的工作者自己就可以採納一些技巧並應用於自己身上之外，企業組織更是能大規模的推動員工壓力管理計畫，系統性的協助員工預防因工作壓力而產生的身心健康問題。</p>
                    <p><BigSpace />下列幾個壓力管理及調適的方法則是自己一個人就可以執行並看到效果的壓力管理方法：</p>

                    <hr className="hr-dotted" />
                    {/* <BorderedTitle className="h4 mt-4 mb-3" radius="10px">主動肌肉放鬆 Progressive muscle relaxation(PMR)</BorderedTitle> */}
                    <BorderedTitle className="h4 mt-4 mb-3" radius="10px">主動肌肉放鬆</BorderedTitle>
                    <p><BigSpace />當人們正在經歷焦慮及壓力時，心理上的緊張感往往使得身體也出現緊張反應，像是在壓力情境中常常會感覺到自己的肌肉緊繃，而反過來說，肌肉上的緊繃也常常伴隨著心理上的焦慮感更加上升。因此，主動肌肉放鬆法就是期待能透過肌肉的放鬆使得心理上的緊張感也跟著降低，主要包含下列步驟：</p>
                    <p><BigSpace />1. 將心思意念集中在自己的某肌肉部位，使該部位肌肉越來越緊繃直到無法更緊繃，並維持10秒鐘。</p>
                    <p><BigSpace />2.肌肉緊繃10秒鐘後，緩緩的使該部位肌肉盡可能的放鬆，過程持續20秒。</p>
                    <p><BigSpace />3. 執行上述動作時，必須專注的感受肌肉的緊張及放鬆。</p>
                    <p><BigSpace />4. 放鬆完一部位的肌肉後，可將心思意念轉到身體其他部位肌肉並執行同樣放鬆步驟，可以挑選的部位有腿部、腹部、胸部、手臂及臉，上述部位可以輪流放鬆過後再從一開始的部位進行2-3輪。</p>
                    <p><BigSpace />5. 要達到完整的放鬆效果，建議須至少花20-30分鐘放鬆全身肌肉2-3輪。</p>
                    <YoutubePlayer vid="6trIlkEjoaE" />

                    <hr className="hr-dotted" />
                    <BorderedTitle className="h4 mt-4 mb-3" radius="10px">腹式呼吸 Diaphramic Breathing</BorderedTitle>
                    <p><BigSpace />腹式呼吸指的是透過在呼吸時將空氣吸入腹部的方式使呼吸變得更深及更長，雖然聽起來是很老掉牙的放鬆方式，但確實在學術研究中有其壓力調節功效。腹式呼吸之所以能夠使人感到放鬆乃是因為在主動的腹式呼吸當中，身體的腹部肌肉會主動地被伸展，而伸展所帶來的刺激會調節人的自主神經（Automatic Nervous System, ANS），進而使身體各處細胞及組織的神經元回到原先的狀態。</p>
                    <YoutubePlayer vid="Xrq5YTuJUdU" />

                    <hr className="hr-dotted" />
                    <BorderedTitle className="h4 mt-4 mb-3" radius="10px">放鬆反應 Relaxation Response, RR</BorderedTitle>
                    <p><BigSpace />放鬆反應的發現是在1960年代的美國哈佛大學(Harvard University)研究中，學術研究發現人類的壓力反應(Stress response)是因著大腦的下視丘被刺激而導致，而同樣的，透過刺激大腦的腦區也能造成壓力的釋放，因此放鬆反應的內涵就是試圖透過一些外在的刺激媒介使得大腦中壓力釋放反應被激發，進而達到放鬆的效果。</p>
                    <p><BigSpace />透過聆聽重複性的聲音或是執行重複性的動作使個體專心，將注意力焦點放在該聲音或是動作上，可透過聽重複的簡單的音樂、重複說一樣的詞語或文字、重複執行同一個簡單的動作達到。常見的瑜伽、誦經等方式就是利用相似原以達到此放鬆反應，進而消除壓力。每天只要花10到20分鐘練習就可以使人達到放鬆，從緊繃的生理狀態中解除。</p>

                    <hr className="hr-dotted" />
                    <BorderedTitle className="h4 mt-4 mb-3" radius="10px">冥想 Transcendental Meditation</BorderedTitle>
                    <p><BigSpace />冥想技巧其實相當簡單，只需要每幾天花20分鐘的時間讓身體處於放鬆、休息的狀態就可以達成，通常可以搭配安靜、重複，但不會使人分心的音樂或聲音，讓自己達到清醒但是放鬆的狀態。冥想技巧及訣竅眾說紛紜，市面上也能在許多課程、書籍，或是網路資源可以找到。</p>
                    <p><BigSpace />冥想對壓力調適的好處在於，冥想可以讓人體各個系統恢復到正常的狀態以執行功能，特別是能幫助身體調節因應外在環境的壓力源或是挑戰。在學術研究中，冥想也已被證實可以減少人感覺到的壓力，並能幫助人體從壓力中復原。</p>

                    <hr className="hr-dotted" />
                    <BorderedTitle className="h4 mt-4 mb-3" radius="10px">專業協助</BorderedTitle>
                    <p><BigSpace />除了透過個人小技巧幫助自己進行日常壓力管理之外，當您長期處於較大壓力下，或是需要更專業、直接的介入方式協助自己進行壓力管理時，也可以主動尋求：</p>
                    <div className="ml-3">
                        <BorderedTitle textColor="bluegreen" bg="white" className="h6 mt-4 mb-3" radius="10px">減壓講座</BorderedTitle>
                        <p>減壓講座通常是由專業心理師帶領一群擁有相似壓力困擾的人進行壓力因應技巧介紹與壓力調適活動。若您在職場上感受到較大壓力，可以透過參與此種減壓講座、座談、工作坊等課程之方式進行壓力管理。相關資源在各縣市諮商心理師公會、各縣市心理健康資源網站皆可以找到。</p>
                        <BigSpace />
                        <b>></b> <a className="text-white" href="http://www.twtcpa.org.tw/events.php?page=1&gid=4">台北市諮商心理師公會</a>
                        <BigSpace />
                        <b>></b> <a className="text-white" href="http://twtacp.org.tw/News.php?CataP=2&N_Key=14">台中市諮商心理師公會</a>

                        <BorderedTitle textColor="bluegreen" bg="white" className="h6 mt-4 mb-3" radius="10px">認知行為治療 (Cognitive Behavioral Therapy, CBT)</BorderedTitle>
                        <p>認知行為治療是現今心理治療中廣泛被運用，並被證實有效的治療方法，透過專業的心理師的帶領及認知行為訓練，人們通常可以更好的因應壓力引起的身體症狀(如：頭痛、身體痛等)，並且可以更好的調適自己的壓力。本治療需洽專業臨床或諮商心理治療資源，可洽詢職場諮商專門之心理諮商所或一般醫療院所身心科。</p>

                        <BorderedTitle textColor="bluegreen" bg="white" className="h6 mt-4 mb-3" radius="10px">自律訓練 (Autogenic training, AT)</BorderedTitle>
                        <p>當人們因壓力影響而引起長期身體不適(例如：頭痛、偏頭痛、身體痛)等症狀時，透過一些運動或是身體技巧的執行是可以讓人慢慢從不適的症狀解除的。自律訓練就是在專業的指導下，跟隨著專業老師、書籍，或是影片的指導，執行6個標準的運動，漸漸的會使得身體感到穩定及放鬆。</p>
                        <p>自律訓練需要遵守專業的指導，並需要較長時間較易看到效果(根據學術文獻發現，約需4-6月時間較能改善長期身體疾患)，因此較建議尋求專業醫療資源或書籍的協助。</p>
                    </div>

                </div>
            </div>
        );
    }
}

export default Staff;
