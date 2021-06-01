import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

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


const Tags = ({postTags}) => {
    const classes = useStyles();

    return(
        <Grid container direction="row" spacing={2} className={classes.mainFeed}>
            {postTags.map((tag) =>
                <Grid item>
                    <Link href="#">
                        <Typography  variant="body2" value>{tag}</Typography>
                    </Link>
                </Grid>
            )}
            </Grid>

    )
}

export default Tags;