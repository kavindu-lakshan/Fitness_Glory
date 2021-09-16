import React, {useState,useEffect} from 'react';
import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import {useDispatch} from 'react-redux';


import { getPrePosts } from '../../actions/preposts';
//import gym from './images/gym.png';
import PrePosts from './PrePosts/PrePosts';
import PreForm from './PreForm/PreForm';
import useStyles from './styles';
import './backstyles.css';
import './backstyles.css';
 

const App = () => {
  const [currentId, setCurrentId] = useState(0);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPrePosts());
    }, [currentId,dispatch]);

    return (



      
        <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center" color="black">Pre-defined Workout Schedules</Typography>
        <br />
        <br />
        {/* <img className={classes.image} src={gym} alt="icon" height="60" /> */}
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <PrePosts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <PreForm currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
      </Container>
    );
}
export default App;