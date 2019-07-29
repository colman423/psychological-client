import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { Switch, Case, Default } from 'react-if';
import queryString from 'query-string';
import { Image } from 'react-bootstrap';

import PageComponent from "../Components/PageComponent";
import Overlap from "../Components/Overlap";
import BigSpace from "../Components/BigSpace";
import BorderedTitle from "../Components/BorderedTitle";
import backgroundHealth from '../Images/background/health.png';
import IconText from "../Components/IconText";

import backgroundResource from '../Images/background/resource.png';
import staffHelpServiceSystem from '../Images/staff-help-service-system.jpeg';
import helpSystem from '../Images/help-system.jpeg';
import r1 from '../Images/resource/flex.png';
import r2 from '../Images/resource/economic.png';
import r3 from '../Images/resource/heart.png';
import r4 from '../Images/resource/profession.png';
import r5 from '../Images/resource/info.png';
import r6 from '../Images/resource/relationship.png';


class CommonHealth extends PageComponent {
    static defaultProps = {
        'staff': false,
        'path': ""
    };

    render() {
        const parsed = queryString.parse(window.location.search);
        const resource = parsed.resource || "";
        const { path, staff } = this.props;
        console.log("resource", resource, "path", path, "staff", staff);

        return (
            <Switch>
                <Case condition={resource === 'flex'}>
                    <Flex />
                    <ResourceBar path={path} />
                </Case>
                <Case condition={resource === 'economic'}>
                    <Economic />
                    <ResourceBar path={path} />
                </Case>
                <Case condition={resource === 'heart'}>
                    <Heart />
                    <ResourceBar path={path} />
                </Case>
                <Case condition={resource === 'profession'}>
                    <Profession />
                    <ResourceBar path={path} />
                </Case>
                <Case condition={resource === 'info'}>
                    <Info />
                    <ResourceBar path={path} />
                </Case>
                <Case condition={resource === 'relationship'}>
                    <Relationship />
                    <ResourceBar path={path} />
                </Case>
                <Default>
                    <Health staff={this.props.staff}></Health>
                    <ResourceBar path={path} />
                    <Reference />
                </Default>
            </Switch>
        )
    }

}


class ResourceBar extends Component {
    render() {
        let { path } = this.props;
        console.log("resourceBar path", path)
        return (
            <div className="row mx-auto" style={{ width: "80%" }}>
                <Link to={`${path}?resource=flex`} className="col-6 col-md-4 col-lg-2 px-5 mb-4 text-white"><IconText img={r1}>彈性</IconText></Link>
                <Link to={`${path}?resource=economic`} className="col-6 col-md-4 col-lg-2 px-5 mb-4 text-white"><IconText img={r2}>經濟</IconText></Link>
                <Link to={`${path}?resource=heart`} className="col-6 col-md-4 col-lg-2 px-5 mb-4 text-white"><IconText img={r3}>身心</IconText></Link>
                <Link to={`${path}?resource=profession`} className="col-6 col-md-4 col-lg-2 px-5 mb-4 text-white"><IconText img={r4}>專業</IconText></Link>
                <Link to={`${path}?resource=info`} className="col-6 col-md-4 col-lg-2 px-5 mb-4 text-white"><IconText img={r5}>資訊</IconText></Link>
                <Link to={`${path}?resource=relationship`} className="col-6 col-md-4 col-lg-2 px-5 mb-4 text-white"><IconText img={r6}>關係</IconText></Link>
            </div>
        )
    }
}

