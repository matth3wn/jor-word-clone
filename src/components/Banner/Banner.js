import React from "react";

function Banner({ gameStatus, children }) {
  return (
    <div className={`${gameStatus} banner`}>
      { children }
    </div>
  );
}

export default Banner;
