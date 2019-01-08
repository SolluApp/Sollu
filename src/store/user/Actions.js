import DB_SERVICE from '../../firebase/db_service'
import * as types from "./ActionTypes";

const  REG_USERS_REF = DB_SERVICE.database().ref('/registeredUsers');

export const registerUser = userInformation => {
    return (dispatch) => {
        let userInfo = {
            phoneNo: userInformation.phoneNo,
        };
        REG_USERS_REF.once("value", function (data) {
            console.log(data);
            REG_USERS_REF.push(userInfo, (error) => {
                if (error) {
                    console.log("Error registering")
                } else {
                    console.log("Registered successfully")
                }
            });
        })
        dispatch(saveUserInfoInStore(userInfo))
    }
};

const saveUserInfoInStore = userInformation => ({
    type: types.SAVE_USER_INFO_IN_STORE,
    userInformation
});