import React, { PureComponent } from 'react';

const abc = {
    display: "relative"
}

function HorizontalBarChart(props) {
    let { value } = props;
    return (
        <div className="bg-secondary py-0 text-center text-white">
            <span>{value}</span>
            <div style={abc} />
        </div>
    )
}

export default HorizontalBarChart;
