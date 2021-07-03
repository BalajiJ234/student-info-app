import React from "react";
import Student from "./Student";
import StudentFilter from "./StudentFilter";
import { Grid, Paper, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin: 9,
  },
});

const StudentList = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div>
        <Typography variant='h3' style={{ textAlign: "center" }}>
          Student Details
        </Typography>
        <StudentFilter />
      </div>
      <Grid className={classes.root} container justify='center' spacing={3}>
        {props.students.map((student) => (
          <Student key={student.id} detail={student} />
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default StudentList;
