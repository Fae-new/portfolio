import React from 'react';
import Header from './Header';
import Homepage from './Homepage';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
 <Header/> 
 <Routes>

  <Route path='/' element={<Homepage/>}/>
  <Route path='/addProject' element={<></>} />

 </Routes>
    </div>
    </Router>
  );
}

export default App;
