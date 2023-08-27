import { Menu, MenuItem, Fade } from "@mui/material";

function Headermenu(prop) {
  const { open, handleClose } = prop;
  const openMenu = Boolean(open);
  return (
    <>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={open}
        open={openMenu}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Top Rated</MenuItem>
        <MenuItem onClick={handleClose}>Upcoming</MenuItem>
        <MenuItem onClick={handleClose}>Latest</MenuItem>
      </Menu>
    </>
  );
}

export default Headermenu;
