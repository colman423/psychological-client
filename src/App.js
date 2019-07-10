import React from 'react';
import StartPage from './Containers/StartPage';
import Enterprise from './Containers/Enterprise';
import Staff from './Containers/Staff';
import QuestionnairePage from './Components/QuestionnairePage';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Api from './Api';

function App() {
    console.log("APP")
    Api.test();

    return (
        <div id="app">
            <BrowserRouter basename="/client/">
                <Switch>
                    <Route path="/" exact component={StartPage} />
                    <Route path="/enterprise" component={Enterprise}></Route>
                    <Route path="/staff" component={Staff}></Route>
                    <Route path="/questionnaire/" component={QuestionnairePage} />
                    <Redirect to='/' />
                </Switch>
            </BrowserRouter>
        </div>
    );
}
export default App;
