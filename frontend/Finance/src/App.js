import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HotelDetails from "./components/HotelDetails"
import {BrowserRouter as Router,Route} from "react-router-dom"
import DisplayHotelDetails from "./components/DisplayHotelDetails"
import updateTuitionFee from "./components/updateTuitionFee"

import StuPayment from './components/StuPayment'
import HeaderComp from './components/HeaderComponent';
import FooterComp from "./components/FooterComponent";


function App() {
  return (
    <Router>
      <div>
        <HeaderComp/>
        <Header/>
        <Route path="/addTFeeDetails" exact component={HotelDetails}/>
        <Route path="/listTFeeDetails" exact component={DisplayHotelDetails}/>
        <Route path="/updateTuitionFee/:id" exact component={updateTuitionFee}/>
        
        <Route path="/addStuPayment" exact component={StuPayment}/>
        <FooterComp/>


        
      </div>
    </Router>
    
  );
}

export default App;
