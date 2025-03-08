import { takeEvery, put, call } from 'redux-saga/effects';
import {
    profileDetailsStart,
    profileDetailsSuccess,
    profileDetailsFail,
    fetchUsersStart,
    fetchUsersSuccess,
    fetchUsersFail,
    fetchNotFollowedUsersStart,
    fetchNotFollowedUsersSuccess,
    fetchNotFollowedUsersFail,
    followStart,
    followSuccess,
    followFail
} from '../slices/profileSlice';
import { getRequest, postRequest } from '../../network';
import { GET_USER_DETAILS, GET_USERS, GET_NOT_FOLLOWED_USERS, FOLLOW } from '../apis';

// Fetch profile details
function* profileDetailsSaga(action) {
    try {
        const response = yield call(getRequest, GET_USER_DETAILS, action.payload);
        yield put(profileDetailsSuccess(response));
    } catch (error) {
        yield put(profileDetailsFail(error.message));
    }
}

// Fetch users
function* fetchUsersSaga(action) {
    try {
        const response = yield call(getRequest, GET_USERS, action.payload);
        yield put(fetchUsersSuccess(response));
    } catch (error) {
        yield put(fetchUsersFail(error.message));
    }
}

// Fetch not followed users
function* fetchNotFollowedUsersSaga(action) {
    try {
        const response = yield call(getRequest, GET_NOT_FOLLOWED_USERS, action.payload);
        yield put(fetchNotFollowedUsersSuccess(response));
    } catch (error) {
        yield put(fetchNotFollowedUsersFail(error.message));
    }
}

// Follow/Unfollow user
function* followSaga(action) {
    try {
        const response = yield call(postRequest, FOLLOW, action.payload);
        yield put(followSuccess(response));
        action.callback && action.callback(null, response);
    } catch (error) {
        yield put(followFail(error.message));
        action.callback && action.callback(error.message);
    }
}

// Watcher saga
export function* watchProfileSagas() {
    yield takeEvery(profileDetailsStart.type, profileDetailsSaga);
    yield takeEvery(fetchUsersStart.type, fetchUsersSaga);
    yield takeEvery(fetchNotFollowedUsersStart.type, fetchNotFollowedUsersSaga);
    yield takeEvery(followStart.type, followSaga);
}