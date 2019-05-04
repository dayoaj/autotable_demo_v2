import React, { useState } from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  shift: {
    padding: theme.spacing.unit * 3,
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      minWidth: 300
    },
    [theme.breakpoints.up("sm")]: {
      minWidth: 540
    },
    [theme.breakpoints.up("lg")]: {
      minWidth: 900
    }
  },
  button: {
    margin: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  }
}));

function StaffStatus() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, value) => {
    setValue({ value });
  };

  return (
    <Grid
      container
      spacing={16}
      alignItems="center"
      direction="column"
      justify="center"
      className={classes.shift}
    >
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Available" />
            <Tab label="Unavailable" />
          </Tabs>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default StaffStatus;
