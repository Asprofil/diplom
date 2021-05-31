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

function App() {
  return (
    <div className="App">

<Router>

<Link to="/"></Link>

    <Switch>
<Route path="/complain">
<NewComplain />
</Route>
<Route path="/about">
<AboutUs />
</Route>
<Route path="/profile">
<MyProfile />
</Route>
<Route path="/doctor">
<DoctorList />
</Route>
<Route path="/login">
<Login />
</Route>
<Route path="/signin">
<SignIn />
</Route>
<Route path='/'>
<Main />
      </Route>
    </Switch>
</Router>
      </div>
  );
}

export default App;

