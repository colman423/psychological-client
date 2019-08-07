import React from 'react';

const HoverText = ({ hoverText, text, component, ...props }) => {
    const Tag = component || "span";
    return (

        <Tag {...props}>
            <span className="HoverText">

                <span className="HoverText__no-hover">{text}</span>
                <span className="HoverText__hover">{hoverText}</span>
            </span>
        </Tag>
    )
}

export default HoverText;
