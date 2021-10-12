import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Registration from './Components/Registration/Registration';
import Service from './Components/Service/Service';
import initializeAuthentication from './Firebase/firebase.initialize';


initializeAuthentication();


function App() {
  
  
  return (
    <>
      <Router>
      <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login></Login>
            <Registration></Registration>      
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/service">
            <Service></Service>
          </Route>
        </Switch>
      </Router>
      
    </>
    )
  }

export default App;
