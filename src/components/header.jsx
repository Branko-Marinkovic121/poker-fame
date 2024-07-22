import React from "react";

export const Header = (props) => {
  return (
    <header id="header" style={{paddingTop: "80px"}}>
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <img className="firstIntroMobileImg" src="img/about2.jpg" alt=""/>
                <img className="firstIntroMobileImg" src="img/about2.jpg" alt=""/>
                <img className="firstIntroMobileImg" src="img/about2.jpg" alt=""/>
                <img className="secondIntroMobileImg" src="img/1.jpg" alt=""/>
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Play now
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
