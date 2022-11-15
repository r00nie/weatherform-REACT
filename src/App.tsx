import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateReportPg from './pages/CreateReportPg';
import ListReportsPg from './pages/ListReportsPg';

function App() {
  return (
    <div className="App bg-blue-500 min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CreateReportPg/>}/>
          <Route path='/reports' element={<ListReportsPg/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
