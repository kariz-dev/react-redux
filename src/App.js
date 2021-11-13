import React from "react";
import Counter from "./components/Counter";
import store from "./store/Index";

function App() {
  return (
    <div className="App">
      <Counter store={store} />
    </div>
  );
}

export default App;
