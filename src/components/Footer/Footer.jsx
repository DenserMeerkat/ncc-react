import { Container, Box, Paper, useMediaQuery, useTheme } from "@mui/material";
import { alpha } from "@mui/material";

function Footer() {
  const showImage = useMediaQuery("(min-width: 600px)");
  const theme = useTheme();
  const secondaryMain = theme.palette.secondary.main;
  const secondaryLight = theme.palette.secondary.light;
  return (
    <Box
      backgroundColor={secondaryLight}
      sx={{
        width: "100%",
        height: "24vh",
      }}
    ></Box>
  );
}

export default Footer;
