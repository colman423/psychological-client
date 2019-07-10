import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

import BigSpace from "../Components/BigSpace";
import BorderedTitle from "../Components/BorderedTitle";
import IconText from "../Components/IconText";

import staffHelpServiceSystem from '../Images/staff-help-service-system.jpeg';
import helpSystem from '../Images/help-system.jpeg';
import r1 from '../Images/resource/flex.png';
import r2 from '../Images/resource/economic.png';
import r3 from '../Images/resource/heart.png';
import r4 from '../Images/resource/profession.png';
import r5 from '../Images/resource/info.png';
import r6 from '../Images/resource/relationship.png';

function Health() {
    return (
        <div>
            <div className="text-white p-3 px-md-4">
                <p><BigSpace></BigSpace>職場健康心理學（Occupational health psychology）將重點放在研究組織內員工的身心健康狀態，特別注意工作中存在的壓力、疾病及傷害等組織風險因素的一級預防。根據美國國家職業安全及健康機構（The National Institute for Occupational Safety and Health, NIOSH）的定義，職場健康心理學提倡的是改善員工的生活品質，並保護及提升員工之安全、健康及福祉。企業組織應在工作環境中透過措施降低員工暴露於工作危害中的機會，並提供員工相關知識及資源，以改善員工狀態。簡單的說，職場健康心理學除了重視員工的身體健康（physical health），也同樣重視心理層面（mental）的健康狀態。職場健康心理學所關注的議題廣泛，舉凡工作壓力、工作過勞，甚至是酒癮、職家衝突與平衡等，皆為職場健康心理學的研究範疇。</p>
                <p><BigSpace></BigSpace>職場健康心理學主要關注三個面向，內容如下所示：</p>
                <p><span><BigSpace len="6"></BigSpace>(1)工作環境(the work environment)</span>
                    <br></br>
                    <span><BigSpace len="8"></BigSpace>針對整個組織所推動健康實務，例如改善組織中的文化、氣候、關係、個人角色等等，依據以上內容減少組織中的壓力源，使組織營造出重視健康的工作環境。</span>
                </p>
                <p><span><BigSpace len="6"></BigSpace>(2)個人健康(the individual)</span>
                    <br></br>
                    <span><BigSpace len="8"></BigSpace>相對工作環境來說，此部分相對較關注於員工個人，例如員工的性別、年齡、健康狀況、情緒等面向，依據這些部分加以考慮健康實務措施，以採取適合措施以減少員工壓力的產生。</span>
                </p>
                <p><span><BigSpace len="6"></BigSpace>(3)工作─家庭方面(the work-family interface)</span>
                    <br></br>
                    <span><BigSpace len="8"></BigSpace>著重於員工的工作是否會對家庭產生負面影響，而隨著越來越多女性進入職場這項議題的重要性也逐漸增加，因此例如彈性工時、加班狀況、家庭照護等議題皆是此部分職場健康心理學所關注的項目。</span>
                </p>

                <BorderedTitle className="text-white h4 mt-4 mb-3" radius="10px">員工協助方案</BorderedTitle>
                <p><BigSpace></BigSpace>面對職場中心理健康的危機，企業組織最常使用的因應方式為員工協助方案（Employee Assistance Programs, EAPs）。EAPs是企業透過系統化的專業服務，規劃方案與提供資源，以預防及解決可能導致員工工作生產力下降的組織與個人議題，使員工能以健康的身心投入工作，讓企業提升競爭力，塑造勞資雙贏。而國際員工協助專業協會（International Employee Assistance Professions Association）認為EAP為一工作場所計畫，旨在協助：</p>
                <p>1. 工作組織解決生產力相關問題。</p>
                <p>2. 透過「員工顧問（employee-clients）」協助員工找出及解決可能會影響個人工作表現的相關議題（如：健康、婚姻、家庭、財務、酒精、毒品、法務、情緒、壓力及其他個人議題）。</p>
                <p><BigSpace></BigSpace>根據勞動部「員工協助方案推動手冊」的說明，EAPs的服務方式多為建立制度化的服務系統，並將員工所遭遇的問題分成「工作」、「生活」與「健康」三大面向。</p>

                <div className="text-center">
                    <Image src={staffHelpServiceSystem} fluid></Image>
                </div>
                <p className="mt-3"><BigSpace></BigSpace>在規劃與執行方面，EAPs的服務輸送系統分成「問題發現系統」、「問題評估系統」及「問題解決系統」等三部分，企業可依據這三部分在企業中明確分工。</p>
                <p><span><BigSpace len="6"></BigSpace>&middot; 問題發現系統：</span>
                    <br></br>
                    <span><BigSpace len="8"></BigSpace>通常先由員工自行求助或主管發現並通報以提出問題，親友、同事、或相關協助人員也能協助找出誰需要幫助。
                    </span>
                </p>
                <p><span><BigSpace len="6"></BigSpace>&middot; 問題評估系統：</span>
                    <br></br>
                    <span><BigSpace len="8"></BigSpace>由相關部門評估員工的需求及狀態，了解EAPs能為員工提供什麼協助。</span>
                </p>
                <p><span><BigSpace len="6"></BigSpace>&middot; 問題解決系統：</span>
                    <br></br>
                    <span><BigSpace len="8"></BigSpace>由專業人員針對其問題做處置，幫助員工回復工作表現與能力。</span>
                </p>
                <div className="text-center">
                    <Image src={helpSystem} fluid></Image>
                </div>

                <BorderedTitle className="text-white h4 mt-4 mb-3" radius="10px">六大職場心理資源</BorderedTitle>
                <p><BigSpace></BigSpace>本研究團隊根據心理健康職場獎項及過去相關研究整合出六種職場心理健康資源，並以這些資源為基礎，建立整合型的職場心理健康評估指標，藉以檢驗EAPs對職場心理健康的影響，所包含資源為：彈性資源、經濟資源、身心資源、專業資源、資訊資源及關係資源。</p>
                <p><BigSpace></BigSpace>本網站提供企業可線上填寫之EAP檢核表，此檢核表整合了台灣目前多項EAP，可透過此檢核表檢視自身企業有哪些可再增加或是改善的方案。</p>

                <div className="row mx-auto" style={{ width: "80%" }}>
                    <Link to="/client/enterprise/health/gogo" className="col-6 col-md-4 col-lg-2 px-5 mb-4 text-white"><IconText img={r1}>彈性</IconText></Link>
                    <Link to="/client/enterprise/health/gogo" className="col-6 col-md-4 col-lg-2 px-5 mb-4 text-white"><IconText img={r2}>經濟</IconText></Link>
                    <Link to="/client/enterprise/health/gogo" className="col-6 col-md-4 col-lg-2 px-5 mb-4 text-white"><IconText img={r3}>身心</IconText></Link>
                    <Link to="/client/enterprise/health/gogo" className="col-6 col-md-4 col-lg-2 px-5 mb-4 text-white"><IconText img={r4}>專業</IconText></Link>
                    <Link to="/client/enterprise/health/gogo" className="col-6 col-md-4 col-lg-2 px-5 mb-4 text-white"><IconText img={r5}>資訊</IconText></Link>
                    <Link to="/client/enterprise/health/gogo" className="col-6 col-md-4 col-lg-2 px-5 mb-4 text-white"><IconText img={r6}>關係</IconText></Link>
                </div>

                <div>
                    <h5><b>參考資料</b></h5>
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
                </div>


            </div>
        </div>
    );
}
export default Health;
