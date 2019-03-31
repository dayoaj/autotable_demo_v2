import React, {useState} from "react";
import { makeStyles } from "@material-ui/styles";
import {
  AppBar,
  IconButton,
  Menu,
  Toolbar,
  Typography
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  flex: {
    textDecoration: "none",
    flexGrow: 1
  },
  appBar: {
    marginLeft: 200,
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${200}px)`,
      marginLeft: 200
    }
  },
  navIconHide: {
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  "navbar:visited": {
    textDecoration: "none"
  }
}));

function TopNavBar({toggleOpenDrawer}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    toggleOpenDrawer(!mobileOpen);
    setMobileOpen(!mobileOpen);
  };

 const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
    const open = Boolean(anchorEl);

    return (
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerToggle}
            className={classes.navIconHide}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="title"
            color="inherit"
            className={classes.flex}
            component={Link}
            to="/"
          >
            List Demo
          </Typography>
          <Button color="inherit" component={Link} to="/upload">
            Upload
          </Button>
          <div>
            <IconButton
              aria-owns={open ? "menu-appbar" : null}
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={open}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
              <MenuItem onClick={handleMenuClose}>My account</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    );
}

export default TopNavBar;
