import React from 'react'
import {Text, TextInput, TouchableOpacity, View,Image} from 'react-native'
import styles from '../../styles/Login';



export default class LoginComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            phoneNo: '',
            error: false
        }
    }

    validatePhoneNo(phoneNo) {
        let numbers = '0123456789';

        for (var i = 0; i < phoneNo.length; i++) {
            if (numbers.indexOf(phoneNo[i]) === -1) {
                this.setState({error: true});
                return;
            }
        }
        this.setState({phoneNo: phoneNo})
    }

    handleLogin() {
        if(!this.state.phoneNo.length===10){
            alert("Invalid phone number");
            return;
        }
        let userDetails={
            phoneNo: this.state.phoneNo,
        }
        this.props.registerUser(userDetails)
    }

    // componentDidMount() {
    //     let deviceId = DeviceInfo.getUniqueID();
    //     this.setState({deviceId: deviceId});
    // }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.SectionStyle}>
                    <Image source={require('../../icons/phone_icon.jpg')}
                           style={styles.imageStyle}/>
                    <TextInput
                        style={styles.TextContainer}
                        placeholder="Enter phone number"
                        keyboardType={'numeric'}
                        maxLength={10}
                        value={this.state.phoneNo}
                        onChangeText={this.validatePhoneNo.bind(this)}
                    />
                </View>
                <View>
                    <TouchableOpacity style={[styles.button, { backgroundColor: this.state.phoneNo ? '#cc504e' : '#f49f8e' },
                        { borderColor: this.state.error ? 'red' : '#000' }]}
                                      activeOpacity = { .5 }
                                      disabled={!this.state.phoneNo}
                                      onPress={this.handleLogin.bind(this)}>
                        <Text style={styles.text}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

}