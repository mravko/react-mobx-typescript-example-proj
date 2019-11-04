import * as React from "react";
import { observer } from "mobx-react";
import { ForecastModel } from "../models/ForecastModel";

export interface IForecastComponentProps {}

@observer
export default class ForecastComponent extends React.Component<
  IForecastComponentProps
> {
  viewModel: ForecastModel;

  constructor(props) {
    super(props);
    this.viewModel = new ForecastModel();
  }

  componentDidMount() {
    this.viewModel.getResults();
  }

  componentWillUnmount() {
    this.viewModel.disposeReactions();
  }

  public render() {
    return (
      <div>
        <pre>
          {this.viewModel.results.map(r => (
            <div>
              {r["temperatureC"]} {r["summary"]}
            </div>
          ))}
        </pre>
      </div>
    );
  }
}
