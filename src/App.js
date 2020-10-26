import React from "react";
import { Provider } from "react-redux";
import { store } from "./reduxStore/reduxStore";
import Container from "./Container/Todo";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
};

export default App;