import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Draggable } from "react-beautiful-dnd";

const useStyles = makeStyles(theme => ({
  row: {
    backgroundColor: "white",
    padding: theme.spacing.unit,
    border: "1px solid lightgrey",
    borderRadius: 2,
    marginBottom: 8,
    "&:last-child": {
      marginBottom: 0
    }
  }
}));

function StaffOnDuty({ staff, index }) {
  const classes = useStyles();

  return (
    <Draggable draggableId={staff.id} index={index}>
      {(provided, snapshot) => (
        <div
          className={classes.row}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isdragging={snapshot.isDragging ? 1 : 0}
        >
          {staff.Name}
        </div>
      )}
    </Draggable>
  );
}

export default StaffOnDuty;
