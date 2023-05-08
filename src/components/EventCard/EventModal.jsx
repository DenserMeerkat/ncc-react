import {
  Box,
  Typography,
  useTheme,
  Button,
  Paper,
  Card,
  Modal,
  useMediaQuery,
} from "@mui/material";
import { Launch } from "@mui/icons-material";
import React from "react";
import Flex from "../../utils/Flex";
import nccShoulderPatch from "../../assets/images/ncc_shoulder.png";
import { alpha } from "@mui/material";

import { Carousel } from "react-responsive-carousel";
import "./index.css";

const style = {
  display: "block",
  position: "absolute",
  outline: "none",
  top: "15vh",
  left: "0",
  right: "0",
  marginLeft: "auto",
  marginRight: "auto",
  width: "clamp(320px, 70vw, 800px)",
  height: "80vh",
  borderRadius: "4px",
  bgcolor: "background.paper",
  boxShadow: 24,
  overflowY: "overlay",
  pb: 3,
};

const EventModal = (props) => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const isMobile = useMediaQuery("(max-width: 850px)");
  const title = props.title;
  const date = props.date;
  const location = props.location;
  const description = props.description;
  const imgList = props.imgList;
  const fileURL = props.fileURL;
  const theme = useTheme();
  const secondaryMain = theme.palette.secondary.main;
  let open = props.open;
  const handleClose = props.handleClose;
  const images = imgList.map((img) => {
    return (
      <div className="carousal-item" key={img.id}>
        <img className="img" src={img.imageURL} alt="" />
        <Box
          component="img"
          sx={{
            height: "50vw",
            maxHeight: "350px",
            objectFit: "contain",
            width: "100%",
            background: "black",
          }}
          src={img.imageURL}
          alt={img.caption}
        />
      </div>
    );
  });
  return (
    <div className="container">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box borderRadius={"4px"} maxWidth={"100%"}>
            <Box overflow={"hidden"}>
              <Carousel
                autoPlay={true}
                infiniteLoop={true}
                emulateTouch={false}
                swipeable={false}
                showStatus={false}
                // showIndicators={props.imgList.length > 1 ? true : false}
                // showThumbs={props.imgList.length > 1 ? true : false}
                // showArrows={props.imgList.length > 1 ? true : false}
                stopOnHover={true}
              >
                {images}
              </Carousel>
            </Box>
            <Box padding={3}>
              <Typography variant="h5" component={"h4"} color="initial">
                {title}
              </Typography>
              <Box padding={1}>
                <Flex gap={3} justifyContent={"flex-end"}>
                  <Typography variant="h6" component={"h4"} fontSize={16}>
                    {location}
                  </Typography>
                  <Typography variant="h6" component={"h4"} fontSize={16}>
                    {date}
                  </Typography>
                </Flex>
              </Box>

              <Box padding={1}>
                <Typography variant="h6" component={"h6"} fontSize={14}>
                  {description}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default EventModal;
