import './App.css';
import Navlink from './task1/Navlink';
import {Routes, Route} from "react-router-dom";
import Home from './task1/Home'
import Gallery from './task1/Gallery';
import Event from './task1/Event'
import  Feedback from './task1/Feedback'
import Contact from './task1/Contact';
function App() {
  return (
    <div className="App">
      <h2>Task 1</h2>
       <Routes>
        <Route path='/' element={<Navlink/>}> 
        <Route path='/Home' element={<Home/>}>
        </Route>
        <Route path='/Gallery' element={<Gallery/>}>
        </Route>
        <Route path='/Event' element={<Event/>}>
        </Route>
        <Route path='/Feedback' element={<Feedback/>}>
        </Route>
        <Route path='/Contact' element={<Contact/>}>
        </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
