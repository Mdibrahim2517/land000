import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import profileReducer from './profileSlice';
import utilsReducer from './utilsSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    utils: utilsReducer,
    // posts: postReducer,
    // project: projectSliceReducer,
    // review: reviewReducer,
    // transactionService: transactionServiceReducer
});

export default rootReducer;