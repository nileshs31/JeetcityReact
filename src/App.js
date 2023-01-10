// import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Australianopen from './Components/Australianopen';
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";



function App() {
  return (
    <div className=" ">
      <BrowserRouter>
       <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/Australianopen' element={<Australianopen/>}/>
       </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
