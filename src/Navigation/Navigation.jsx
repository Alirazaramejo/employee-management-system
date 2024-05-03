import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DataForm from '../Pages/DataForm/DataForm';
import Table from '../Pages/Table/Table';
import Graph from '../Pages/Graph/Graph';
import Refer from '../Pages/Refer/Refer';
function Navigation() {
  return (
    <div>
    
         <Router>
          <Routes>
            <Route path="/" element={<DataForm />} />
            <Route path="/table" element={<Table />} />
            <Route path="/graph" element={<Graph />} />
            <Route path="/refer" element={<Refer />} />
          
          </Routes>
         </Router>
    </div>
  )
}

export default Navigation