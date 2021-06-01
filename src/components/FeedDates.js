import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
    buttonGroup: {
      marginTop: '10px',
      paddingLeft: '330px'
    }
  }));


const FeedDates = ({setFeedDate}) => {
    const classes = useStyles();

    return (
        <Grid container direction="row" justify="flex-end" >
        <Grid item xs={1}>
          <h3>POSTS</h3>
        </Grid>
        <Grid item xs={11} alignItems="flex-end">
        <ButtonGroup className={classes.buttonGroup} variant="text"  aria-label="text primary button group">
          <Button onClick={()=>setFeedDate('Feed')}>Feed</Button>
          <Button onClick={()=>setFeedDate('Week')}>Week</Button>
          <Button onClick={()=>setFeedDate('Month')}>Month</Button>
          <Button onClick={()=>setFeedDate('Year')}>Year</Button>
        </ButtonGroup>
        </Grid>
      </Grid>
    )
}

export default FeedDates;