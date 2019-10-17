import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import Reward from '../Images/reward.png';

Modal.setAppElement('#root');

const modalStyles = {
    overlay: {
        zIndex: 1050
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
                            <Content />


                            <div className="row">
                                <div className="col-4 px-3 text-center">
                                    <Link
                                        to="/enterprise/checklist"
                                        className="btn rounded-0 btn-warning text-white"
                                        title="此為企業代表（如人資）版本，若您為一般員工個人填答，請填寫員工版問卷"
                                    >
                                        企業代表版
                                    </Link>
                                </div>
                                <div className="col-4 px-3 text-center">
                                    <Link
                                        to="/staff/questionnaire"
                                        className="btn rounded-0 btn-warning text-white"
                                        title="此為一般員工版，若您為企業代表（如人資），請填寫企業代表版問卷"
                                    >
                                        一般員工版
                                    </Link>
                                </div>
                                <div className="col-4 px-3 text-center">
                                    <button
                                        className="btn rounded-0 btn-secondary"
                                        onClick={this.handleCloseModal}
                                    >
                                        先逛逛再說
                                    </button>
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

function Content(props) {
    return (
        <>
            <p className="text-center">
                <span className="h5 text-center"><b>＊填問卷抽大獎＊</b></span>
                <br />
                <small>(若手機觀看不易，請使用電腦版觀看本網站)</small>
            </p>

            <p>
                <span>即日起至10/30止</span>
                <br />
                <span>填寫本網站企業代表版或一般員工版問卷即可抽獎獲得多樣好禮！</span>
                <br />
                <span>歡迎大家介紹親朋好友一起來填，介紹人可以獲得多一次的抽獎機會，介紹愈多人，中獎機會愈高！</span>
            </p>


            <p>
                <span>＊月月抽＊</span>
                <br />
                <span>填過一次問卷即可參加抽獎，每月抽出多樣大獎</span>
                <br />
                <span>&nbsp;<img src={Reward} width="20px" alt="頭獎：新光三越禮券2000元" />頭獎：新光三越禮券2000元</span>
                <br />
                <span>&nbsp;<img src={Reward} width="20px" alt="一獎：家樂福提貨券1000元" />一獎：家樂福提貨券1000元</span>
                <br />
                <span>&nbsp;<img src={Reward} width="20px" alt="二獎：誠品生活禮券1000元" />二獎：誠品生活禮券1000元</span>
                <br />
                <span>&nbsp;<img src={Reward} width="20px" alt="三獎：誠品生活禮券500元" />三獎：誠品生活禮券500元</span>
                <br />
                <span>&nbsp;<img src={Reward} width="20px" alt="普獎：統一超商禮券200元" />普獎：統一超商禮券200元</span>
            </p>

            <p>
                <span>還有一項神秘大禮（價值10000元）會在10月抽出！</span>
                <br />
                <span>趕緊把握這難得的機會！</span>
            </p>

            <p>
                <span>＊填答時間僅約10分鐘＊</span>
                <br />
                <span>本網站為國立政治大學工商心理研究團隊維護</span>
                <br />
                <span>您填答之資料採保密處理，僅作學術使用</span>
            </p>
        </>
    )
}
export default LotteryModal;
