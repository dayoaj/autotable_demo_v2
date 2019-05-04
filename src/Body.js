import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {Switch, Route } from "react-router-dom";
import StaffListUpload from "./StaffListUpload";
import StaffList from "./StaffList";
import StaffStatus from "./StaffStatus";
import Schedule from "./Schedule";
import TopNavBar from "./TopNavBar";

const useStyles = makeStyles(theme => ({
  content: {
    display: "flex",
    flexGrow: 1,
    padding: theme.spacing(4),
    justifyContent: "center"
  },
  toolbar: theme.mixins.toolbar
}));

function Body({ data, toggleOpenDrawer }) {
  const classes = useStyles();

  return (
      <div className={classes.content}>
        <TopNavBar toggleOpenDrawer={toggleOpenDrawer} />
        <main>
          <div className={classes.toolbar} />
          <Switch>
            <Route exact path="/" render={props => <StaffList data={data} />} />
            <Route
              exact
              path="/stafflist"
              render={props => <StaffList data={data} />}
            />
            <Route exact path="/upload" component={StaffListUpload} />
            <Route path="/staffstatus" component={StaffStatus} />
            <Route path="/schedule" component={Schedule} />
          </Switch>
        </main>
      </div>
    
  );
}

Body.propTypes = {
  data: PropTypes.array.isRequired
};

export default Body;
