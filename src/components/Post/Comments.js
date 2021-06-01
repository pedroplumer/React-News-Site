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
  },
  comment: {
      paddingLeft: 55,
      textAlign: 'left'
  }
}));

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

const Comments = ({postId}) => {
    const classes = useStyles();

    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    useEffect(()=>{
        fetchComments();
    })

    const fetchComments = () => {
        const data = Request.get(`/post/${postId}/comments`);
        setComments(commentsData);
    }

    return (
        <>
        <Paper>
              <Grid container direction="row" spacing={4} className={classes.commentButtons}>
                <Grid item xs={4}>
                  <Typography variant="h6" gutterBottom>
                      Discusssion({comments.length})
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Button variant="contained" color="primary" style={{marginLeft: '15rem',marginRight: 10 }}>
                    Comment
                  </Button>
                </Grid>
              </Grid>
              <TextField className={classes.commentField} label="Add to the discussion" variant="outlined" />
              </Paper>
        {comments.length ? ( comments.map((comment) => { 
            return <Paper>
              <Grid container direction="row" spacing={2} className={classes.avatar} >
              <Grid item xs={1}>
                <Avatar>{comment.avatar}</Avatar>
              </Grid>
              <Grid item  className={classes.userInfo}>
                <Typography variant="body2" gutterBottom>
                  {comment.userName}
                </Typography>
              </Grid>
              <Grid item className={classes.userInfo}>
                <Typography variant="body2" gutterBottom>
                  {comment.date}
                </Typography>
              </Grid>
            </Grid>
            <div className={classes.root}>
            <Typography variant="body1" className={classes.comment} gutterBottom>
              {comment.comment}
            </Typography>
            </div>
            </Paper>})) : ( <h1>Loading Post Comments....</h1>)}
        </>
    )

}

export default Comments;