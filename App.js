/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux'
import LoginContainer from './src/components/login/LoginContainer'
import configureStore from "./src/store/Store";
import RootReducer from "./src/store/RootReducer";


const store = configureStore(RootReducer)
if(process.env.NODE_ENV !== 'production') {
    window.myStore = store
}

const App = () => (
    <Provider store={store}>
        <LoginContainer/>
    </Provider>)

export default App
