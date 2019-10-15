import * as React from "react";
import { observer } from "mobx-react";

@observer
export default class CanvasComponent extends React.Component {
  constructor(props) {
    super(props);

    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    this.childrenWithProps = React.Children.map(this.props.children, child => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, { canvasRef: this.canvasRef });
      }
    });

    this.forceUpdate();
  }

  childrenWithProps = null;
  canvasRef;

  public render() {
    return (
      <canvas
        ref={this.canvasRef}
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "lightgray"
        }}
      >
        {this.childrenWithProps}
      </canvas>
    );
  }
}
