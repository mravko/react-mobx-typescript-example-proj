import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { configure } from 'mobx'
import { Provider } from 'mobx-react';
import { createBrowserHistory } from 'history';
import { Router, Route } from 'react-router';
import LandingPage from './app/pages/LandingPage';
import AppStore from 'app/stores/AppStore';
import RoutingStore from 'app/stores/RoutingStore';
import MasterDetailPage from 'app/pages/MasterDetailPage';
import MasterDetailPage2 from 'app/pages/MasterDetailPage2';
import Menu from 'app/components/Menu/Menu';
import { syncHistoryWithStore } from 'mobx-react-router';

configure({ enforceActions: 'always' });

const browserHistory = createBrowserHistory();
const routingStore: RoutingStore = new RoutingStore();
const history = syncHistoryWithStore(browserHistory, routingStore);

// prepare MobX stores
const stores = {
  appStore: new AppStore(routingStore)
};

// render react DOM
const App = ({ history }) => (
  <React.Fragment>
    <Router history={history}>
      <Menu></Menu>
      <Route exact path="/" component={LandingPage} />
      <Route path="/master" component={MasterDetailPage} />
      <Route path="/master2" component={MasterDetailPage2} />
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
