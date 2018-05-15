import React, { PureComponent } from "react";
import { Provider } from "react-redux";

import store from "stores/ConfigureStore";
import { Main } from "components";

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default App;
