import './App.css';
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import FAQ from './Components/FAQ/FAQ';
import AuthForm from './Components/AuthForm/AuthForm';
import Home from "./Components/Home/Home";


function App() {


  return (

    <div className="App">
      <NavBar/>


      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/login" element={<AuthForm />} />
      </Routes>



    </div>


  );
}

export default App;
