import * as React from "react";
import { DetailModel } from "../models/DetailModel";
import { observer } from "mobx-react";

interface IDetailViewProps {
  model: DetailModel;
}

const DetailView: React.FunctionComponent<IDetailViewProps> = observer(
  props => {
    return (
      <div>
        {props.model.keys.map(k => (
          <div key={k}>
            <h4>{k}</h4>
            <div>
              <input
                type="text"
                value={props.model.data[k]}
                onChange={e => {
                  props.model.setDataValue(k, e.target.value);
                }}
              />
            </div>
          </div>
        ))}
        {props.model.showPopup ? (
          <div
            style={{
              position: "fixed",
              top: 0,
              width: 200,
              height: 200,
              backgroundColor: "red"
            }}
          >
            popup
          </div>
        ) : null}
      </div>
    );
  }
);

export default DetailView;
