import React from 'react';

const LotteryVideo = ({ text, src }) => {
  return (
      <>
          <br />
          <p>{text}</p>
          <video width="80%" controls>
              <source src={src} type="video/mp4" />
              <p>Your browser does not support HTML5 video.</p>
          </video>
          <br />
      </>
  )
}

export default LotteryVideo
