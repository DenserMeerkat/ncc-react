import { Box, Typography, useTheme, Button } from "@mui/material";
import React from "react";
import nccShoulderPatch from "../assets/images/ncc_shoulder.png";

import { TouchApp } from "@mui/icons-material";

class FlipCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { flipped: false };
    this.flip = this.flip.bind(this);
  }

  flip = () => {
    this.setState({ flipped: !this.state.flipped });
  };
  render() {
    return (
      <div
        onMouseEnter={this.flip}
        onMouseLeave={this.flip}
        className={"card-container" + (this.state.flipped ? " flipped" : "")}
      >
        <Front />
        <Back />
      </div>
    );
  }
}

class Front extends React.Component {
  render() {
    return (
      <div className="front">
        <Box
          component="img"
          sx={{
            position: "absolute",
            height: "100%",
            aspectRatio: 1,
            objectFit: "cover",
            opacity: 0.2,
            zIndex: -1,
            filter: "blur(1px) hue-rotate(10deg)",
          }}
          src={nccShoulderPatch}
          alt="ncc shoulder patch background"
        />
        <Box
          sx={{
            padding: "40px 30px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        >
          <div className="ncc-logo">
            <TouchApp
              fontSize="large"
              sx={{
                height: "40px",
                width: "40px",
                marginBottom: "10px",
                opacity: 1,
                color: "white",
              }}
            />
          </div>
          <Typography
            sx={{
              margin: "0 auto",
              width: "80%",
              textAlign: "center",
              zIndex: 1,
              color: "white",
              opacity: 1,
              fontWeight: "600",
              letterSpacing: 2,
              textShadow: "0px 0px 5px rgba(0,0,0,0.8)",
            }}
            variant="h5"
          >
            Why you should join NCC ?
          </Typography>
        </Box>
      </div>
    );
  }
}

class Back extends React.Component {
  render() {
    return (
      <div className="back">
        <Box
          sx={{
            padding: "40px 30px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "20px",
            alignItems: "center",
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        >
          <Typography
            sx={{
              margin: "0 auto",
              width: "80%",
              textAlign: "center",
              zIndex: 1,
              color: "white",
              opacity: 1,
              fontWeight: "600",
              textShadow: "0px 0px 5px rgba(0,0,0,0.8)",
            }}
            variant="h6"
          >
            For more details
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              textTransform: "none",
              fontWeight: "600",
              color: "white",
              letterSpacing: 1.2,
              textShadow: "0px 0px 5px rgba(0,0,0,0.8)",
            }}
          >
            Contact Us
          </Button>
        </Box>
        <Box
          component="img"
          sx={{
            position: "absolute",
            height: "100%",
            objectFit: "cover",
            opacity: 0.2,
            zIndex: -1,
            filter: "blur(1px) hue-rotate(10deg)",
          }}
          src={nccShoulderPatch}
          alt="ncc shoulder patch background"
        />
      </div>
    );
  }
}

export default FlipCard;
