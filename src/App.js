import React from 'react';
import StartPage from './StartPage';
import Enterprise from './Enterprise';
import { BrowserRouter, Route } from 'react-router-dom';
import Api from './Api';

const Users = () => <h2>Users</h2>;

// We give each route either a target `component`, or we can send functions in `render` or `children` 
// that return valid nodes. `children` always returns the given node whether there is a match or not.
function App() {
    console.log("APP")
    Api.test();

    return (
        <div id="app">
            <BrowserRouter basename="/">
                <Route path="/" exact component={StartPage} />
                <Route path="/enterprise" component={Enterprise}></Route>
                <Route path="/users/" component={Users} />
            </BrowserRouter>
        </div>
    );
}
export default App;
