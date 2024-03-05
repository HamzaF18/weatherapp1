import './App.css';
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import FAQ from './Components/FAQ/FAQ';
import AuthForm from './Components/AuthForm/AuthForm';
import Home from "./Components/Home/Home";
import Dashboard from './Components/Dashboard/Dashboard';
import { useTheme } from './Contexts/ThemeContext';


function App() {
  const {theme} = useTheme();


  return (

    <div id="App" className={theme}>
      <NavBar/>


      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/login" element={<AuthForm />}/>
        <Route path="dashboard" element={<Dashboard/>}/>
      </Routes>



    </div>


  );
}

export default App;
