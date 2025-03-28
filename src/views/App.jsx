import React from 'react';
import './App.css'
import Menu from '../components/layout/Menu';
import Content from '../components/layout/Content'
import About from './examples/About';
import Home from './examples/Home';

const App = () => (
  <div className='App'>
    <h1>App</h1>
        <Menu/>
        <Content/>
        <About/>
        <Home/>
  </div>
);

export default App;
