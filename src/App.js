
import './App.css';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Header from './components/Header';
import PostFeed from './components/PostFeed';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Post from "./components/Post/Post";




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
  }
}));

const App = () => {


  const classes = useStyles();
  return (
    <div className="App">
      <Router>
        <Header/>
          <Switch>
          <Route path="/" exact component={PostFeed} />
          <Route path="/post/:id" exact component={Post}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