function Health(props) {
    let { staff } = props;
    return (
        <div>
            <Overlap img={backgroundHealth} >
                <h3>職場健康心理學</h3>
                <h4 className="float-right">What is Occupational Health Psychology?</h4>
            </Overlap>
            <div className="text-white p-3 px-md-4">
                <p><BigSpace></BigSpace>職場健康心理學（Occupational health psychology）將重點放在研究組織內員工的身心健康狀態，特別注意工作中存在的壓力、疾病及傷害等組織風險因素的一級預防。根據美國國家職業安全及健康機構（The National Institute for Occupational Safety and Health, NIOSH）的定義，職場健康心理學提倡的是改善員工的生活品質，並保護及提升員工之安全、健康及福祉。企業組織應在工作環境中透過措施降低員工暴露於工作危害中的機會，並提供員工相關知識及資源，以改善員工狀態。簡單的說，職場健康心理學除了重視員工的身體健康（physical health），也同樣重視心理層面（mental）的健康狀態。職場健康心理學所關注的議題廣泛，舉凡工作壓力、工作過勞，甚至是酒癮、職家衝突與平衡等，皆為職場健康心理學的研究範疇。</p>
                <p><BigSpace></BigSpace>職場健康心理學主要關注三個面向，內容如下所示：</p>
                <p>
                    <span><BigSpace len="6"></BigSpace>(1)工作環境(the work environment)</span>
                    <br></br>
                    <span><BigSpace len="8"></BigSpace>針對整個組織所推動健康實務，例如改善組織中的文化、氣候、關係、個人角色等等，依據以上內容減少組織中的壓力源，使組織營造出重視健康的工作環境。</span>
                </p>
                <p>
                    <span><BigSpace len="6"></BigSpace>(2)個人健康(the individual)</span>
                    <br></br>
                    <span><BigSpace len="8"></BigSpace>相對工作環境來說，此部分相對較關注於員工個人，例如員工的性別、年齡、健康狀況、情緒等面向，依據這些部分加以考慮健康實務措施，以採取適合措施以減少員工壓力的產生。</span>
                </p>
                <p>
                    <span><BigSpace len="6"></BigSpace>(3)工作─家庭方面(the work-family interface)</span>
                    <br></br>
                    <span><BigSpace len="8"></BigSpace>著重於員工的工作是否會對家庭產生負面影響，而隨著越來越多女性進入職場這項議題的重要性也逐漸增加，因此例如彈性工時、加班狀況、家庭照護等議題皆是此部分職場健康心理學所關注的項目。</span>
                </p>

                <BorderedTitle className="h4 mt-4 mb-3" radius="10px">員工協助方案</BorderedTitle>
                <p><BigSpace></BigSpace>面對職場中心理健康的危機，企業組織最常使用的因應方式為員工協助方案（Employee Assistance Programs, EAPs）。EAPs是企業透過系統化的專業服務，規劃方案與提供資源，以預防及解決可能導致員工工作生產力下降的組織與個人議題，使員工能以健康的身心投入工作，讓企業提升競爭力，塑造勞資雙贏。而國際員工協助專業協會（International Employee Assistance Professions Association）認為EAP為一工作場所計畫，旨在協助：</p>
                <p>1. 工作組織解決生產力相關問題。</p>
                <p>2. 透過「員工顧問（employee-clients）」協助員工找出及解決可能會影響個人工作表現的相關議題（如：健康、婚姻、家庭、財務、酒精、毒品、法務、情緒、壓力及其他個人議題）。</p>
                <p><BigSpace></BigSpace>根據勞動部「員工協助方案推動手冊」的說明，EAPs的服務方式多為建立制度化的服務系統，並將員工所遭遇的問題分成「工作」、「生活」與「健康」三大面向。</p>

                <div className="text-center">
                    <Image src={staffHelpServiceSystem} fluid></Image>
                </div>
                <p className="mt-3"><BigSpace></BigSpace>在規劃與執行方面，EAPs的服務輸送系統分成「問題發現系統」、「問題評估系統」及「問題解決系統」等三部分，企業可依據這三部分在企業中明確分工。</p>
                <p>
                    <span><BigSpace len="6"></BigSpace>&middot; 問題發現系統：</span>
                    <br></br>
                    <span><BigSpace len="8"></BigSpace>通常先由員工自行求助或主管發現並通報以提出問題，親友、同事、或相關協助人員也能協助找出誰需要幫助。
                    </span>
                </p>
                <p>
                    <span><BigSpace len="6"></BigSpace>&middot; 問題評估系統：</span>
                    <br></br>
                    <span><BigSpace len="8"></BigSpace>由相關部門評估員工的需求及狀態，了解EAPs能為員工提供什麼協助。</span>
                </p>
                <p>
                    <span><BigSpace len="6"></BigSpace>&middot; 問題解決系統：</span>
                    <br></br>
                    <span><BigSpace len="8"></BigSpace>由專業人員針對其問題做處置，幫助員工回復工作表現與能力。</span>
                </p>
                <div className="text-center">
                    <Image src={helpSystem} fluid></Image>
                </div>

                <BorderedTitle className="h4 mt-4 mb-3" radius="10px">六大職場心理資源</BorderedTitle>
                <p><BigSpace></BigSpace>本研究團隊根據心理健康職場獎項及過去相關研究整合出六種職場心理健康資源，並以這些資源為基礎，建立整合型的職場心理健康評估指標，藉以檢驗EAPs對職場心理健康的影響，所包含資源為：彈性資源、經濟資源、身心資源、專業資源、資訊資源及關係資源。</p>

                <p><BigSpace></BigSpace>
                    {staff ? "本網站提供員工線上填寫問卷，可藉由本問卷深入了解自身擁有各項資源及身心健康之狀況，另外可獲得台灣產業常模，亦即員工可了解自身狀態在台灣同產業之職業工作者中的相對分數。" : "本網站提供企業可線上填寫之EAP檢核表，此檢核表整合了台灣目前多項EAP，可透過此檢核表檢視自身企業有哪些可再增加或是改善的方案。"}
                </p>
            </div>
        </div>
    );
}

