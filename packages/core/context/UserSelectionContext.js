import React, { createContext, useReducer } from 'react';
import { UserReducer } from '../reducers/UserReducer';

export const UserSelectionContext = createContext();

const UserSelectionContextProvider = (props) => {
    const initialState = {
        selectedUserDetails: null
    };

    const [userSelectionState, dispatch] = useReducer(UserReducer, initialState);

    return (
        <UserSelectionContext.Provider value={{ userSelectionState, dispatch }}>
            {props.children}
        </UserSelectionContext.Provider>
    );
}

export default UserSelectionContextProvider;