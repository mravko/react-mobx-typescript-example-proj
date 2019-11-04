import * as React from "react";

export interface ISquareComponentProps {
  canvasRef?;
}

export class SquareComponentBlue extends React.PureComponent<
  ISquareComponentProps
> {
  public render() {
    var ctx = this.props.canvasRef.current.getContext("2d");

    // Create gradient
    var grd = ctx.createLinearGradient(0, 0, 200, 0);
    grd.addColorStop(0, "blue");
    grd.addColorStop(1, "white");

    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(150, 80, 150, 80);

    return <div></div>;
  }
}

export class SquareComponent extends React.PureComponent<
  ISquareComponentProps
> {
  public render() {
    var ctx = this.props.canvasRef.current.getContext("2d");

    // Create gradient
    var grd = ctx.createLinearGradient(0, 0, 200, 0);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "white");

    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(10, 10, 150, 80);

    return <div></div>;
  }
}
