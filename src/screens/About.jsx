import { current } from "../assets/resource/anos";
import CustomAppBar from "../components/AppBar/AppBar";
import Footer from "../components/Footer/Footer";
import ItemCard from "../components/Cards/ItemCard";
import Title from "../components/Title";
import Batch from "../components/Batch";
import Flex from "../utils/Flex";
import Padding from "../utils/Padding";
import {
  Container,
  Box,
  Paper,
  useMediaQuery,
  useTheme,
  Typography,
} from "@mui/material";

function About() {
  const showImage = useMediaQuery("(min-width: 600px)");
  const theme = useTheme();
  const secondaryMain = theme.palette.secondary.main;
  return (
    <Box>
      <CustomAppBar activePage={"About"}></CustomAppBar>
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
                <CurrentItemCards />
              </Flex>
            </Container>
            <Padding padding={2} />
            <Container maxWidth="lg"></Container>
          </Box>
        </Paper>
      </Container>
      <Footer />
    </Box>
  );
}

const CurrentItemCards = () => {
  const items = current.map((item) => {
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

export default About;
