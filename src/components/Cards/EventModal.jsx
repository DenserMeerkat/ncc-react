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
        <p>{img.caption}</p>
      </div>
    );
  });
  return (
    <div className="container">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby={"modal-" + title}
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
                showIndicators={false}
                // showThumbs={props.imgList.length > 1 ? true : false}
                // showArrows={props.imgList.length > 1 ? true : false}
                stopOnHover={true}
              >
                {images}
              </Carousel>
            </Box>
            <Box padding={3}>
              <Flex gap={1} alignItems={"flex-start"}>
                <Box
                  height={"24px"}
                  width={"4px"}
                  borderRadius={"4px"}
                  bgcolor={alpha(secondaryMain, 1)}
                />
                <Typography
                  variant="h6"
                  component={"h4"}
                  fontSize={18}
                  fontWeight={600}
                >
                  {title}
                </Typography>
              </Flex>
              <Box padding={1}>
                <Flex gap={2} justifyContent={"flex-end"} flexWrap={"wrap"}>
                  <Box
                    bgcolor={" rgb(30,200,0,0.1)"}
                    border={"1px solid rgb(30,200,0,1)"}
                    padding={"2px 12px"}
                    borderRadius={"12px"}
                  >
                    <Typography variant="h6" component={"h4"} fontSize={12}>
                      {location}
                    </Typography>
                  </Box>
                  <Box
                    bgcolor={" rgb(0, 174, 239,0.1)"}
                    border={"1px solid rgb(0, 174, 239,1)"}
                    padding={"2px 10px"}
                    borderRadius={"12px"}
                  >
                    <Typography variant="h6" component={"h4"} fontSize={12}>
                      {date}
                    </Typography>
                  </Box>
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
