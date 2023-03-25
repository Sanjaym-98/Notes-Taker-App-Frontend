import logo from './logo.svg';
import './App.css';
import SignUp from './components/Register';
import Login from './components/Signin';
import HomePage from './components/HomePage';
import {BrowserRouter, Route, Routes} from 'react-router-dom' 
import 'bootstrap/dist/css/bootstrap.css'
import AddNotes from './components/AddNotes';
function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login/>} />
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/homepage' element={<HomePage/>}/>
    <Route path="/addnote" element={<AddNotes />} />
      </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
