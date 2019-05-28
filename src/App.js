import React from 'react';
import StartPage from './Pages/StartPage';
import Enterprise from './Pages/Enterprise';
import Staff from './Pages/Staff';
import QuestionnairePage from './Components/QuestionnairePage';
import { BrowserRouter, Route } from 'react-router-dom';
import Api from './Api';

function App() {
    console.log("APP")
    Api.test();

    return (
        <div id="app">
            <BrowserRouter basename="/client/">
                <Route path="/" exact component={StartPage} />
                <Route path="/enterprise" component={Enterprise}></Route>
                <Route path="/staff" component={Staff}></Route>
                <Route path="/questionnaire/" component={QuestionnairePage} />
            </BrowserRouter>
        </div>
    );
}
export default App;
