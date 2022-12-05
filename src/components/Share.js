import React from "react";
import "./Share.css";

function Share() {
  return (
    <div className="share">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width="34"
        className="share-logo"
      >
        <path d="M0 0h512v512H0z" fill="#c9c9c9" fillOpacity="0"></path>
        <g className="" transform="translate(0,0)">
          <path
            d="M384 64a64 64 0 0 0-64 64 64 64 0 0 0 1.1 11.3l-146.3 73.2A64 64 0 0 0 128 192a64 64 0 0 0-64 64 64 64 0 0 0 64 64 64 64 0 0 0 46.8-20.5L321 372.7a64 64 0 0 0-1 11.3 64 64 0 0 0 64 64 64 64 0 0 0 64-64 64 64 0 0 0-64-64 64 64 0 0 0-46.8 20.5L191 267.4a64 64 0 0 0 1-11.4 64 64 0 0 0-1.1-11.4l146.3-73.1A64 64 0 0 0 384 192a64 64 0 0 0 64-64 64 64 0 0 0-64-64z"
            fill="#fff"
            fillOpacity="1"
          ></path>
        </g>
      </svg>

      <button type="submit" className="share-btn">
        Share
      </button>
    </div>
  );
}

export default Share;
