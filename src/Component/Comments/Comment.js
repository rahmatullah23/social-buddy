import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';

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
    backgroundColor: theme.palette.background.paper,
  },
  alignItemsAndJustifyContent: {
    marginLeft: 450,
    position: 'absolute'
 },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const {commentId}=useParams();
  const [comments,setComments] = useState([]);
  useEffect(() =>{
   fetch (`http://jsonplaceholder.typicode.com/comments?postId=${commentId}`)
  .then (res => res.json())
  .then (data => setComments(data))    
  },[commentId])


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="comments" {...a11yProps(0)} />
        </Tabs>
      </AppBar>
      <TabPanel  value={value} index={0}>
      {
         comments.map(comment => 
            <Typography  variant="subtitle1"  align="center" color="textPrimary" gutterBottom>
                <h5>Post Id :{comment.postId}</h5> 
                <p><Avatar 
                className={classes.alignItemsAndJustifyContent} 
                src="https://randomuser.me/api/portraits/thumb/men/14.jpg"  />
                <strong> Name</strong> : {comment.name} <strong> 
                        Email</strong> : {comment.email}</p>
                                        {comment.body}
            </Typography>            
                    )
      }
      </TabPanel>
    </div>
  );
}
