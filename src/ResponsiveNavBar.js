import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import StaffListIcon from "@material-ui/icons/People";
import StaffStatusIcon from "@material-ui/icons/Poll";
import ScheduleIcon from "@material-ui/icons/Schedule";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";
import { List, Hidden, Drawer } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  base: {
    // display: 'inline-block',
    textDecoration: "none",
    flexShrink: 0
  },
  flex: {
    textDecoration: "none",
    flexGrow: 1,
    fontSize: 17.5
  },
  toolbar: theme.mixins.toolbar,
  drawPaper: {
    width: 200,
    [theme.breakpoints.up("md")]: {
      position: "relative"
    },
    height: "100vh"
  },
  "navbar:visited": {
    textDecoration: "none"
  }
}));

function ResponsiveNavBar({ mobOpen, toggleOpenDrawer }) {
  const classes = useStyles();
  // const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    toggleOpenDrawer();
    // setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List component="nav">
        <NavLink
          to="/stafflist"
          activeStyle={{
            fontWeight: "bold",
            color: "#95df94",
            textDecoration: "none"
          }}
          className={classes.flex}
          onClick={handleDrawerToggle}
        >
          <ListItem button>
            <ListItemIcon>
              <StaffListIcon />
            </ListItemIcon>
            Staff List
          </ListItem>
        </NavLink>
        <NavLink
          to="/staffstatus"
          activeStyle={{
            fontWeight: "bold",
            color: "#95df94",
            textDecoration: "none"
          }}
          className={classes.flex}
          onClick={handleDrawerToggle}
        >
          <ListItem button>
            <ListItemIcon>
              <StaffStatusIcon />
            </ListItemIcon>
            Staff Status
          </ListItem>
        </NavLink>
        <NavLink
          to="/schedule"
          activeStyle={{
            fontWeight: "bold",
            color: "#95df94",
            textDecoration: "none"
          }}
          className={classes.flex}
          onClick={handleDrawerToggle}
        >
          <ListItem button>
            <ListItemIcon>
              <ScheduleIcon />
            </ListItemIcon>
            Schedule
          </ListItem>
        </NavLink>
      </List>
    </div>
  );

  return (
    <div className={classes.base}>
      <Hidden mdUp>
        <Drawer
          variant="temporary"
          anchor="left"
          open={mobOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}
          classes={{
            paper: classes.drawPaper
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          variant="permanent"
          open
          classes={{
            paper: classes.drawPaper
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
    </div>
  );
}

export default ResponsiveNavBar;
