import React from "react";
import myImage from "../Assets/youtube.png";
import spotify from "../Assets/spotify.png";
import flipkart from "../Assets/flipkart.png";

function Footer() {
  return (
    <React.Fragment>
      <div className="bg-info d-flex p-5 justify-content-center">
        <h3 className="display-4 text-white fw-bold">The Generic</h3>
        <div className="ms-5">
          <span className="me-3 ">
            <a href="https://google.com">
              <img
                src={myImage}
                alt="youtube"
                style={{ width: "50px", height: "50px" }}
              />
            </a>
          </span>
          <span className="me-3">
            <a href="https://spotify.com">
              <img
                src={spotify}
                alt="Spotify"
                style={{ width: "30px", height: "30px" }}
              />
            </a>
          </span>
          <span className="me-3">
            <a href="https://flipkart.com">
              <img
                src={flipkart}
                alt="Flipkart"
                style={{ width: "30px", height: "30px" }}
              />
            </a>
          </span>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Footer;
