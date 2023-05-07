import {
  Box,
  Typography,
  useTheme,
  Button,
  Paper,
  Card,
  Modal,
} from "@mui/material";
import { Launch } from "@mui/icons-material";
import React from "react";
import Flex from "../utils/Flex";
import nccShoulderPatch from "../assets/images/ncc_shoulder.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { alpha } from "@mui/material";
import { Carousel } from "react-responsive-carousel";

const style = {
  position: "absolute",
  top: "10vh",
  left: "0",
  right: "0",
  marginLeft: "auto",
  marginRight: "auto",
  width: "clamp(300px, 70vw, 800px)",
  height: "80vh",
  borderRadius: "4px",
  bgcolor: "background.paper",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const EventCard = (props) => {
  const title = props.title;
  const date = props.date;
  const location = props.location;
  const description = props.description;
  const imgList = props.imgList;
  const fileURL = props.fileURL;
  const theme = useTheme();
  const secondaryMain = theme.palette.secondary.main;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Card
        onClick={handleOpen}
        variant={"outlined"}
        sx={{
          ":hover": {
            boxShadow: 20,
          },
        }}
      >
        <Box
          overflow={"hidden"}
          borderRadius={"4px"}
          maxWidth={"400px"}
          bgcolor={alpha(secondaryMain, 0.05)}
        >
          <Box>
            <Carousel
              autoPlay={true}
              infiniteLoop={true}
              emulateTouch={true}
              swipeable={true}
              showStatus={false}
              showThumbs={false}
              stopOnHover={true}
            >
              <div>
                <Box
                  component="img"
                  sx={{
                    aspectRatio: 1,
                    objectFit: "cover",
                    width: "105%",
                  }}
                  src={nccShoulderPatch}
                  alt="ncc shoulder patch background"
                />
                {/* <p className="legend">Legend 1</p> */}
              </div>
              <div>
                <Box
                  component="img"
                  sx={{
                    aspectRatio: 1,
                    objectFit: "cover",
                    width: "105%",
                  }}
                  src={nccShoulderPatch}
                  alt="ncc shoulder patch background"
                />
                {/* <p className="legend">Legend 2</p> */}
              </div>
              <div>
                <Box
                  component="img"
                  sx={{
                    aspectRatio: 1,
                    objectFit: "cover",
                    width: "105%",
                  }}
                  src={nccShoulderPatch}
                  alt="ncc shoulder patch background"
                />
                {/* <p className="legend">Legend 3</p> */}
              </div>
            </Carousel>
          </Box>
          <Box padding={1} paddingLeft={2} paddingRight={2}>
            <Typography variant="h6" component={"h4"} color="initial">
              Event Title
            </Typography>
            <Flex gap={3} justifyContent="flex-end">
              <Typography variant="h6" component={"h4"} fontSize={16}>
                Location
              </Typography>
              <Typography variant="h6" component={"h4"} fontSize={16}>
                Date
              </Typography>
            </Flex>
            <Box padding={1}></Box>
            <Flex justifyContent={"flex-end"}>
              <Button variant="text">
                <Typography
                  variant="h6"
                  component={"h4"}
                  fontSize={16}
                  textTransform={"none"}
                >
                  Read More
                </Typography>
              </Button>
            </Flex>
          </Box>
        </Box>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box overflow={"auto"} borderRadius={"4px"} maxWidth={"100%"}>
            <Box>
              <Carousel
                autoPlay={true}
                infiniteLoop={true}
                emulateTouch={true}
                swipeable={true}
                showStatus={false}
                showThumbs={false}
                stopOnHover={true}
              >
                <div>
                  <Box
                    component="img"
                    sx={{
                      margin: "0 auto",
                      height: "200px",
                      maxWidth: "270px",
                    }}
                    src={nccShoulderPatch}
                    alt="ncc shoulder patch background"
                  />
                  {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                  <Box
                    component="img"
                    sx={{
                      margin: "0 auto",
                      height: "200px",
                      maxWidth: "270px",
                    }}
                    src={nccShoulderPatch}
                    alt="ncc shoulder patch background"
                  />
                  {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                  <Box
                    component="img"
                    sx={{
                      margin: "0 auto",
                      height: "200px",
                      maxWidth: "270px",
                    }}
                    src={nccShoulderPatch}
                    alt="ncc shoulder patch background"
                  />
                  {/* <p className="legend">Legend 3</p> */}
                </div>
              </Carousel>
            </Box>
            <Box padding={1} paddingLeft={2} paddingRight={2}>
              <Typography variant="h6" component={"h4"} color="initial">
                Event Title
              </Typography>
              <Flex gap={3} justifyContent="flex-end">
                <Typography variant="h6" component={"h4"} fontSize={16}>
                  Location
                </Typography>
                <Typography variant="h6" component={"h4"} fontSize={16}>
                  Date
                </Typography>
              </Flex>
              <Box padding={1}></Box>
              <Flex justifyContent={"flex-end"}>
                <Button variant="text">
                  <Typography
                    variant="h6"
                    component={"h4"}
                    fontSize={16}
                    textTransform={"none"}
                  >
                    Read More
                  </Typography>
                </Button>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default EventCard;
