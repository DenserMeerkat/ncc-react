import { Box, Typography, useTheme, Card } from "@mui/material";
import Title from "../Title";
import React from "react";
import Flex from "../../utils/Flex";
import EventModal from "./EventModal";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-multi-carousel/lib/styles.css";
import { alpha } from "@mui/material";
import { Carousel } from "react-responsive-carousel";

const EventCard = (props) => {
  const key = props.id;
  const title = props.title;
  const date = props.date;
  const location = props.location;
  const description = props.description;
  const imgList = props.imgList;
  const fileURL = props.fileURL;
  const theme = useTheme();
  const secondaryMain = theme.palette.secondary.main;
  const primaryMain = theme.palette.primary.light;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const images = imgList.map((img) => {
    return (
      <div key={img.id}>
        <Box
          component="img"
          sx={{
            objectFit: "cover",
            width: "105%",
          }}
          src={img.imageURL}
          alt={img.caption}
        />
      </div>
    );
  });
  return (
    <div
      key={key}
      style={{
        cursor: "pointer",
      }}
    >
      <Card
        elevation={3}
        onClick={handleOpen}
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
          bgcolor={alpha(primaryMain, 0.1)}
          sx={{
            transition: "0.5s",
            ":hover": {
              backgroundColor: alpha(secondaryMain, 0.4),
              transition: "0.5s",
            },
          }}
        >
          <Box>
            <Carousel
              autoPlay={true}
              infiniteLoop={true}
              emulateTouch={false}
              swipeable={false}
              showStatus={false}
              showThumbs={false}
              showArrows={false}
              showIndicators={false}
              stopOnHover={true}
            >
              {images}
            </Carousel>
          </Box>
          <Box padding={1} paddingLeft={2} paddingRight={2}>
            <Title title={title} />

            <Box padding={0.5}></Box>
            <Flex gap={2} justifyContent={"flex-end"} flexWrap={"wrap"}>
              <Box
                bgcolor={" rgb(30,200,0,0.3)"}
                border={"1px solid rgb(30,200,0,1)"}
                padding={"2px 10px"}
                borderRadius={"12px"}
              >
                <Typography
                  variant="h6"
                  component={"h4"}
                  fontSize={12}
                  fontWeight={600}
                  sx={{
                    display: "-webkit-box",
                    overflow: "hidden",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 1,
                  }}
                >
                  {location}
                  {/* {location.length > 38
                    ? `${location.substring(0, 38)}...`
                    : location} */}
                </Typography>
              </Box>
              <Box
                bgcolor={" rgb(0, 174, 239,0.2)"}
                border={"1px solid rgb(0, 174, 239,1)"}
                padding={"2px 10px"}
                borderRadius={"12px"}
              >
                <Typography
                  variant="h6"
                  component={"h4"}
                  fontSize={12}
                  fontWeight={600}
                >
                  {date}
                </Typography>
              </Box>
            </Flex>
            <Box padding={0.5}></Box>
            {/* <Flex justifyContent={"flex-end"}>
              <Button variant="text">
                <Typography
                  variant="h6"
                  component={"h4"}
                  fontSize={16}
                  textTransform={"none"}
                >
                  Open
                </Typography>
              </Button>
            </Flex> */}
          </Box>
        </Box>
      </Card>
      <EventModal
        title={title}
        location={location}
        date={date}
        description={description}
        imgList={imgList}
        fileURL={fileURL}
        open={open}
        handleClose={handleClose}
      />
    </div>
  );
};

export default EventCard;
