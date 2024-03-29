import React from 'react';
import { Link } from 'react-router-dom';

import PageComponent from "../Components/PageComponent";
import lotterImg from '../Images/lottery.png';
import vidLottery9 from '../Videos/lottery-9.mp4';
import vidLottery10 from '../Videos/lottery-10.mp4';
import LotteryVideo from '../Components/LotteryVideo';

class LotteryPage extends PageComponent {
    static defaultProps = {
        'linkText': "",
        'linkUrl': ""
    };

    render() {
        return (
            <>
                <div className="container text-white pt-4">
                    <p>即日起至11/15止，只要員工填寫本網站<Link to="/staff/questionnaire" className="text-warning">員工自我檢測</Link>或是企業代表（如：人資）填寫<Link to="/enterprise/checklist" className="text-warning">方案檢核表</Link>，即有資格參加抽獎！</p>
                    <p>抽獎資格：完整填答一次問卷即有一次參加抽獎資格（一人僅能填答一次），擔任介紹人介紹親友前來填寫問卷可增加一次抽獎資格！</p>
                    <p>抽獎時間：每月進行一次抽獎，8/31、9/30、10/31皆會抽獎，當月未抽到者抽獎資格可保留至下月，抽完為止。</p>

                    <p>獎品：每月抽獎獎品及數量如下</p>

                    <div className="col-12 col-lg-8 px-0">
                        <img src={lotterImg} width="100%" alt="獎品介紹" />
                    </div>

                    <p>抽獎結果將於指定日期公佈於本網頁，得獎者主辦單位將主動寄信通知。<br />主辦單位保留抽獎辦法更動之權利。</p>

                    <LotteryVideo text="8月份抽獎結果" src={vidLottery9} />
                    <LotteryVideo text="9月份抽獎結果" src={vidLottery10} />

                    <br />
                    <br />
                    <p>想知道更多有關職場心理健康的資訊，請點選企業版或員工版了解更多！</p>
                    <br />
                </div>
            </>
        )
    }

}



export default LotteryPage;
