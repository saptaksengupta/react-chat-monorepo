import { useContext } from 'react';
import { UserSelectionContext } from '../context/UserSelectionContext';
import { UserReducer, USER_ACTIONS } from '../reducers/UserReducer';



export const onUserSelect = (userDetails) => { 
    const {dispatch} = useContext(UserSelectionContext);
    dispatch({type: USER_ACTIONS.SET_SELECTED_USER, payload: {userDetails}});
}