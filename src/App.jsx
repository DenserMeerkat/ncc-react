import "./App.css";
import Home from "./screens/Home";
import About from "./screens/About";
import Events from "./screens/Events";
import Alumni from "./screens/Alumni";
import Gallery from "./screens/Gallery";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Routes, Route } from "react-router-dom";

function App() {
  const theme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#42a5f5",
      },
      secondary: {
        main: "#ef5350",
      },
    },
    shape: {
      borderRadius: 4,
    },
    props: {
      MuiAppBar: {
        color: "secondary",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
