import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Menu from '../components/layout/Menu';
import Content from '../components/layout/Content';

const App = () => (
    <BrowserRouter>
        <div>
            <Menu />
            <Content />
        </div>
    </BrowserRouter>
);

export default App;
