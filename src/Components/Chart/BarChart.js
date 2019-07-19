import React, { PureComponent } from 'react';
import {
  BarChart as Chart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';



class BarChart extends PureComponent {
  render() {
    return (
      <Chart
        width={500}
        height={500}
        data={this.props.data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        {/* <Legend /> */}
        <Bar dataKey="value" fill="#8884d8" />
      </Chart>
    );
  }
}

export default BarChart;
