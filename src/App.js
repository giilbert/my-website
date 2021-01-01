import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';


import Construction from './pages/Construction';
import Snip from './pages/Snip';

import './css/index.css';

export default function App() {
    return (
        <BrowserRouter>
            <Switch>

                <Route path="/snip">
                    <Snip />
                </Route>

                <Route path="*">
                    <Construction />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}