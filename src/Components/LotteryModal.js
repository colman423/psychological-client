import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const modalStyles = {
    overlay: {
        zIndex: 1000
    },
    content: {
        padding: 0,
        left: 0,
        right: 0,
        marginRight: 'auto',
        marginLeft: 'auto',
        width: '80%',
        // top: '50%',
        // left: '50%',
        // right: 'auto',
        bottom: '50px',
        backgroundColor: "#4f9da6"
        // bottom: 'auto'
        // marginRight: '-50%',
        // transform: 'translate(-50%, -50%)'
    }
};
const containerStyles = {
    backgroundColor: "#4f9da6"
}
const closeBtn = {
    color: 'white',
    position: 'absolute',
    top: "5px",
    right: "10px"
}

class LotteryModal extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    componentDidMount() {
        setTimeout(this.handleOpenModal, 500);
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <div>
                <Modal
                    closeTimeoutMS={200}
                    isOpen={this.state.showModal}
                    contentLabel="Lottery Modal"
                    shouldCloseOnEsc={true}
                    style={modalStyles}
                >
                    <div style={containerStyles}>
                        <div className="container-fluid py-3 text-white">
                            <p className="h5 text-center"><b>＊填問卷抽大獎＊</b></p>
                            <p>即日起至10/10止<br />填寫本網站「員工職場健康狀況」調查問卷即可抽獎獲得多樣好禮！</p>

                            <p>
                                <b>＊月月抽＊</b>
                                <br />
                                <span>填過一次問卷即可參加抽獎</span>
                                <br />
                                <span>每月抽出多樣大獎</span>
                                <br />
                                <span>-家樂福提貨券3000元</span>
                                <br />
                                <span>-統一星巴克隨行卡500元</span>
                                <br />
                                <span>-誠品生活禮券</span>
                                <br />
                                <span>…還有多樣大獎等著你喔！</span>
                            </p>

                            <p>
                                <b>＊填答時間僅約10分鐘＊</b>
                                <br />
                                <span>本網站為國立政治大學工商心理研究團隊維護</span>
                                <br />
                                <span>您填答之資料採保密處理，僅作學術使用</span>
                            </p>

                            <div className="row">
                                <div className="col-6 px-3 text-center">
                                    <Link to="/staff/questionnaire" className="btn btn-warning text-white">馬上填答</Link>

                                </div>
                                <div className="col-6 px-3 text-center">
                                    <button className="btn btn-secondary" onClick={this.handleCloseModal}>先逛逛再說</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={closeBtn}>
                        <button className="btn text-white" onClick={this.handleCloseModal}>X</button>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default LotteryModal;
