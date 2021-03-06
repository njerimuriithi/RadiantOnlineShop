import './App.css';
import{BrowserRouter ,Route,Routes} from 'react-router-dom'
//import MultiItem from './components/MultiItem';

//import{BrowserRouter,Route,Router} from "react-router-dom"
//BD1616
//components import
import Home from "./Pages/Home"
//import NewProducts from './components/NewProducts/NewProducts';
//import Banner from './components/Banner/Banner';
//import ExtensionsProduct from './components/Products/ExtensionsProduct';
import NavBar from './components/NavBar/NavBar';
import ExtensionsProduct from './components/Products/ExtensionsProduct';
//import SighUp from './components/sighnup/SighUp';
import HomeWare from './components/Products/HomeWare';
import PhoneProducts from './components/Products/PhoneProducts';
import Footer from './components/Footer/Footer';
function App() {
  return (
   
    
     <BrowserRouter>
      <div className="App">
     <NavBar/>
       
     <Routes>
       <Route path="/" element={<Home/>} exact/>
       <Route path="extensionproduct" element={<ExtensionsProduct/>}/>
       <Route path ="homeware" element ={<HomeWare/>}/>
       <Route path="phoneproducts" element={<PhoneProducts/>}/>
       

     </Routes>
     <Footer/>
     </div>
     </BrowserRouter>
     
  );
}

export default App;
