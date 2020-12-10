import React from 'react'
import { Provider } from 'react-redux';
import configureStore from './configureStore';
// import LogIn from './containers/LogIn';
import Home from './containers/Home'
import rootSaga from './sagas';
import { BrowserRouter } from 'react-router-dom';

function App() {
  rootSaga(configureStore());

  return(
    <BrowserRouter>
      <Provider store={configureStore()}>
        <Home />
      </Provider>
    </BrowserRouter>
  )
}

export default App
