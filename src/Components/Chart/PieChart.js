import React, { PureComponent } from 'react';
import * as log from 'loglevel'

import {
    PieChart as RePieChart, Pie, Cell, ResponsiveContainer, Tooltip
} from 'recharts';

const renderCustomizedLabel = ({ name, value }) => {
    return (
        `${value}%`
    );
};

class PieChart extends PureComponent {

    render() {
        let { data, averageLabel, averageText } = this.props
        return (
            <>
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
                                log.debug("entry", entry)
                                log.debug("index", index)
                                return (
                                    <Cell key={`cell-${index}`}
                                        fill={entry.chosen ? '#facf5a' : '#d2d2d2'}
                                    />
                                )
                            })
                        }
                    </Pie>
                    <Tooltip
                        formatter={(value, name) => value+'%'} />
                </RePieChart>
            </ResponsiveContainer>
            <div>
                <p className="text-center text-secondary">優良企業的平均{averageLabel}狀態為：<br />{averageText}</p>
            </div>
</>
        );
    }
}


export default PieChart;
