import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

class Overlap extends Component {
    render() {
        var { children, img } = this.props;
        return (
            <div>
                <div style={{ 'position': "relative" }}>
                    <Image src={img} fluid style={{ 'zIndex': 2 }}></Image>
                    <div style={{ 'zIndex': "3", 'top': "50%", 'position': "absolute", 'transform': "translateY(-50%)" }}>
                        <div className="text-white pl-3">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Overlap;
