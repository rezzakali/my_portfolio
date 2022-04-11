import { Button } from "@mui/material";
import React from "react";
import myImage from "./assets/m1.png";

function Home() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm">
          <h1>
            I am{" "}
            <span
              style={{
                textTransform: "capitalize",
                color: "#E83A14",
              }}
            >
              Rezzak
            </span>
          </h1>
          <h1>I'm a Web Designer</h1>
          <p style={{ textAlign: "justify" }}>
            Welcome to my official Portfolio Website Where I put all my work
            related to my desings and many more.
          </p>
          <Button
            variant="contained"
            style={{
              textTransform: "capitalize",
              backgroundColor: "#E83A14",
            }}
          >
            Download CV
          </Button>
          <br />
          <br />
          <p>Find me on</p>
          <i className="bx bx-md bxl-facebook"></i>
          <i className="bx bx-md bxl-instagram"></i>
          <i className="bx bx-md bxl-linkedin"></i>
        </div>

        <div className="col-sm">
          <img src={myImage} alt="img" style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
}

export default Home;
