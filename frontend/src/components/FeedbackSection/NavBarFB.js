import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import { AppBar, Tabs, Tab, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from "react-redux";

export const NavBarFB = () =>{
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

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const member_email = userInfo.email;

    return(
        <div>
            <Router>
            <div>
                <AppBar style={nav}position="static">
                <div className={classes.flexGrow}/>
                    <Tabs  aria-label="simple tabs example">
                        <Tab className={classes.button} label="My Feedback" href={`/member/feedback/${member_email}`}/>
                        <Tab className={classes.button} label="Create Feedback" href="/member/trainers"/>
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