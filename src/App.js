import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

import Home from './Component/Home/Home';
import Comment from './Component/Comments/Comment';
import NoMatch from './Component/NoMatch/NoMatch';
import Post from './Component/Post/Post';
function App() {
  return (
   
 
 <Router>
     <Switch>
       <Route path="/home">
         <Home/>
       </Route>
       <Route path="/post">
         <Post></Post>
       </Route>
       <Route path="/comment/:commentId">
         <Comment></Comment>
       </Route>
       <Route exact path="/">
         <Home/>
       </Route>
       <Route path="*">
         <NoMatch></NoMatch>
       </Route>
     </Switch>
   </Router>
  
  
  );
}

export default App;
