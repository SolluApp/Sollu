import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import LoginComponent from '../../components/login/LoginComponent';

it('Function and state test', () =>{
    let LoginInfo=renderer.create(<LoginComponent/>).getInstance();
    LoginInfo.validatePhoneNo('9491173782');
    expect(LoginInfo.state.phoneNo).toEqual('9491173782');
})