import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import { AppBar, Tabs, Tab, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const NavBarT = () =>{
    const useStyles = makeStyles({
        flexGrow: {
          flex: '1',
        },
        button: {
          backgroundColor: 'transparent',
          color: 'white',
          '&:hover': {
            backgroundColor: 'transparent',
            color: '#04938b',
        },
      }})

    const classes = useStyles()

    return(
        <div>
            <Router>
            <div>
                <AppBar style={nav}position="static">
                <div className={classes.flexGrow}/>
                    <Tabs  aria-label="simple tabs example">
                        <Tab className={classes.button} label="My Answers" href="/employee/myAnswers/:username"/>
                        <Tab className={classes.button} label="Other Questions" href="/employee/otherQ"/>
                    </Tabs>
                </AppBar>
            </div>
            </Router>
        </div>
    )
}

const nav ={
    backgroundColor: 'transparent', 
    border: '2px solid #04938b',
    color:'white'
}