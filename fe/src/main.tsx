import * as React from "react";
import * as ReactDOM from "react-dom";
import { configure } from "mobx";
import { createBrowserHistory } from "history";
import { Router, Route } from "react-router";
import LandingPage from "./app/pages/LandingPage";
import { syncHistoryWithStore } from "mobx-react-router";
import appStore from "app/stores/AppStore";
configure({ enforceActions: "always" });

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, appStore.routingStore);

// render react DOM
const App = ({ history }) => (
  <>
    <Router history={history}>
      <Route exact path="/" component={LandingPage} />
    </Router>
  </>
);

// render react DOM
ReactDOM.render(<App history={history} />, document.getElementById("root"));
