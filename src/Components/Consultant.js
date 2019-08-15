import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

import * as log from 'loglevel'

class ContentImageDivider extends Component {
    static image = {
        'image': null,
        'imageRight': false
    };
    render() {
        let { children, image, imageRight, ...props } = this.props;
        return (
            <div {...props}>
                { imageRight ?
                    <div className="d-none col-lg-6 d-lg-block mb-5">
                        <Image src={image} fluid className="w-50" />
                    </div> : ""
                }
                <div className="col-12 col-lg-6">
                    {children}
                </div>
                { !imageRight ?
                    <div className="d-none col-lg-6 d-lg-block mb-5">
                        <Image src={image} fluid className="w-50" />
                    </div> : ""
                }
            </div>
        )
    }
}

class TitleContentDivider extends Component {
    static defaultProps = {
        'titleImg': null
    };
    render() {
        let { titleImg, children, ...props } = this.props;
        return (
            <div {...props}>
                <Image src={titleImg} fluid className="w-75" />
                {children}
            </div>
        )
    }
}

class LocationContentDivider extends Component {
    static defaultProps = {
        'locationImg': null
    };
    render() {
        let { locationImg, children } = this.props;

        return (
            <div className="row mb-3">
                {locationImg ?
                    <div className="col-3 px-0" style={{ borderRight: "5px dotted white" }}>
                        <Image src={locationImg} fluid />
                    </div> : ""
                }
                <div className="pl-5 mt-2 col-9">
                    {children}
                </div>
            </div>
        )
    }
}

class LinkGroup extends Component {
    render() {
        let { data, ...props } = this.props;
        return (
            <div {...props} >
                {data.map((d, i) => {
                    log.debug(d, i)
                    return (
                        <p className="h5 mb-4" key={i}>
                            <a href={d.url} className="text-white">{d.text}</a>
                        </p>

                    )
                })}
            </div>
        )
    }
}
export { ContentImageDivider, TitleContentDivider, LocationContentDivider, LinkGroup };
