import React from "react";
import { Button } from "react-bootstrap";

function Header() {
  return (
    <React.Fragment>
      <div className="bg-secondary pt-2 pb-5 text-center">
        <h1 className="display-1 text-white fw-bold">The Generic</h1>
        <h4
          className="bg-secondary text-white pt-2 pr-2"
          style={{
            border: "2px solid #17a2b8",
            display: "inline-block",
            padding: "0.5rem 1rem", // Padding inside the border
          }}
        >
          Get Our Latest Album
        </h4>
        <p>
          <Button
            variant="info"
            className="rounded-circle"
            style={{
              width: "80px",
              height: "80px",
              fontSize: "2rem",
              textAlign: "center",
              lineHeight: "30px",
              border: "2px solid #17a2b8",
              backgroundColor: "transparent",
            }}
          >
            ►
          </Button>
        </p>
      </div>
    </React.Fragment>
  );
}

export default Header;
