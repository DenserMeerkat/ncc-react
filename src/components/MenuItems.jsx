import menu from "../assets/resource/menu";
import { Box, Button, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MMenuItem = (props) => {
  const name = props.name;
  const href = props.href;
  const variant = props.variant;
  const color = props.color;
  const activePage = props.activePage;
  const navigate = useNavigate();
  return (
    <Button
      variant={activePage == name ? "outlined" : variant}
      color="secondary"
      sx={{ textTransform: "unset" }}
      size="small"
      fullWidth
      onClick={() => {
        navigate(href);
      }}
    >
      <Link to={href} color={color} underline="none">
        {name}
      </Link>
    </Button>
  );
};

const MenuItems = (props) => {
  const activePage = props.activePage;
  const direction = props.direction;
  const width = props.width;
  const items = menu.map((item) => {
    return (
      <MMenuItem
        key={item.id}
        name={item.name}
        href={item.href}
        variant={item.variant}
        color={item.color}
        activePage={activePage}
      />
    );
  });
  return (
    <Box
      sx={{
        width: width,
        display: "inline-flex",
        flexDirection: direction,
        marginLeft: 2,
        marginRight: 2,
        gap: 1,
        alignItems: "center",
      }}
    >
      {items}
    </Box>
  );
};

export default MenuItems;