function Reference() {
    return (
        <div className="text-white p-3 px-md-4">
            <h5><b>參考資料</b></h5>
            <small>
                <p>Bakker, A. B., & Demerouti, E. (2007). The job demands-resources model: State of the art. Journal of managerial psychology, 22(3), 309-328.</p>
                <p>Hobfoll, S. E. (1989). Conservation of resources: A new attempt at conceptualizing stress. The American Psychologist, 44 (3): 513-524.</p>
                <p>Almer, E. D., & Kaplan, S. E. (2002). The effects of flexible work arrangements on stressors, burnout, and behavioral job outcomes in public accounting. Behavioral Research in Accounting, 14(1), 1-34.</p>
                <p>Chiang, F. F., Birtch, T. A., & Kwan, H. K. (2010). The moderating roles of job control and work-life balance practices on employee stress in the hotel and catering industry. International Journal of Hospitality Management, 29(1), 25-32.</p>
                <p>Green, C. P., & Leeves, G. D. (2013). Job Security, Financial Security and Worker Well‐ being: New Evidence on the Effects of Flexible Employment. Scottish Journal of Political Economy, 60(2), 121-138.</p>
                <p>Herriot, P., Manning, W. E. G., & Kidd, J. M. (1997). The content of the psychological contract. British Journal of management, 8(2), 151-162.</p>
                <p>Cordes, C. L., & Dougherty, T. W. (1993). A review and an integration of research on job burnout. Academy of management review, 18(4), 621-656.</p>
                <p>Coulter, P. A., Dickman, K., & Maradiegue, A. (2009). The effects of exercise on stress in working women. The Journal for Nurse Practitioners, 5(6), 408-413.</p>
                <p>McGuire, D., & McLaren, L. (2009). The impact of physical environment on employee commitment in call centres: The mediating role of employee well-being. Team Performance Management: An International Journal, 15(1/2), 35-48.</p>
                <p>Haraway, D. L., & Haraway, W. M. (2005). Analysis of the effect of conflict-management and resolution training on employee stress at a healthcare organization. Hospital Topics, 83(4), 11-17.</p>
                <p>Kirschner, T., Hoffman, M. A., & Hill, C. E. (1994). Case study of the process and outcome of career counseling. Journal of Counseling Psychology, 41(2), 216-226.</p>
                <p>Kleinman, G., Siegel, P. H., & Eckstein, C. (2001). Mentoring and learning: The case of CPA firms. Leadership & Organization Development Journal, 22(1), 22-34.</p>
                <p>Lasalvia, A., Bonetto, C., Bertani, M., Bissoli, S. S., Cristofalo, D., Marrella, G., Ceccato, E., Cremonese, C., Rossi, M. D., Lazzarotto, L., Marangon, V., Morandin, I., Zucchetto, M., Tansella, M., Ruggeri, M. (2009). Influence of perceived organisational factors on job burnout: survey of community mental health staff. The British Journal of Psychiatry, 195(6), 537-544. </p>
                <p>Bakker, A. B., Lieke, L., Prins, J. T., & Van der Heijden, F. M. (2011). Applying the job demands–resources model to the work–home interface: A study among medical residents and their partners. Journal of Vocational Behavior, 79(1), 170-180.</p>
                <p>Morrison, E. W. (2011). Employee voice behavior: Integration and directions for future research. Academy of Management annals, 5(1), 373-412.</p>
                <p>Campbell, N. S., Perry, S. J., Maertz Jr, C. P., Allen, D. G., & Griffeth, R. W. (2013). All you need is... resources: The effects of justice and support on burnout and turnover. Human Relations, 66(6), 759-782.</p>
                <p>Hobfoll, S. E., & Shirom, A. (2001). Conservation of resources theory: Applications to stress and management in the workplace. In R. T. Golembiewski (Ed.), Handbook of organizational behavior, 87: 57-80. New York, NY: Marcel Dekker.</p>
                <p>Oginska-Bulik, N. (2005). The role of personal and social resources in preventing adverse health outcomes in employees of uniformed professions. International journal of occupational medicine and environmental health, 18(3), 233-240.</p>
                <p>Hämmig, O. (2017). Health and well-being at work: The key role of supervisor support. SSM-population health, 3, 393-402.</p>
                <p><a href="https://www.cdc.gov/niosh/topics/ohp/#what" className="text-white "><u>NIOSH網站：https://www.cdc.gov/niosh/topics/ohp/#what</u></a></p>
            </small>
        </div>
    )
}

