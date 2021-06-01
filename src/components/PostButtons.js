import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
    },
    mainFeed: {
      textAlign: 'left',
      paddingLeft: '55px',
      paddingTop: '10px'
    }
  }));

const PostButtons = ({reactions, comments}) => {

    const classes = useStyles();

    return(
        <Grid container direction="row"  className={classes.mainFeed}>
        <Grid item xs={10}>
          <Button startIcon={<FavoriteIcon />}>{reactions} reactions</Button>
          <Button startIcon={<ChatBubbleOutlineIcon />}>{comments} Comments</Button>
        </Grid>
        <Grid item>
          <Button variant="contained">Save</Button>
        </Grid>
      </Grid>
    )

}

export default PostButtons;