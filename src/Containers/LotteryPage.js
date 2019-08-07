import React from 'react';
import { Link } from 'react-router-dom';

import PageComponent from "../Components/PageComponent";
import lotterImg from '../Images/lottery.png';

class LotteryPage extends PageComponent {
    static defaultProps = {
        'linkText': "",
        'linkUrl': ""
    };

    render() {
        let { linkText, linkUrl } = this.props;

        return (
            <>
                <div className="bg-warning py-4 px-4 text-white mb-3">
                    <h1><b>抽獎資訊</b></h1>
                </div>
                <div className="container text-white">
                    <p>活動辦法：即日起至10/10止填寫本網站<Link to={linkUrl} className="text-warning">{linkText}</Link>即有資格參加抽獎！</p>
                    <p>抽獎資格：完整填答一次問卷即有一次參加抽獎資格，擔任完整填答一次問卷即有一次抽獎資格，擔任介紹人介紹親友前來填寫問卷可增加一次抽獎資格！<br />（問卷重複填答僅計算一次資格）</p>
                    <p>抽獎時間：每月進行一次抽獎，8/31、9/30、10/31皆會抽獎，當月未抽到者抽獎資格可保留至下月，抽完為止。</p>
                    <p>獎品：每月抽獎獎品及數量如下</p>

                    <div className="col-12 col-lg-8 px-0">
                        <img src={lotterImg} width="100%" alt="獎品介紹" />
                    </div>

                    <p>抽獎結果將於指定日期公佈於本網頁，得獎者主辦單位將主動寄信通知。<br />主辦單位保留抽獎辦法更動之權利。</p>
                </div>
            </>
        )
    }

}


export default LotteryPage;
