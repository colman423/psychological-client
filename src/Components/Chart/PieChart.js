import React, { PureComponent } from 'react';

import {
    PieChart as RePieChart, Pie, Sector, Cell, ResponsiveContainer
} from 'recharts';

const renderCustomizedLabel = ({ name, value }) => {
    return (
        `${value}% ${name}`
    );
};

class PieChart extends PureComponent {

    render() {
        let { data } = this.props
        return (
            <ResponsiveContainer width="100%" height={300}>
                <RePieChart >
                    <Pie
                        dataKey="value"
                        data={data}
                        startAngle={90}
                        endAngle={-270}
                        outerRadius={60}
                        label={renderCustomizedLabel}
                    >
                        {
                            data.map((entry, index) => {
                                console.log("entry", entry)
                                console.log("index", index)
                                return (
                                    <Cell key={`cell-${index}`}
                                        fill={entry.chosen ? '#facf5a' : '#d2d2d2'}
                                    />
                                )
                            })
                        }
                    </Pie>
                </RePieChart>
            </ResponsiveContainer>
        );
    }
}


export default PieChart;
