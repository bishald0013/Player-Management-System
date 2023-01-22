import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Dashbord from "./Pages/Dashbord/Dashbord"
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import { getToken } from './service/localStorage';
import CreateTeam from './Pages/createTeam/CreateTeam';
import AddPlayers from './Pages/AddPlayers/AddPlayers';

function App() {

  let token = getToken()


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/login' element={ !token ? <Login/> : <Navigate to="/deshbord" />} />
          <Route path='/signeUp' element={<SignUp />} />
          <Route path='/deshbord' element={ token ? <Dashbord/> : <Navigate to="/login" />} />
          <Route path='/createTeam' element={<CreateTeam />} />
          <Route path='/addPlayers' element={<AddPlayers/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
