import React, {useState, useEffect} from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import PostHead from './PostHead';
import Tags from './Tags';
import PostButtons from './PostButtons';
import Request from '../service/Request';
import FeedDates from './FeedDates';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import TouchAppOutlinedIcon from '@material-ui/icons/TouchAppOutlined';
import PlaylistAddCheckOutlinedIcon from '@material-ui/icons/PlaylistAddCheckOutlined';
import HeadsetMicOutlinedIcon from '@material-ui/icons/HeadsetMicOutlined';
import VideoLibraryOutlinedIcon from '@material-ui/icons/VideoLibraryOutlined';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      marginBottom: '20px'
    },
    postDate:{
      textAlign: 'left'
    },
    mainFeed: {
      textAlign: 'left',
      paddingLeft: '55px',
      paddingTop: '10px'
    },
    login: {
      width: '30%',
      margin: 'auto',
      border: '1px solid',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'

    },
    loginButton: {
      border: '1px solid',
    }
  }));

  const feedPostsData = [
    {
    id: 1,
    userName: 'Smart SEO Tools',
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
   {id: 2,
       userName: 'Smart SEO Tools',
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
   {id: 3,
       userName: 'Smart SEO Tools',
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
   {id: 4,
       userName: 'Smart SEO Tools',
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
   {id: 5,
       userName: 'Smart SEO Tools',
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

const PostFeed = () => {
    const classes = useStyles();

    const [feedPosts, setFeedPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [feedDate, setFeedDate] = useState('feed');
    const [openAlert, setOpenAlert] = useState(false);
  
    useEffect(()=>{
      fetchFeedPosts();
    }, [feedDate]);
  
    const fetchFeedPosts = async () =>{
      setIsLoading(true);
      const data = Request.get(`/feedPosts/${feedDate}`);
      setFeedPosts(feedPostsData);
      setIsLoading(false);
      setOpenAlert(true);
    }

  
    const onClickFeedDate = (selectedDate) => {
      setFeedDate(selectedDate);
    }

    const handleClose = () =>{
      setOpenAlert(false)
    }


    const getFeedPosts = () => {
        if (isLoading) return <h1>LOADING...</h1>
        else return (
          feedPosts.map((feedPost) => 
            <Paper className={classes.paper}>
    
              <PostHead avatar={feedPost.avatar} userName={feedPost.userName} date={feedPost.date}/>
              
            <Link href={`/post/${feedPost.id}`}   color="inherit">
              <Typography  className={classes.mainFeed} variant="h5" >
                Online XML Sitemap Generator
              </Typography>
              </Link>
              
              <Tags postTags={feedPost.tags}/>
              
              <PostButtons reactions={feedPost.reactions} comments={feedPost.comments}/>
            </Paper>
            )
          
        )
      }

      const [light,setLight] = useState('Red');

      useEffect(()=>{
        const intervalId = setInterval(changeLight, 2000);

        return () => clearInterval(intervalId);
      },[light])

      const changeLight = () => {
        if(light === 'Red') setLight('Green');
        if(light === 'Green') setLight('Yellow');
        if(light === 'Yellow') setLight('Red');
      }

    return (
      <div className={classes.login}>
        <p>{light}</p>
      </div>
      // <Grid container spacing={2}>
      //   <Grid item xs={3}>
      //     <Paper className={classes.paper}>
      //       <Grid container spacing={2} direction="column" justify="flex-start" alignItems="flex-start">
      //         <Grid item>
      //           <Button startIcon={<HomeOutlinedIcon />}>Home</Button>
      //         </Grid>
      //         <Grid item>
      //           <Button startIcon={<TouchAppOutlinedIcon />}>Sing In/Up</Button>
      //         </Grid>
      //         <Grid item>
      //           <Button startIcon={<PlaylistAddCheckOutlinedIcon />}>Listings</Button>
      //         </Grid>
      //         <Grid item>
      //           <Button startIcon={<HeadsetMicOutlinedIcon />}>Podcasts</Button>
      //         </Grid>
      //         <Grid item>
      //           <Button startIcon={<VideoLibraryOutlinedIcon />}>Videos</Button>
      //         </Grid>
      //         <Grid item>
      //           <Button startIcon={<LocalOfferOutlinedIcon />}>Tags</Button>
      //         </Grid>
      //         <Grid item>
      //           <Button >More...</Button>
      //         </Grid>
      //       </Grid>
      //     </Paper>
      //   </Grid>

      //   <Grid item xs={6} >
      //     <Snackbar open={openAlert} onClose={handleClose} autoHideDuration={2000} message={`Successfully got the ${feedDate} feed!`}  >
      //       {/* <Alert  severity="success" >
      //         Successfully got the {feedDate} feed!
      //       </Alert> */}
      //     </Snackbar>
      //     <FeedDates setFeedDate={onClickFeedDate}/>
      //     {getFeedPosts()}
      //   </Grid>
        
      //   <Grid item xs={3}>
      //     <Paper className={classes.paper}>xs=3</Paper>
      //   </Grid>
      // </Grid>
    )

}

export default PostFeed;