class Flex extends PageComponent {
    render() {
        return (
            <div>
                <Overlap img={backgroundResource} >
                    <h5>六大職場心理健康資源</h5>
                    <h1>彈性資源</h1>
                </Overlap>
                <div className="text-white p-3">
                    <p><BigSpace />彈性資源泛指員工擁有足夠的工作時間以及相當程度的工作自主權，透過如實施彈性工時、遠距工作、家庭日等措施以完成工作任務以及平衡非工作領域的生活需求。根據Almer與Kaplan在2002年針對美國五家大型會計公司的研究，透過多變量變異數分析(Multivariate analysis of variance, MANOVA)比較執行彈性工作安排（flexible work arrangement）及未執行彈性工作安排的員工，研究結果發現，能夠彈性安排工作時間、工作方式的員工有較高得工作滿意度（job satisfaction），以及較低的離職意圖（turnover intentions）、角色壓力（role stress）與過勞傾向（fatigue），而當員工離開控制組，進入有執行彈性工作安排的組別工作時，其工作滿意度顯著提升、離職意圖顯著下降，角色壓力及過勞傾向也有些微下降。</p>
                    <p><BigSpace />根據Chiang、Birtch、以及Kwan在2010年針對香港1家四星級飯店食品供應商及2家大型連鎖餐廳的研究，透過階層性迴歸（hierarchical regression）分析來探討工作需求（job demand）、工作控制（job control）及職家平衡實務（work-life balance）對於員工工作壓力的影響，研究結果發現，職家平衡實務（例如：彈性工時、家庭日）能夠減緩工作需求對於工作壓力的影響，組織提供員工較多的職家平衡實務能夠減緩工作需求對於員工的壓力。</p>
                    <p><BigSpace />總結而言，彈性資源包含以下面向：工作時間、工作方式、工作標準、非工作時間。</p>
                    <p><BigSpace />· 工作時間：提供彈性的時間安排方式，如彈性工時等。</p>
                    <p><BigSpace />· 工作方式：提供彈性的工作方式，如遠距工作、工作共享等。</p>
                    <p><BigSpace />· 工作標準：提供員工能夠根據自身能力及需求主動調整工作內容及目標設定的機會。</p>
                </div>
            </div>
        );
    }
}

