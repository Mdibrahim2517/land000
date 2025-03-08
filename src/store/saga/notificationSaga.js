import { takeEvery, put, call } from 'redux-saga/effects';
import {
    fetchNotificationsStart,
    fetchNotificationsSuccess,
    fetchNotificationsFail,
    readNotificationsStart,
    readNotificationsSuccess,
    readNotificationsFail,
    deleteNotificationsStart,
    deleteNotificationsSuccess,
    deleteNotificationsFail,
} from '../slices/notificationSlice';

import { getRequest, postRequest } from '../../network';
import {
    GET_NOTIFICATION,
    READ_NOTIFICATION,
    DELETE_NOTIFICATION,
} from '../apis';

// Saga to fetch notifications
function* fetchNotifications(action) {
    try {
        const response = yield call(getRequest, GET_NOTIFICATION, action.payload);
        yield put(fetchNotificationsSuccess(response));
    } catch (error) {
        yield put(fetchNotificationsFail(error.message));
    }
}

// Saga to mark notifications as read
function* readNotification(action) {
    try {
        const response = yield call(postRequest, READ_NOTIFICATION, action.payload);
        yield put(readNotificationsSuccess(response));
        action.callback && action.callback(null, response);
    } catch (error) {
        yield put(readNotificationsFail(error.message));
        action.callback && action.callback(error.message, null);
    }
}

// Saga to delete notifications
function* deleteNotification(action) {
    try {
        const response = yield call(postRequest, DELETE_NOTIFICATION, action.payload);
        yield put(deleteNotificationsSuccess(response));
        action.callback && action.callback(null, response);
    } catch (error) {
        yield put(deleteNotificationsFail(error.message));
        action.callback && action.callback(error.message, null);
    }
}

// Watcher Sagas
export function* watchNotificationSagas() {
    yield takeEvery(fetchNotificationsStart.type, fetchNotifications);
    yield takeEvery(readNotificationsStart.type, readNotification);
    yield takeEvery(deleteNotificationsStart.type, deleteNotification);
}