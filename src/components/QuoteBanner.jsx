import React from "react";

const QuoteBanner = () => {
  const bannerStyle = {
    backgroundColor: "#808080",
    textAlign: "center",
  };

  return (
    <div style={bannerStyle} className="jumbotron jumbotron-fluid text-center">
      <div className="container">
        <h2
          className="display-4"
          style={{ fontFamily: "Snell Roundhand, cursive" }}
        >
          Travel is the only thing you buy that makes you richer...
        </h2>
      </div>
    </div>
  );
};

export default QuoteBanner;
