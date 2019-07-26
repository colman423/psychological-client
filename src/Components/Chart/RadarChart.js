import React, { PureComponent } from 'react';
import {
    Radar, RadarChart as Chart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer
} from 'recharts';

class RadarChart extends PureComponent {
    render() {
        return (
            <ResponsiveContainer width="100%" height={500}>
                <Chart cy={250} outerRadius={150} data={this.props.data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="name" />
                    {/* <PolarRadiusAxis /> */}
                    {/* <PolarRadiusAxis angle={90} domain={[0, 100]} /> */}
                    {/* <PolarRadiusAxis angle={0} domain={[0, 100]} /> */}
                    <Radar name="name" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                </Chart>
            </ResponsiveContainer>

        );
    }
}

export default RadarChart;
