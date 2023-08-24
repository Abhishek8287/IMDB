import {
  AppBar,
  Toolbar,
  Box,
  styled,
  Typography,
  InputBase,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";

import { Menu } from "@mui/icons-material";
import { imgurl } from "../assets/Constants";
import "../assets/Styles/Header.css";

const StyledToolbar = styled(Toolbar)`
  background: black;
  min-height: 56px !important;
`;

const Logo = styled("img")({
  width: 64,
  paddingLeft: 50,
});

const Header = () => {
  return (
    <>
      <AppBar>
        <StyledToolbar className="main">
          <Logo src={imgurl} alt="nothing" />
          <Box className="display">
            <Menu />
            <Typography className="typo">Menu</Typography>
          </Box>
          <InputBase className="input"></InputBase>

          <Typography className="typo">
            IMDB<Box component="span">Pro</Box>
          </Typography>
          <Box className="display">
            <BookmarkAddIcon />
            <Typography className="typo">Watchlist</Typography>
          </Box>
          <Typography>Sign IN</Typography>

          <Box className="display">
            <Typography>en</Typography>
            <ExpandMoreIcon />
          </Box>
        </StyledToolbar>
      </AppBar>
    </>
  );
};

export default Header;
