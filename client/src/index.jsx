import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';
import App from './App';
import TaskOne from './TaskOne';
import TaskTwo from './TaskTwo';
import './styles';


ReactDOM.render(
    <BrowserRouter basename={'task'}>
        <App>
            <Switch>
                <Route exact path={'/1'} component={TaskOne} />
                <Route exact path={'/2'} component={TaskTwo} />
                <Route path={'/'} component={() => <div>Undefined task number</div>} />
            </Switch>
        </App>
    </BrowserRouter>,
    document.getElementById('app'),
);
