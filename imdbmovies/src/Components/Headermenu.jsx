import React from "react";
import { Menu, MenuItem } from "@mui/material";

const Headermenu = (prop) => {
  const { open, handleClose } = prop;
  const openMenu = Boolean(open);
  return (
    <>
      <Menu
        id="basic-menu"
        anchorEl={open}
        open={openMenu}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default Headermenu;
