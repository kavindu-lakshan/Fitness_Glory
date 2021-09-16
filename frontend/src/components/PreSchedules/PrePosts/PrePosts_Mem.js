import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import PrePost_Mem from './PrePost/PrePost_Mem';
import useStyles from './styles';


const PrePosts_Mem = ({setCurrentId}) => {


    const preposts = useSelector((state) => state.preposts);
    const classes = useStyles();

    console.log(preposts);
    return (
        !preposts?.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
              {preposts.map((prepost) => (
                <Grid key={prepost._id} item xs={12} sm={6} md={6}>
                  <PrePost_Mem prepost={prepost} setCurrentId={setCurrentId} />
                  
                </Grid>
              ))}
            </Grid>
        )
    );
}

export default PrePosts_Mem;