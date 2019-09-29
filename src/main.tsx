import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { configure } from 'mobx'
import { Provider } from 'mobx-react';
import { createBrowserHistory } from 'history';
import { Router, Route } from 'react-router';
import LandingPage from './app/pages/LandingPage';
import AppStore from 'app/stores/AppStore';

const stores = {
  appStore: new AppStore()
};
// prepare MobX stores
const history = createBrowserHistory();

configure({ enforceActions: 'always' });

// render react DOM
const App = ({ history }) => (
  <React.Fragment>
    <Router history={history}>
      <Route exact path="/" component={LandingPage} />
    </Router>
  </React.Fragment>
);


// render react DOM
ReactDOM.render(
  <Provider {...stores}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
);
