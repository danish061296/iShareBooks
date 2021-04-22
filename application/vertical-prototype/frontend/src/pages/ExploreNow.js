import React from 'react';
import './Explore.css';

import Buy from '../pages/BuyBooks';
import Free from '../pages/FreeBooks';
import Trade from '../pages/TradeBooks';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#22635F',
    // backgroundColor: theme.palette.background.paper,
  },
}));
export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar className={classes.root} position="sticky">
        <Tabs className="app" value={value} onChange={handleChange}>
          <Tab label="Buy Books" {...a11yProps(0)} />
          <Tab label="Trade Books" {...a11yProps(1)} />
          <Tab label="Free Booke" {...a11yProps(2)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <Buy />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Trade />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Free />
      </TabPanel>
    </div>
  );
}
