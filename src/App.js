import React from 'react';
import { GlobalStyle } from './style.js';
import { Provider } from 'react-redux';
import Header from './common/header';
import store from './store/index.js';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle/>
      <Header/>
    </Provider>
  );
}

export default App;
