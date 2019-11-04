import * as React from "react";
import { observer } from "mobx-react";
import CanvasComponent from "app/components/Canvas/CanvasComponent";
import {
  SquareComponent,
  SquareComponentBlue
} from "app/components/Canvas/SquareComponent";

const DrawingPage: React.FunctionComponent = () => {
  return (
    <CanvasComponent>
      <SquareComponent></SquareComponent>
      <SquareComponentBlue></SquareComponentBlue>
    </CanvasComponent>
  );
};

export default observer(DrawingPage);
