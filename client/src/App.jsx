import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Authorization from './pages/Authorization/Authorization';
import Main from './pages/Main/Main';
import Registration from './pages/Registration/Registration';

function App() {
  return (
    <div>
      Hello word
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/auth" element={<Authorization />} />
      </Routes>
    </div>
  );
}

export default App;
