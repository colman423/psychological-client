import React, { Component } from "react";
import defaultImg from "../Images/default.png";
import { Image } from 'react-bootstrap';

class IconText extends Component {
    static defaultProps = {
        img: defaultImg,
        bg: "white",
        border: "1px solid black"
    };

    render() {
        const { img, bg, children, border, ...props } = this.props;
        return (
            <div {...props}>
                <Image src={img} fluid className={`bg-${bg}`} style={{
                    borderRadius: "50%",
                    border: border
                }}></Image>
                <div className="text-center">{children}</div>
            </div>
        );
    }
}
export default IconText;
