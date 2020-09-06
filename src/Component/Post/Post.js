import React from 'react';
import  { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const [posts,setPosts] = useState([]);
  useEffect(() =>{
  fetch ('http://jsonplaceholder.typicode.com/posts')
  .then (res => res.json())
  .then (data => setPosts(data))    
  },[])
  
  const history = useHistory();
  const handleClick = (commentId) =>{
      const url = `/comment/${commentId}`;
      history.push(url);
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
            <Typography variant="h3"  align="center" color="textPrimary" gutterBottom>
                Your important Posts are here!
            </Typography>
        </Grid> 
          {
           posts.map(user => <Grid item xs={12}>
            <Paper className={classes.paper}>
                <h3> Title : {user.title}</h3>  
                <p>{user.body}</p>
                <Button variant="outlined" size="small" color="primary" 
                        onClick={()=> handleClick(user.id)}
                        >read more
                </Button>       
            </Paper>
        </Grid>)
            }      
      </Grid>
    </div>
  );
}
