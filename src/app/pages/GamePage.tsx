import * as React from "react";
import { observer } from "mobx-react";
import appStore from "app/stores/AppStore";
import GameWorldComponent from "app/components/Game/views/GameWorldComponent";

export interface IGamePageProps {}

@observer
export default class GamePage extends React.Component<IGamePageProps> {
  constructor(props: IGamePageProps) {
    super(props);
  }

  componentDidMount() {
    appStore.setPageTitle("Game page");
  }

  public render() {
    return <GameWorldComponent></GameWorldComponent>;
  }
}
