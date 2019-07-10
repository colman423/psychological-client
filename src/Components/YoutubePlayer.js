import React from 'react';

function YoutubePlayer(props) {
    let vid = props.vid;
    return (
        <iframe 
        width="560" height="315"
        src={`https://www.youtube.com/embed/${vid}`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen="allowfullscreen"
        style={{maxWidth: "100%"}}
        ></iframe>
    )
}
export default YoutubePlayer;
