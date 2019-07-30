import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';


class HorizontalBarChart extends Component {
    static defaultProps = {
        value: 0
    }

    constructor( props ) {
        super(props);
        this.state = {
            now: 0
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
    }

    
    render() {
        let { now } = this.state;
        return (
            <div className="py-0 text-center">
                <ProgressBar now={now} label={`${now}%`} style={{ height: "30px" }} variant="warning" />
            </div>
        )
    }
}

export default HorizontalBarChart;
