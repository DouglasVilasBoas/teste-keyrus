import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import  Home from './pages/Home'
import Product from './pages/Product';

export default function Routes() {
    return (
        <Router>
             <Route exact path='/' component={Home} />
             <Route  path='/product/:id' component={Product} />
        </Router>
    );

}