class Economic extends PageComponent {
    render() {
        return (
            <div>
                <Helmet><title>Psychological | Enterprise</title></Helmet>
                <Overlap img={backgroundResource} >
                    <h5>六大職場心理健康資源</h5>
                    <h1>經濟資源</h1>
                </Overlap>
                <div className="text-white p-3">
                    <p><BigSpace />經濟資源泛指員工擁有充足經濟條件，可以維持正常生活水平以及應對生活突發事件，公司可以透過相關方案、措施或制度協助員工維持正常生活水平，幫助平衡員工因為生活所需而產生的壓力。在Hobfoll所提出的資源保存理論中所提到的能量資源，又可以區分成內在能量與外在能量兩類，其中的外在能量中就包含一個人的財力是否充足。因此按照資源保存理論所描述，若組織協助員工擁有足夠的財力，便可以避免工作壓力與過勞的發生。此外，Green與Leeves於2013年的研究也證明薪資、經濟安全感會影響員工幸福感，而員工幸福感則可以反映出員工的工作壓力狀況。</p>
                    <p><BigSpace />Herriot、Manning以及Kidd於1997年指出許多員工認為組織應該提供足以維持生活的薪資水準，然而組織卻傾向於以表揚、社會支持等無形方式激勵員工，因此勞資雙方之間存在心裡契約落差，進而導致員工壓力的產生。在工作需求—資源模型中也提到，公司所提供的薪資也是一種工作資源，因此薪資能夠緩衝高工作要求帶來的負面影響，避免員工產生過勞情形。Cordes和Dougherty於1993年指出當公司存在不會跟著績效表現提升的獎勵制度，以及不會隨著情境狀況改變的懲罰機制，這樣的工作條件以及個體經驗導致員工對於組織的期望無法滿足，可能進而導致員工過勞。</p>
                    <p><BigSpace />總結而言，經濟資源包含以下面向：薪資、保險、生活協助、工作補助。</p>
                    <p><BigSpace />· 薪資：除了每月給予員工的薪水，還包含年終獎金、紅利、績效獎金、股票等公司可以直接提供的金錢類項目；</p>
                    <p><BigSpace />· 保險：提供員工良好保險，減少重大事件的發生（如退休、疾病、意外）對員工產生的危害。例如優於法令的退休金、醫療保險以及眷屬保險；</p>
                    <p><BigSpace />· 生活協助：給予員工生活面向的經濟協助，透過協助減少員工在日常生活方面的開銷。例如提供員工宿舍、交通補助、生育津貼等措施；</p>
                    <p><BigSpace />· 工作補助：提供員工工作方面的物品或協助，幫助員工減少在工作方面的開銷。例如提供員工手機、電腦、軟體等良好工作設備，或者補助員工採購工作用設備。</p>
                </div>
            </div>
        );
    }
}

class Heart extends PageComponent {
    render() {
        return (
            <div>
                <Helmet><title>Psychological | Enterprise</title></Helmet>
                <Overlap img={backgroundResource} >
                    <h5>六大職場心理健康資源</h5>
                    <h1>身心資源</h1>
                </Overlap>
                <div className="text-white p-3">
                    <p><BigSpace />身心資源泛指員工擁有足以維繫或增進其生理以及心理達到正常水準的照護，公司可以透過如建設健身房、補助健康檢查，以及透過心理衛教講座、紓壓休閒設施等服務/方案，提升員工健康相關的知識與協助管道，確保員工擁有充足身心資源應對工作需求。Coulter等人針對一位34歲職業婦女展開個案研究，探討透過專科護理師（nurse practitioner）協助建立規律運動計畫的重要性，以及達成規律運動目標對職業婦女的正向影響。研究結果發現，職業婦女若能透過專科護理師協助進行規律運動，可有效減輕壓力、焦慮、憂鬱，並能正向增進職業傅綠的心理福祉。Hobfoll在2001年提出的資源保存理論列舉了74種員工能獲取的心理資源，其中包含提供飲食、擁有適當的休息時間、管理個人醫療相關措施等，這些資源都能幫助員工因應及預防壓力，減少過勞的風險。根據Mcguire與McLaren針對65名電話客服人員的研究，探討工作環境對於員工幸福感及組織承諾之影響研究結果發現員工的工作環境確實與其感受到的幸福感有正向關聯，當員工主觀認為自己的工作環境較好時，其主觀幸福感也較高。此外，研究結果更發現由良好的物理環境所提升的員工幸福感能進一步提升員工對組織的承諾感，工作區域之物理條件著實為影響員工在企業組織中之感受的重要因素。</p>
                    <p><BigSpace />總結而言，身心資源包含以下面向：飲食、醫療、運動、休息、心理衛生、工作環境。</p>
                    <p><BigSpace />· 飲食：提供健康飲食促進員工身心健康，如低油鹽之食品、保健食品；</p>
                    <p><BigSpace />· 醫療：提供完善的醫療制度與措施，如優於法令之體檢制度、定期健康檢查等，維持員工身心健康；</p>
                    <p><BigSpace />· 運動：提供健康設施與檢測設備，使員工再工作之餘也能滿足其運動需求，增進與維持身心健康；</p>
                    <p><BigSpace />· 休息：提供休息數紓壓的設施與制度，如按摩椅、午睡關燈時間等，協助員工減緩工作上的壓力；</p>
                    <p><BigSpace />· 心理衛生：提供員工身心健康相關之服務與活動，使員工維持與促進身心健康，如內部心理諮詢服務、減重競賽等；</p>
                    <p><BigSpace />· 工作環境：提供員工健康與安全的工作場所，減緩員工再工作上的身心負擔，預防工作所帶來的職業傷害，如符合人體工學的辦公桌椅、完善的安全訓練等。</p>
                </div>
            </div>
        );
    }
}

