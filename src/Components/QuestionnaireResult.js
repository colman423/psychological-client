import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Switch, Case, Default } from 'react-if';

import { BarChart, RadarChart } from './Chart';
import Api from '../Api';

class QuestionnaireResult extends Component {
    static defaultProps = {
        'id': "0"
    };

    constructor(props) {
        super(props);
        this.state = {
            success: false,
            data: {
                'resource': [{
                    'name': "彈性", 'value': 0
                }, {
                    'name': "經濟", 'value': 0
                }, {
                    'name': "身心", 'value': 0
                }, {
                    'name': "專業", 'value': 0
                }, {
                    'name': "資訊", 'value': 0
                }, {
                    'name': "關係", 'value': 0
                }]
            }
        }
    }


    componentDidMount() {
        console.log(this.props);
        Api.getScore(this.props.id).then(data => {
            this.setState({ 'data': data, 'success': true });
        })
    }

    componentDidUpdate() {
        console.log("update", this.state.data);
    }
    render() {
        let { data, success } = this.state;
        console.log("render", data)

        return (
            <>
                <Helmet><title>{this.props.id} Result</title></Helmet>
                <div className="bg-white">
                    <div className="container pt-5">
                        <div className="row">
                            <div className="col-12">
                                <span>
                                    {success ? "Result:" : "Loading..."}
                                </span>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <RadarChart data={data.resource || []} />

                            </div>
                            <div className="col-12 col-lg-6">
                                <BarChart data={data.ghq || []} />
                            </div>
                        </div>
                        {/* <Switch>
                        <Case condition={Object.keys(data).length > 0}> */}



                        {/* </Case>
                        <Default>
                        <div>"no data"</div>
                        </Default>
                    </Switch> */}
                    </div>
                </div>
            </>
        )
    }
}

export default QuestionnaireResult;
