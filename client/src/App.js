import React from 'react';
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./components/Home";
import SavedBooks from "./components/SavedBooks";
import Header from "./components/Header"

const App = () => 
    (

        <div>
            <BrowserRouter>
                <div className="container">
                    <Header />
                    <Route exact path ="/" component={Home} />
                    <Route exact path="/savedBooks" component={SavedBooks} />
                </div>
            </BrowserRouter>
        </div>
    )


export default App