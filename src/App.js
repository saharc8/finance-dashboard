import React from "react";
import Navbar from "./components/Navbar";
import DataContainer from "./components/DataContainer";
import { createStore } from "redux";
import reducer from "./reducers/reducer";
import { Provider } from "react-redux";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <DataContainer />
    </Provider>
  );
}

export default App;
