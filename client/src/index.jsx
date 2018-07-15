import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';
import App from './App';
import TaskOne from './TaskOne';
// import './styles';


ReactDOM.render(
    <BrowserRouter basename={'task'}>
        <App>
            <Switch>
                <Route exact path={'/1'} component={TaskOne} />
                <Route path={'/'} component={() => <div>Undefined task number</div>} />
            </Switch>
        </App>
    </BrowserRouter>,
    document.getElementById('app'),
);
