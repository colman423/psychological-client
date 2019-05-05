import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

class HoverTransition extends Component {
    static defaultProps = {
        transition: [],
        time: 1000,
        unmountOnExit: true
    };

    constructor(props) {
        super(props);
        this.state = {
            hover: false,
        };
    }

    render() {
        var { transition, time, unmountOnExit } = this.props;

        return (
            <div
                className="text-white text-center d-inline-block"
                style={{ 'position': "relative", 'top': "0" }}
                onMouseEnter={() => this.setState({ hover: true })}
                onMouseLeave={() => this.setState({ hover: false })}
            >
                <div style={{ 'zIndex': "2" }}>
                    {this.props.children[0]}
                </div>

                <CSSTransition
                    style={{
                        'zIndex': "3",
                        'position': "absolute",
                        'top': "0"
                    }}
                    in={this.state.hover}
                    timeout={time}
                    unmountOnExit={unmountOnExit}
                    classNames={{
                        enter: transition.map((e) => { return e + "-enter"; }).join(" "),
                        enterActive: transition.map((e) => { return e + "-enter-active"; }).join(" "),
                        enterDone: transition.map((e) => { return e + "-enter-done"; }).join(" "),
                        exit: transition.map((e) => { return e + "-exit"; }).join(" "),
                        exitActive: transition.map((e) => { return e + "-exit-active"; }).join(" "),
                        exitDone: transition.map((e) => { return e + "-exit-done"; }).join(" ")
                    }}
                >
                    {this.props.children[1]}
                </CSSTransition>
            </div>

        );
    }
}
export default HoverTransition;