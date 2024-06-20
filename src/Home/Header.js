import React from "react";
import { Button } from "react-bootstrap";

function Header() {
  return (
    <React.Fragment>
      <div className="bg-secondary pt-2 pb-5 text-center">
        <h1 className="display-1 text-white fw-bold mb-4">The Generic</h1>

        <Button
          variant="none"
          className="bg-secondary text-white mb-4"
          style={{
            padding: "1rem 2rem",
            border: "2px solid #56CCF2",
          }}
        >
          Get Our Latest Album
        </Button>

        <div className="mb-4">
          <Button
            variant="none"
            className="rounded-circle"
            style={{
              fontSize: "30px",
              height: "70px",
              width: "70px",
              fontWeight: "200",
              textAlign: "center",
              border: "2px solid #56CCF2",
              color: "#56CCF2",
              backgroundColor: "transparent",
            }}
          >
            ►
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
