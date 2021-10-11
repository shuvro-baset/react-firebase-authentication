
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Registration from './Components/Registration/Registration';
import initializeAuthentication from './Firebase/firebase.initialize';


initializeAuthentication();


function App() {
  
  
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Login></Login>
      <Registration></Registration>
    </>
    )
  }

export default App;
