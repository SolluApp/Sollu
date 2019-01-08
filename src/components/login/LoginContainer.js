import React from 'react'
import {connect} from 'react-redux';
import { registerUser } from "../../store/user/Actions";
import LoginComponent from './LoginComponent';

const LoginContainer = props =>
    <LoginComponent registerUser={props.registerUser}/>

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = {
    registerUser
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)