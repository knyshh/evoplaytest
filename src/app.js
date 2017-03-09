import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';
import { Provider } from 'react-redux';
import Main from './components/Main/Main';
import Settings from './components/Setting/Setting';
import Page from './components/NewPage/NewPage';
import Info from './components/Info/Info';
import Questions from './components/Questions/Questions';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import "./sass/contentLayout.scss";


const MainWrap  = () => {
    return (
        <Provider store={store}  >
            <main>

                <Router  history={ browserHistory } >

                    <Route component={ Main }>
                        <Route path="/back" component={Page } />
                        <Route path="/info" component={ Info } />
                        <Route path="/questions" component={ Questions } />
                        <Route path="/" component={ Settings } />
                    </Route>

                </Router>

            </main>
        </Provider>
    )
}

ReactDOM.render( <MainWrap />, document.getElementById('container'));