import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar, Typography, IconButton, Tooltip } from "@material-ui/core";
import { lighten } from "@material-ui/core/styles/colorManipulator";
import DeleteIcon from "@material-ui/icons/Delete";
import AddStaffIcon from "@material-ui/icons/PersonAdd";
import EditIcon from "@material-ui/icons/Edit";
import AddNewUser from "./AddNewUser";

const useStyles = makeStyles(theme => ({
  root: {
    paddingRight: theme.spacing.unit
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85)
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark
        },
  spacer: {
    flex: "1 1 100%"
  },
  actions: {
    color: theme.palette.text.secondary,
    width: 120,
    alignItems: "center"
  },
  title: {
    flex: "0 0 auto"
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
}));

function EnhancedToolbar({ numSelected, isClicked }) {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickAddNewUser = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <div>
      <Toolbar
        className={clsx(classes.root, {
          [classes.highlight]: isClicked || numSelected > 0
        })}
      >
        <div className={classes.title}>
          {isClicked ? (
            ""
          ) : numSelected > 0 ? (
            <Typography color="inherit" variant="subheading">
              {numSelected} selected
            </Typography>
          ) : (
            <Typography variant="h6" id="tableTitle">
              Name List
            </Typography>
          )}
        </div>
        <div className={classes.spacer} />
        <div className={classes.actions}>
          {isClicked ? (
            <div>
              <Tooltip title="Edit">
                <IconButton aria-label="Edit">
                  <EditIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Delete">
                <IconButton aria-label="Delete">
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </div>
          ) : numSelected > 0 ? (
            <Tooltip title="Delete">
              <IconButton aria-label="Delete">
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title="Add New Staff">
              <IconButton
                aria-label="Add new Staff"
                onClick={handleClickAddNewUser}
              >
                <AddStaffIcon />
              </IconButton>
            </Tooltip>
          )}
        </div>
      </Toolbar>
      <AddNewUser openDialog={openDialog} handleClose={handleClose} />
    </div>
  );
}

export default EnhancedToolbar;
