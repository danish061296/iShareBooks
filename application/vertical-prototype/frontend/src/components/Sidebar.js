import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Books from '../pages/Books';
import axios from 'axios';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 350,
    position:"absolute",
    margin:5,
    
    
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [menuName, setmenuName]= React.useState(''); 
  const [hasOpened, setHasOpened] = React.useState(false);
  const [hasLoaded, setHasLoaded] = React.useState(false);
  const [paidBooks, setPaidBooks] = React.useState([]);
 

  const handleChange =async(e,value)=>{ 
     console.log('This is coming From Explore ' + value);
    //  var searchName ='';
    
     if(value==0){ 
        // searchName='Computer'
        setmenuName('Computer')
     }

     console.log('Menu Name Set to: '+ menuName)
    //  const searchData = {
    //   searchField: menuName,
    // };
     

    const searchData = {
      searchField: menuName,
      searchType: 'Department',
      searchTable: 'paidbooks',
    };
  
      
     const response = await   axios.post(`http://${window.location.hostname}:3001/search`, searchData)
        console.log(response);
      
        if (!response.data.msg) {
          setPaidBooks(response.data);
          
         
        }
        else {
          setPaidBooks(response.data.results);
          console.log(response.data.results); 
          
        }
     
    
  }



  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="fullWidth"
        value={value}        
        onChange={handleChange}
        className={classes.tabs} >
        <Tab label="All Books" {...a11yProps(0)} />
        <Tab label="Computer" {...a11yProps(1)} />
        <Tab label="Economics" {...a11yProps(2)} />
        <Tab label="Law" {...a11yProps(3)} />
        <Tab label="Biology" {...a11yProps(4)} />
        <Tab label="Physics" {...a11yProps(5)} />
        <Tab label="History" {...a11yProps(6)} />
      </Tabs>
       <TabPanel value={value} index={0}>
      <Books paidBooks={paidBooks}/>
      </TabPanel> 
       <TabPanel value={value} index={1}>
        <Books/>
      </TabPanel>
      <TabPanel value={value} index={2}>
         <Books/>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Books/>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <Books/>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <Books/>
      </TabPanel>
      <TabPanel value={value} index={6}>
      <Books/>
      </TabPanel>
    </div>
  );
}
