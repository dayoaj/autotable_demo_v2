import React, { useState } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StaffListUpload from "./StaffListUpload";
import StaffList from "./StaffList";
import StaffStatus from "./StaffStatus";
import Schedule from "./Schedule";
import TopNavBar from "./TopNavBar";

const styles = theme => ({
  content: {
    display: "flex",
    flexGrow: 1,
    padding: theme.spacing.unit * 4,
    justifyContent: "center"
  },
  toolbar: theme.mixins.toolbar
});

function Body({ classes, data }) {
  return (
    <Router>
      <div className={classes.content}>
        <TopNavBar toggleOpenDrawer={this.props.toggleOpenDrawer} />
        <main className={classes.centercontent}>
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
    </Router>
  );
}

Body.propTypes = {
  classes: PropTypes.object.isRequired,
  toggleOpenDrawer: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired
};

export default withStyles(styles)(Body);
