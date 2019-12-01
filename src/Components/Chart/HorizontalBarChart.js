import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';


class HorizontalBarChart extends Component {
    static defaultProps = {
        value: 0,
        average: 0
    }

    constructor( props ) {
        super(props);
        this.state = {
            now: 0,
            nowAvg: 0
        }
    }

    componentDidMount() {
        let timer = setInterval( () => {
            if( this.state.now < this.props.value ) {
                this.setState({ now: this.state.now+1 })
            }
            else {
                clearInterval(timer);
            }
        }, 10)
        let timer2 = setInterval( () => {
            if( this.state.nowAvg < this.props.average ) {
                this.setState({ nowAvg: this.state.nowAvg+1 })
            }
            else {
                clearInterval(timer2);
            }
        }, 10)
    }

    
    render() {
        let { now, nowAvg } = this.state;
        return (
            <div className="py-0 text-center">
                <ProgressBar now={now} label={`${now}%`} style={{ height: "30px" }} variant="warning" />
                <br />
                <div className="text-left">優良企業</div>
                <ProgressBar now={nowAvg} label={`${nowAvg}%`} style={{ height: "30px" }} variant="warning" />
            </div>
        )
    }
}

export default HorizontalBarChart;
