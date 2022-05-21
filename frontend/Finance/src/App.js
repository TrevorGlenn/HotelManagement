import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import TuitionFeeDetials from "./components/EventDetails"
import {BrowserRouter as Router,Route} from "react-router-dom"
import DisplayTuitionFee from "./components/DisplayEvent"
import updateTuitionFee from "./components/update"




import HeaderComp from './components/HeaderComponent';
import FooterComp from "./components/FooterComponent";


function App() {
  return (
    <Router>
      <div>
        <HeaderComp/>
        <Header/>
        <Route path="/addTFeeDetails" exact component={TuitionFeeDetials}/>
        <Route path="/listTFeeDetails" exact component={DisplayTuitionFee}/>
        <Route path="/updateTuitionFee/:id" exact component={updateTuitionFee}/>
        
        
        
       
        <FooterComp/>


        
      </div>
    </Router>
    
  );
}

export default App;
