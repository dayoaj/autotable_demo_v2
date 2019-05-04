import React, { useState } from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import initialData from "./initial-data";
import ScheduleDetails from "./ScheduleDetails";
import Divider from "@material-ui/core/Divider";
import { DragDropContext } from "react-beautiful-dnd";

const useStyles = makeStyles(theme => ({
  pad: {
    margin: 20
  },

  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "#edeaea",
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
    margin: theme.spacing(1)
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  }
}));

function Schedule() {
  const classes = useStyles();
  const [staffs] = useState(initialData.staffs);
  const [schedules, setSchedules] = useState(initialData.schedules);
  const [scheduleOrder] = useState(initialData.scheduleOrder);

  const onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const home = schedules[source.droppableId];
    const foreign = schedules[destination.droppableId];

    if (home === foreign) {
      const newStaffIds = Array.from(home.staffIds);
      newStaffIds.splice(source.index, 1);
      newStaffIds.splice(destination.index, 0, draggableId);

      const newHome = {
        ...home,
        staffIds: newStaffIds
      };

      setSchedules({
        ...schedules,
        [newHome.id]: newHome
      });
      return;
    }

    // moving from one list to another
    const homeStaffIds = Array.from(home.staffIds);
    const foreignStaffIds = Array.from(foreign.staffIds);

    homeStaffIds.splice(source.index, 1);
    const fromForeign = foreignStaffIds.splice(
      destination.index,
      1,
      draggableId
    );

    homeStaffIds.splice(source.index, 0, fromForeign);

    const newHome = {
      ...home,
      staffIds: homeStaffIds
    };

    const newForeign = {
      ...foreign,
      staffIds: foreignStaffIds
    };

    setSchedules({
      ...schedules,
      [newHome.id]: newHome,
      [newForeign.id]: newForeign
    });
  };

  const scheduleLength = scheduleOrder.length;

  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <h2>Schedule List</h2>
          <Divider className={classes.pad} />
          <DragDropContext onDragEnd={onDragEnd}>
            {scheduleOrder.map((scheduleId, index) => {
              const schedule = schedules[scheduleId];
              const staffsOnDuty = schedule.staffIds.map(staffId => staffs[staffId]);

              return (
                <div key={scheduleId}>
                  <ScheduleDetails schedule={schedule} staffsOnDuty={staffsOnDuty} />
                  {index !== scheduleLength - 1 ? (
                    <Divider className={classes.pad} />
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </DragDropContext>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Schedule;
