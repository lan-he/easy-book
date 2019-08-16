import React from 'react';
import { GlobalStyle } from './style.js';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom'
import store from './store/index.js';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import Write from './pages/write';


function App() {
  return (
    <Provider store={store}>
      <GlobalStyle/>
      <BrowserRouter>
        <Header/>
        <Route path='/' exact component={Home}></Route>
        <Route path='/detail' component={Detail}></Route>
        <Route path='/sign_in' component={SignIn}></Route>
        <Route path='/sign_up' component={SignUp}></Route>
        <Route path='/write' component={Write}></Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
