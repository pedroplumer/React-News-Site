import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
    },
    postDate:{
      textAlign: 'left'
    }
  }));

const PostHead = ({avatar, userName, date}) => {

    const classes = useStyles();

    return (
        <Grid container direction="row" spacing={2} >
        <Grid item>
          <Avatar>{avatar}</Avatar>
        </Grid>
          <Grid item>
          <Typography  variant="body1">
            {userName}
          </Typography>
          <Typography className={classes.postDate} variant="body2" >
            {date}
          </Typography>
          </Grid>
        </Grid>
    )
}

export default PostHead;