import React from 'react';
import {useState, useEffect} from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Request from '../service/Request';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(() => ({
    header: {
      backgroundColor: 'white',
      textAlign: 'left',
      paddingLeft: 10,
      marginBottom: 15
    },
    search: {
      height: 15,
      width: 380,
      paddingTop: 15
    },
    accountButtons: {
      paddingTop: 25,
      paddingLeft: 25
    }
  }));


  const feedPostsData = [
    {userName: 'Smart SEO Tools',
     avatar: 'P',
     date: 'May 27',
     tags: [
       '#showdev',
       '#seo',
       '#webdev',
       '#html'
     ],
     reactions: 36,
     comments: 7
   },
   {userName: 'Smart SEO Tools',
   avatar: 'H',
   date: 'May 27',
   tags: [
     '#showdev',
     '#seo',
     '#webdev',
     '#html'
   ],
   reactions: 36,
   comments: 7
   },
   {userName: 'Smart SEO Tools',
   avatar: 'H',
   date: 'May 27',
   tags: [
     '#showdev',
     '#seo',
     '#webdev',
     '#html'
   ],
   reactions: 36,
   comments: 7
   },
   {userName: 'Smart SEO Tools',
   avatar: 'H',
   date: 'May 27',
   tags: [
     '#showdev',
     '#seo',
     '#webdev',
     '#html'
   ],
   reactions: 36,
   comments: 7
   },
   {userName: 'Smart SEO Tools',
   avatar: 'H',
   date: 'May 27',
   tags: [
     '#showdev',
     '#seo',
     '#webdev',
     '#html'
   ],
   reactions: 36,
   comments: 7
   }
   ];

const Header = () => {
    const classes = useStyles();

    const [searchString, setSearchString] = useState();

    const handleChange = (event) => {
        setSearchString(event.target.value);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            const data = Request.get(`/feedPosts/${searchString}`);
        }
    }



    return (
        <Paper>
            <Grid container direction='row' className={classes.header}>
                <Grid item xs={1}>
                  <Link href="/" color="inherit">  <h1>DEV</h1> </Link>
                </Grid>
                <Grid item xs={8}>
                    <TextField onKeyDown={(event) => handleKeyDown(event)} 
                    onChange={(event) => handleChange(event)} className={classes.search}  
                    label="Search field" type="search" variant="outlined" />
                </Grid>
                <Grid item className={classes.accountButtons}>
                    <Button color="primary">Login</Button>
                    <Button variant="contained" color="primary" >Create Account</Button>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Header;