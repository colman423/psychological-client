import React, { PureComponent } from 'react';
import {
  Radar, RadarChart as Chart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

class RadarChart extends PureComponent {
  render() {
    return (
      <Chart cx={300} cy={250} outerRadius={150} width={500} height={500} data={this.props.data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        {/* <PolarRadiusAxis /> */}
        <PolarRadiusAxis angle={30} domain={[0, 100]} />
        <Radar name="name" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </Chart>
    );
  }
}

export default RadarChart;
