import React, { PureComponent } from 'react';
import icon from '../Images/logo/logo@2x.png';

const footerStyle = {
    // position: 'absolute',
    bottom: 0,
    width: "100%"
}

class Footer extends PureComponent {

    render() {
        return (
            <div id="footer">
                <div className="bg-bluegreen text-white py-3" style={footerStyle}>
                    <div className="container-fluid px-5">
                        <div className="row">
                            <div className="col-md-6" style={{ borderRight: "5px dotted white" }}>
                                <span>執行單位/聯絡人：國立政治大學心理學系工商心理學研究室</span>
                                <br />
                                {/* <span>計畫主持人：郭建志 副教授</span>
                                <br /> */}
                                <span>若您對本研究仍有疑慮，或想進一步洽詢研究單位，</span>
                                <br />
                                <span>可透過下列方式與我們聯繫：</span>
                                <br />
                                {/* <span>聯絡人：郭建志</span>
                                <br /> */}
                                <span>電子郵件信箱：iopsylab2016@gmail.com</span>
                            </div>
                            <div className="col-md-6 my-auto" >
                                <div className="h1">
                                    <img alt="EAPick Logo" src={icon} width="50px"></img>
                                    <span>EAPick</span>
                                </div>
                                <span>Photo by rawpixel.com from Pexels</span>
                                <br />
                                <span>Icons made by Freepik from www.flaticon.com</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}


export default Footer;
