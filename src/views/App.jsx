import React from 'react';
import './App.css'
import Menu from '../components/layout/Menu';
import Content from '../components/layout/Content'
import About from './examples/About';
import Home from './examples/Home';
import 'bootstrap-icons/font/bootstrap-icons.css';

const App = () => (
  <div className='App'>
        <Menu/>
        <Content/>
        <About/>
        <Home/>
  </div>
);

export default App;
