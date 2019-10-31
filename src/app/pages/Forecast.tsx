import * as React from "react";
import { observer } from "mobx-react";
import appStore from "app/stores/AppStore";
import ForeacastComponent from "app/components/Forecast/views/ForecastComponent";

export interface IForecastPageProps {}

@observer
export default class ForecastPage extends React.Component<IForecastPageProps> {
  constructor(props: IForecastPageProps) {
    super(props);
  }

  componentDidMount() {
    appStore.setPageTitle("Forecast page");
  }

  public render() {
    return <ForeacastComponent></ForeacastComponent>;
  }
}
