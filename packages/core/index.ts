import { initDatabase, doSignin, authStateObserver } from './database';
import {DEMO_USERS} from './constants/Users';

import UserSelectionContextProvider, { UserSelectionContext } from './context/UserSelectionContext';

import { onUserSelect } from './listeners/user-selection-page.listeners';

export {
    initDatabase,
    doSignin, 
    authStateObserver,
    DEMO_USERS
}


// User selection context
export {
    UserSelectionContextProvider,
    UserSelectionContext
}


// User selection page listeners 
export {
    onUserSelect
}
