import React, { Fragment } from 'react';
import './App.css';

// components
import InputBathroom from './components/InputBathroom';
import ListBathrooms from './components/ListBathrooms';

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputBathroom />
        <ListBathrooms />
      </div>
    </Fragment>
  );
}

export default App;
