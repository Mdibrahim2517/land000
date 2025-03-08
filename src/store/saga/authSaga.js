import { takeEvery, put, call } from 'redux-saga/effects';
import { loginStart, loginSuccess, loginFail } from '../slices/authSlice';
import { postRequest } from '../../network';
import { LOGIN_PASSWORD } from '../apis';

// Saga to handle user login
function* loginSaga(action) {
    try {
        // Use postRequest from your updated Fetch utility
        const response = yield call(postRequest, LOGIN_PASSWORD, action.payload);

        // Dispatch success action with user data if login is successful
        yield put(loginSuccess(response));
        action.callback(null, response); // Trigger success callback
    } catch (error) {
        // Dispatch fail action with error message if login fails
        yield put(loginFail(error.message));
        action.callback(error.message, null); // Trigger failure callback
    }
}

// Watcher saga to listen for the loginStart action
export function* watchAuth() {
    yield takeEvery(loginStart.type, loginSaga);
}