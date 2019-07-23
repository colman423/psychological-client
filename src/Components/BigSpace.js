import React from 'react';

function BigSpace(props) {
    let n = parseInt(props.len) || 4;
    return (
        [...Array(n)].map((e, i) => <span key={i}>&nbsp; </span>)
    )
}
export default BigSpace;
