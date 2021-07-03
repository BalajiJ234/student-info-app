import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  pos: {
    marginBottom: 12,
  },
});

const Student = (props) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} lg={3}>
      <Card className={classes.root} variant='outlined'>
        <CardContent>
          <Typography
            variant='h5'
            component='h2'
            style={{ textAlign: "center" }}>
            {props.detail.name}
          </Typography>
          <Typography className={classes.pos} color='textSecondary'>
            <b>Year of Passing:</b> {props.detail.Batch}
          </Typography>
          <Typography variant='body2' component='p'>
            <b>Stream:</b> {props.detail.Department}
          </Typography>
          <Typography variant='body1' component='p'>
            <b>Age:</b> {props.detail.age}
          </Typography>
          <Typography variant='body2' component='p'>
            <b>Percentage:</b> {props.detail.Percentage}
          </Typography>
        </CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          <Button size='small'>Delete</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Student;
