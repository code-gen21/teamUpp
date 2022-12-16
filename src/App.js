import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route,Routes } from "react-router-dom";
import Explore from './Pages/Explore/Explore';
import Organise from './Pages/Organise/Organise';
import Login from './Pages/SignUp/Login';
import Home from './Pages/Home/Home';
import Navbars from './Components/Navbars';

function App() {

  

  return (
    <div className="App">
    <Navbars/>
      <Routes>
        <Route path = "/" element={<Home/>} >
        </Route>
        <Route path = "/organise" element={<Organise/>} >
        </Route>
        <Route path = "/explore" element={<Explore/>} >
        </Route>
        <Route path = "/login" element={<Login/>} >
        </Route>
        
      </Routes>

    </div>
  );
}

export default App;
