import React from "react";
import { connect } from "react-redux";

function Counter(props) {
  return (
    <div>
      <h1>Mesin Penghitung</h1>
      <p>Count : {props.count}</p>
      <button onClick={props.onIncrementClick}>Add</button>
      <button onClick={props.onDicrementClick}>Remove</button>
    </div>
  );
}

function mapStatetoProps(state) {
  console.log("mapStatetoProps", state);
  return {
    count: state.count,
  };
}

function mapDispatchtoProps(dispatch) {
  return {
    onIncrementClick: () => {
      console.log("tombol increment click");
      const action = { type: "INCREMENT" };
      dispatch(action);
    },
    onDicrementClick: () => {
      console.log("tombol dicrement click");
      const action = { type: "DICREMENT" };
      dispatch(action);
    },
  };
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Counter);
