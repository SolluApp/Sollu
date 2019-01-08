import * as types from "./ActionTypes";

const initialState = {
    localContacts: null,
    user: null,
    isRegistered: false,
    firebaseContacts: null,
    errorLoadingContacts: false,
    currentChatUser: null,
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case types.SAVE_USER_INFO_IN_STORE:
            return {...state, user: action.userInformation, isRegistered: true}
        default:
            return state
    }
}

export default user