import { Box, Typography, useTheme, Card } from "@mui/material";
import React from "react";
import Flex from "../../utils/Flex";
import Padding from "../../utils/Padding";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-multi-carousel/lib/styles.css";
import { alpha } from "@mui/material";

const ItemCard = (props) => {
  const key = props.id;
  const rank = props.rank;
  const name = props.name;
  const plat = props.plat;
  const desc = props.desc;
  const img = props.img;
  const theme = useTheme();
  const secondaryMain = theme.palette.secondary.main;
  const primaryLight = theme.palette.primary.light;
  const green = "rgb(30, 200, 0)";

  return (
    <div key={key}>
      <Card
        elevation={3}
        sx={{
          ":hover": {
            boxShadow: 8,
          },
        }}
      >
        <Box bgcolor={primaryLight}>
          <Flex justifyContent={"center"} alignItems={"center"}>
            <Typography
              variant="h6"
              fontSize={12}
              fontWeight={600}
              letterSpacing={2}
              color={"white"}
              sx={{ textShadow: "1px 1px 2px black" }}
            >
              {rank}
            </Typography>
          </Flex>
        </Box>
        <Box padding={2}>
          <Flex alignItems={"flex-start"}>
            <Box
              component="img"
              borderRadius={"4px"}
              sx={{
                minWidth: "100px",
                maxWidth: "180px",
                maxHeight: "180px",
              }}
              src={img}
              alt="ncc wallpaper"
            />
            <Padding padding={1} />
            <Box maxWidth={"160px"}>
              <Flex
                flexDirection={"column"}
                justifyContent={"flex-start"}
                alignItems={"flex-start"}
              >
                <Box
                  bgcolor={alpha(green, 0.1)}
                  border={"2px solid " + green}
                  padding={"1px 8px"}
                  borderRadius={"15px"}
                >
                  <Typography
                    variant="h6"
                    component={"h4"}
                    fontSize={10}
                    fontWeight={600}
                    letterSpacing={1}
                  >
                    {plat}
                  </Typography>
                </Box>
                <Padding padding={1} />
                <Typography variant="h6" fontSize={12} fontWeight={600}>
                  {name}
                </Typography>
                <Padding padding={1} />
                <Box maxWidth={"150px"}>
                  <Typography variant="h6" fontSize={12} lineHeight={1.1}>
                    {desc}
                  </Typography>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Card>
    </div>
  );
};

export default ItemCard;
