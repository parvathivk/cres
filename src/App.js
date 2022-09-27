import React, { Component } from 'react'
import { Provider } from 'react-redux';
import {store,persistor} from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import Login from './components/Login';

export default class App extends Component {
  render() {
    return (
      <div><Login/></div>

    //   <Provider store={store}>
    //   <PersistGate loading={null} persistor={persistor}>
    //     <Main />
    //   </PersistGate>
    // </Provider>

    )
  }
}
