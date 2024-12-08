import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginComponent from './LoginComponent';
import RegisterComponent from './RegisterComponent';
import FillDataComponent from './FillDataComponent';
import PrintDataComponent from './PrintDataComponent';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginComponent />} />
        <Route path='/register' element={<RegisterComponent />} />
        <Route path='/getDataFilled' element={<FillDataComponent/>}/>
        <Route path='/printData' element={<PrintDataComponent/>}/>
      </Routes>
    </Router>
  );
}

export default App;
