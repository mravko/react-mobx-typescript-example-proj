import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { configure } from 'mobx'
import { createBrowserHistory } from 'history';
import { Router, Route } from 'react-router';
import LandingPage from './app/pages/LandingPage';
import MasterDetailPage from 'app/pages/MasterDetailPage';
import GridOnlyPage from 'app/pages/GridOnlyPage';
import Menu from 'app/components/Menu/Menu';
import { syncHistoryWithStore } from 'mobx-react-router';
import appStore from 'app/stores/AppStore';
import GamePage from 'app/pages/GamePage';

configure({ enforceActions: 'always' });

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, appStore.routingStore);

// render react DOM
const App = ({ history }) => (
  <React.Fragment>
    <Router history={history}>
      <Menu></Menu>
      <Route exact path="/" component={LandingPage} />
      <Route path="/grid" component={GridOnlyPage} />
      <Route path="/master" component={MasterDetailPage} />
      <Route path="/game" component={GamePage} />
    </Router>
  </React.Fragment>
);

// render react DOM
ReactDOM.render(
  <App history={history} />,
  document.getElementById('root')
);
