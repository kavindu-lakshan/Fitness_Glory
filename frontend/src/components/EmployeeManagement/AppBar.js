import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { AllCleaners } from './ViewCleaners';
import ScrollToTop from "react-scroll-to-top";
import '../../Screens/ProfileScreen/AllTrainers.css';
import './Background.css';
import AllTrainers from '../../Screens/ProfileScreen/AllTrainers';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}>
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'theme.palette.background.paper',
    width: 500,
    marginLeft: '-50px'
  },
}));

export default function CenteredTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <ScrollToTop smooth style = {scrollStyles} />
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="CLEANER INFORMATION" {...a11yProps(0)} />
          <Tab label="TRAINER INFORMATION" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews 
        style = {ListStyles}
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <div className="back">
          <TabPanel value={value} index={0} >
            <div>
              <div>
                <AllCleaners/>
              </div>
            </div>
          </TabPanel>
        </div>
        <div className="">
          <TabPanel value={value} index={1} >
            <div>
              <AllTrainers/>
            </div>
          </TabPanel>
        </div>
      </SwipeableViews>
    </div>
  );
}

const ListStyles = {
  width: '1340px',
  marginTop: '20px',
  marginLeft: '-420px'
}

const scrollStyles = {
  color: 'black',
  backgroundColor: 'grey'
}