class Profession extends PageComponent {
    render() {
        return (
            <div>
                <Helmet><title>Psychological | Enterprise</title></Helmet>
                <Overlap img={backgroundResource} >
                    <h5>六大職場心理健康資源</h5>
                    <h1>專業資源</h1>
                </Overlap>
                <div className="text-white p-3">
                    <p><BigSpace />專業資源泛指員工得到工作所需之專業能力與技術的訓練，以及滿足員工於工作中自我提升的需求，透過提供工作內/外的訓練課程、師徒制、實務操演機會等，有效為員工提供專業資源，使其能應付職務所需，減緩其工作壓力、有效縮短工作時間。根據Haraway及Haraway針對美國36位醫院主管的研究，透過成對樣本t檢定（Paired samples t-test）探討衝突管理介入課程對於主管工作壓力的影響，研究結果發現參與衝突管理課程後主管的角色過荷（role overload）、人際壓力（interpersonal strain）、角色界線（role boundary）與心理壓力（psychological strain）皆有顯著下降，說明短時間的衝突管理課程確實能夠減少員工的工作壓力。</p>
                    <p><BigSpace />根據Kirschner等人進行的一項個案研究，探討職涯諮詢介入（career counseling）對於一位白人女性在職工作者的身心健康影響，研究結果發現透過七次諮詢並在後續的18個月追蹤，個案的壓力有顯著的下降，並且對於職涯擁有明確的目標，說明職涯諮詢能夠幫助員工降低職涯不確定的壓力及協助發展職涯目標。根據Kleinman等人針對美國12家CPA會計公司的研究，收集440位會計專家資料來探討探討導師制度（mentor）如何促進員工專業知識、技能及可能的工作影響，透過階層迴歸分析（hierarchical regression analysis），研究結果發現良好的導師制度能夠提升員工之工作滿意度（job satisfaction）、組織承諾（organizational commitment），此外也能降低員工離職意圖（intention to leave）、角色模糊（role ambiguity）、角色衝突（role conflict）及工作過勞（job burnout）。</p>
                    <p><BigSpace />總結而言，專業資源包含以下面向：訓練與自我提升、職涯輔導、實務參與。</p>
                    <p><BigSpace />· 訓練與自我提升：透過如新進人員訓練、衝突管理課程等提供能力與技術的內外訓練，以提升員工心理健康與工作表現。</p>
                    <p><BigSpace />· 職涯輔導：透過提供如職涯諮詢、新進人員手冊等，協助員工根據自身需求及目標發展職涯路徑。</p>
                    <p><BigSpace />· 實務參與：透過提供生涯規劃協助、導師制、工作輪調與考照課程等措施，協助員工培養工作所需之能力與技能。</p>
                </div>
            </div>
        );
    }
}

