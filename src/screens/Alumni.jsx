import CustomAppBar from "../components/AppBar/AppBar";
import Footer from "../components/Footer/Footer";
import ItemCard from "../components/Cards/ItemCard";
import Title from "../components/Title";
import Batch from "../components/Batch";
import { retired } from "../assets/resource/anos";
import {
  Container,
  Box,
  Paper,
  Card,
  useMediaQuery,
  useTheme,
  Typography,
} from "@mui/material";
import Flex from "../utils/Flex";
import Padding from "../utils/Padding";

function Alumni() {
  const theme = useTheme();
  const secondaryMain = theme.palette.secondary.main;

  return (
    <Box>
      <CustomAppBar activePage={"Alumni"}></CustomAppBar>
      <Box sx={{ position: "relative" }}>
        <Box
          backgroundColor={secondaryMain}
          sx={{
            aspectRatio: 1,
            width: "100%",
            height: "20vh",
          }}
        />
      </Box>
      <Container
        maxWidth="xl"
        top="39vw"
        sx={{ position: "relative", marginTop: -4, marginBottom: -4 }}
      >
        <Paper elevation={4}>
          <Box paddingTop={4}>
            <Container maxWidth="lg">
              <Title title={"Associate NCC Officers"} />
              <Padding paddingTop={4} />
              <Flex
                alignItems={"center"}
                flexWrap={"wrap"}
                justifyContent={"center"}
                gap={4}
              >
                <RetiredItemCards />
              </Flex>
              <Padding padding={4} />
              <Title title={"Batches"} />
              <Batch />
              <Padding padding={4} />
            </Container>
          </Box>
        </Paper>
      </Container>
      <Footer />
    </Box>
  );
}

const RetiredItemCards = () => {
  const items = retired.map((item) => {
    return (
      <ItemCard
        key={item.id}
        name={item.name}
        rank={item.rank}
        img={item.img}
        desc={item.desc}
        plat={item.plat}
      />
    );
  });
  return (
    <Flex flexWrap={"wrap"} justifyContent={"center"} gap={4}>
      {items}
    </Flex>
  );
};

export default Alumni;
