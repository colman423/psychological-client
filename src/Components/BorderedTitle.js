import React, { Component } from 'react';

class BorderedTitle extends Component {
    static defaultProps = {
        'radius': "5px",
        'padX': "15px",
        'padY': "5px",
        'bg': "bluegreen",
        'textColor': "white"
    };

    render() {
        let { children, radius, padX, padY, bg, textColor, ...props } = this.props;
        return (
            <div {...props}>
                <span style={{
                    "borderRadius": radius,
                    "padding": `${padY} ${padX} ${padY} ${padX}`,
                }} className={`bg-${bg} text-${textColor}`}>
                    {children}
                </span>
            </div>
        )
    }
}
export default BorderedTitle;
