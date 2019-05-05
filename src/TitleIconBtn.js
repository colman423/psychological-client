import React, { Component } from "react";
import defaultImg from "./img/default.png";

class TitleIconBtn extends Component {
    static defaultProps = {
        img: defaultImg,
        color: "#233142",
        // color: "white",
        width: "150px",
        text: ""
    };

    constructor(props) {
        super(props);
        this.state = {
            hover: false,
        };
    }

    render() {
        const { img, color, width, text, children } = this.props;
        return (
            <div>
                <div>
                    <img
                        alt={text}
                        src={img}
                        className="rounded-circle"
                        width={width}
                        style={{ backgroundColor: color }}
                        onMouseEnter={() => this.setState({ hover: true })}
                        onMouseLeave={() => this.setState({ hover: false })}
                    />
                    <h2 className="text-white mt-3">{text}</h2>
                </div>
                {children}

            </div>
        );
    }
}
export default TitleIconBtn;