class Info extends PageComponent {
    render() {
        return (
            <div>
                <Helmet><title>Psychological | Enterprise</title></Helmet>
                <Overlap img={backgroundResource} >
                    <h5>六大職場心理健康資源</h5>
                    <h1>資訊資源</h1>
                </Overlap>
                <div className="text-white p-3">
                    <p><BigSpace />資訊資源泛指員工所身處的組織在制度、系統等結構上設計秉持公平、資訊透明公開等原則，例如組織推行公平、透明的績效評估制度，減少員工因為不公平而產生的壓力、降低個體的不確定感、提升其對外在環境與內在行為的控制感，使員工於一更穩定的組織環境中工作，這都可有效避免個體經驗過勞的風險。Bakker等人針對荷蘭醫療人員的研究引用工作要求—資源理論的模型，指出過量的工作負荷（work overload）為不恰當的工作要求，此時，若公司提供充分的決策參與，參與決策的過程有助於提升員工的工作資源，緩衝過量的工作負荷對員工的負向影響，改善工作壓力對家庭的影響。</p>
                    <p><BigSpace />根據Morrion針對員工檢驗行為（voice behavior）的回顧性研究，整合過去研究後發現員工向上表達意見能為組織帶來許多正向影響，例如：向上檢驗行為能促使組織進行更有效能的決策以及較佳的錯誤偵測率；而對於員工而言，當員工在組織中能夠提出建言時，會增加她對於工作的控制桿，進而提升其工作滿意和工作動機，並降低工作壓力。Campbell等人針對美國員工的研究發現，若組織能塑造分配公平、程序公平、以及互動公平的組織文化，內部主管在待人處世時便能秉持公正。由此以來，員工在遭受工作壓力時，會願意相信公司與主管能提供公平公正的「幫助」（support）。透過資源保存理論的架構，這份「安心」、「被幫助」的心理狀態會轉化為員工的內在資源，緩解工作壓力帶來的工作過勞，降低員工的離職意圖。</p>
                    <p><BigSpace />總結而言，資訊資源包含以下面向：決策參與、溝通參與、系統公平。</p>
                    <p><BigSpace />· 決策參與：員工是否能參與公司擬定策略目標的過程；</p>
                    <p><BigSpace />· 溝通回饋：員工是否能自在的向上表達自己的意見，而公司也能快速給予令人滿意的回覆；</p>
                    <p><BigSpace />· 系統公平：公司是否建立透明、公平的內部系統（績效考核、升遷制度等）。</p>
                </div>
            </div>
        );
    }
}

class Relationship extends PageComponent {
    render() {
        return (
            <div>
                <Helmet><title>Psychological | Enterprise</title></Helmet>
                <Overlap img={backgroundResource} >
                    <h5>六大職場心理健康資源</h5>
                    <h1>關係資源</h1>
                </Overlap>
                <div className="text-white p-3">
                    <p><BigSpace />關係資源泛指員工在工作以及非工作場域所獲得的歸屬與連結感，包含正向人際互動關係以及員工─組織連結，公司可透過團隊建立活動、家庭日以及組織表揚大會等方式增進關係資源，避免負向關係所導致的負向情緒以及情緒耗竭。Hobfoll在2001年提到資源保存理論中全面性的74種資源，其中就有提到像是與孩子有良好關係、同事的支持、友誼等等，而這些資源便能使人因應壓力，避免過勞的發生。Oginska-Builk在2005年針對330為職業男性進行研究，探討工作壓力及個人與社會資源（知覺凝聚力、自尊、自我效能、樂觀傾向、社會支持）對健康相關的影響，研究結果發現個人與社會資源對降低工作壓力及防範負向健康結果有顯著效果，</p>
                    <p><BigSpace />根據Hamming在2017年的研究，探討來自不同來源（家庭、親屬、配偶、朋友、鄰居、主管、同事、組織）和領域（工作、家庭、其他非工作領域）的社會支持是否會影響各種健康或工作相關結果。研究結果發現多種社會支持來源隊健康及幸福感是具有保護作用及有益的，其中主管的支持對健康及幸福感有最大的影響力，缺乏主管的社會支持會造成較差的健康結果。在工作需求—資源模型也指出他人的支持是一種工作資源，組織能夠藉由讓員工知覺他人的支持來緩衝高工作要求帶來的負面影響，避免員工產生過勞情形。</p>
                    <p><BigSpace />總結而言，關係資源包含以下面向：組織、主管、同儕、家庭。</p>
                    <p><BigSpace />· 組織：讓員工認為自己是組織的一份子，且覺得自己的價值觀與組織十分相近，並且認同組織。</p>
                    <p><BigSpace />· 主管：使員工與主管保持良好關係，並能夠在需要時得到主管的協助。</p>
                    <p><BigSpace />· 同儕：員工能夠與同事建立良好關係，當有工作上的問題時同事也樂意協助。</p>
                    <p><BigSpace />· 家庭：除了工作中的關係外，在生活領域也能與家人維持良好關係。</p>
                </div>
            </div>
        );
    }
}

export default CommonHealth;
