import * as React from "react";
import apstore from "app/stores/AppStore";
import WebSitesListComponent from "app/components/WebsiteList/views/WebSitesListComponent";

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    apstore.setPageTitle("Landing page");
  }
  public render() {
    return <WebSitesListComponent></WebSitesListComponent>;
  }
}
