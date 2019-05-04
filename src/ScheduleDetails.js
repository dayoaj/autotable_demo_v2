import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Droppable } from "react-beautiful-dnd";
import StaffOnDuty from "./StaffOnDuty";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  schedule: {
    backgroundColor: "#4c63cb99",
    padding: theme.spacing(2),
    marginBottom: 8
  },
  heading: {
    margin: 10
  }
}));

function ScheduleDetails({ schedule, staffsOnDuty }) {
  const classes = useStyles();
  return (
    <div>
      <h4 className={classes.heading}>{schedule.title}</h4>
      <Droppable droppableId={schedule.id}>
        {provided => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={classes.schedule}
          >
            {staffsOnDuty.map((staff, index) => (
              <StaffOnDuty key={staff.id} staff={staff} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default ScheduleDetails;
