import './App.css';
import React from 'react';
import DoctorList from './components/DoctorList.js'
import NewComplain from './components/NewComplain';
import AboutUs from './components/AboutUs';
import MyProfile from './components/MyProfile';
import Login from './components/Login';
import SignIn from './components/SignIn'
import Main from './components/Main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Answer from './components/Answer';


function App() {
  return (
    <div className="App">

<Router>
    <Switch>
    <Route exact path="/" component={Main}>
</Route>
<Route path="/complain" component={NewComplain}>
</Route>
<Route path="/about" component={AboutUs}>
</Route>
<Route path="/profile" component={MyProfile}>
</Route>
<Route path="/doctor" component={DoctorList}>
</Route>
<Route path="/login" component={Login}>
</Route>
<Route path="/signin" component={SignIn}>
</Route>
<Route path="/answer" component={Answer}>
</Route>
    </Switch>
</Router>
      </div>
  );
}

export default App;

