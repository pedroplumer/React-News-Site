import React, {useState, useEffect} from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { useHistory, useParams } from 'react-router-dom'
import Request from '../../service/Request';
import Typography from '@material-ui/core/Typography';
import Tags from '../Tags';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Comments from './Comments'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 600,
    padding: 50,
    paddingTop: 10
  },
  imag: {
    maxWidth: '100%',
    maxHeight: '100%'
  },
  avatar: {
    paddingLeft: '55px'
  },
  userInfo:{
    marginTop: '10px'
  },
  postText: {
    marginTop: 25,
    marginLeft: 25,
    marginRight: 25
  },
  commentField: {
    marginTop: 15,
    marginBottom: 40,
    width: '90%'
  },
  commentButtons:{
    marginTop: 10,
  }
}));

const tags =  [
  '#showdev',
  '#seo',
  '#webdev',
  '#html'
]

const commentsData = [{
  avatar: 'L',
  userName: 'Luis Henrique',
  date: '27/01/2020',
  comment: "body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."
},
{
  avatar: 'L',
  userName: 'Luis Henrique',
  date: '27/01/2020',
  comment: "body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."
},{
  avatar: 'L',
  userName: 'Luis Henrique',
  date: '27/01/2020',
  comment: "body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."
}]

const Post = () => {
  const classes = useStyles();

    const [post, setPost] = useState();
    const postId = useParams().id;

    useEffect (() => { 
      fetchPost();
    },[])

    const fetchPost = () => {
      const postData = Request.get(`/post/${postId}`);
    }

    return (
        <Grid container spacing={2}>
        <Grid item xs={2}>
          <Paper >xs=3</Paper>
        </Grid>

        <Grid item xs={7}>
            <Paper >
              <img className={classes.imag} src="https://res.cloudinary.com/practicaldev/image/fetch/s--6cLtu9Ss--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3ntcrli4oaki92ue9zxn.png"></img>
              <Typography variant="h3" gutterBottom>
                Introduction to Promises in JavaScript.
              </Typography>
              <Tags postTags={tags}/>
              <Grid container direction="row" spacing={2} className={classes.avatar} >
                <Grid item xs={1}>
                  <Avatar>A</Avatar>
                </Grid>
                <Grid item  className={classes.userInfo}>
                  <Typography variant="body2" gutterBottom>
                    Abhishek Jain
                  </Typography>
                </Grid>
                <Grid item className={classes.userInfo}>
                  <Typography variant="body2" gutterBottom>
                    25 May
                  </Typography>
                </Grid>
              </Grid>
              <Typography className={classes.postText} variant="body1" gutterBottom>
                A promise in javascript is just like a promise we make in our lives. It refers to an event that will occur in the future.
                Promises in javascript are used to handle asynchronous operations. Promises have three possible states -

                Pending (Initial State)
                Fulfilled (Successful)
                Rejected (Failed)
                When we make a promise, its state will be pending till either it is fulfilled or rejected. If fulfilled, its value will be the value it resolves with, and if it encounters any error, its value will be the value it rejects with (the error object).

                For example, when we make API requests to the server, it immediately returns a promise with pending state. If the API call is successful, the state of promise changes from pending to fulfilled, and if the API request fails, then its state changes from pending to rejected.
              </Typography>
              <Divider/>
            </Paper>
            <Comments postId={postId}/>
        </Grid>
        
        <Grid item xs={3}>
          <Paper >xs=3</Paper>
        </Grid>
      </Grid>
    )
}

export default Post;