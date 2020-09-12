import { useContext } from 'react';
import { UserSelectionContext } from '../context/UserSelectionContext';
import { UserReducer, USER_ACTIONS } from '../reducers/UserReducer';

const {dispatch} = useContext(UserSelectionContext);

export const onUserSelect = (userDetails) => { 
    dispatch({type: USER_ACTIONS.SET_SELECTED_USER, payload: {userDetails}});
}