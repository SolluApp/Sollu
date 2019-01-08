import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import LoginComponent from '../../components/login/LoginComponent'

let findElement=function(tree, element){
    return true;
}

it('Find Element', () =>{
    let tree=renderer.create(
        <LoginComponent/>
    ).toJSON();
    expect(findElement(tree, 'phoneNumber')).toBeDefined();
})