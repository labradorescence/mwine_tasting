import React from 'react';
import logo from './logo.svg';
import WinePage from './components/WinePage.js'
import './App.css';

import { render } from 'react-dom';

export default class App extends React.Component {

  render(){
    console.log("hello World from APP ~ <3 ")
  return (
    <div className="App">
      <WinePage />
    </div>
  )
  }
}
