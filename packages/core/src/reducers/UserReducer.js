
export const USER_ACTIONS = {
    SET_AUTH_USER: 'SET_AUTH_USER',
    SET_SELECTED_USER: 'SET_SELECTED_USER',
    REMOVE_USER: 'REMOVE_USER'
}

export const UserReducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            if (!isUserExist()) {
                return storeUserDetails(action.payload.userDetails);
            }
            return state;
        case USER_ACTIONS.REMOVE_USER: 
            flushUserDetails();
            return {
                ...state   
            }
        case USER_ACTIONS.SET_SELECTED_USER:
            return {
                ...state,
                selectedUserDetails: action.payload.selectedUserDetails
            }
        default:
            return state;
    }
}


export const isUserExist = () => {
    return (localStorage.userDetails);
}

export const storeUserDetails = (userDetails) => {
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    return getUserDetails();
}

export const getUserDetails = () => {
    return JSON.parse(localStorage.getItem('userDetails'));
}

const flushUserDetails = () => {
    return localStorage.removeItem('userDetails');
}

