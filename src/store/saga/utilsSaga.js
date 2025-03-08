import { takeEvery, put, call } from 'redux-saga/effects';
import {
    getPostTagsStart,
    getPostTagsSuccess,
    getPostTagsFail,
    getServiceLocationsStart,
    getServiceLocationsSuccess,
    getServiceLocationsFail,
    getProfessionsStart,
    getProfessionsSuccess,
    getProfessionsFail,
    addInquiryStart,
    addInquirySuccess,
    addInquiryFail
} from '../slices/utilsSlice';

import { getRequest, postRequest } from '../../network';
import {
    GET_POST_TAGS,
    GET_SERVICE_LOCATIONS,
    GET_PROFESSIONS,
    ADD_INQUIRY
} from '../apis';

// Fetch Post Tags
function* fetchPostTags(action) {
    try {
        const response = yield call(getRequest, GET_POST_TAGS, action.payload);
        yield put(getPostTagsSuccess(response.data));
    } catch (error) {
        yield put(getPostTagsFail(error.message));
    }
}

// Fetch Service Locations
function* fetchServiceLocations(action) {
    try {
        const response = yield call(getRequest, GET_SERVICE_LOCATIONS, action.payload);
        yield put(getServiceLocationsSuccess(response.data));
    } catch (error) {
        yield put(getServiceLocationsFail(error.message));
    }
}

// Fetch Professions
function* fetchProfessions(action) {
    try {
        const response = yield call(getRequest, GET_PROFESSIONS, action.payload);
        yield put(getProfessionsSuccess(response.data));
    } catch (error) {
        yield put(getProfessionsFail(error.message));
    }
}

// Add Inquiry
function* addInquirySaga(action) {
    try {
        const response = yield call(postRequest, ADD_INQUIRY, action.payload);
        if (response.status === 200) {
            yield put(addInquirySuccess());
            action.callback && action.callback('success', 'We will contact you soon!');
        } else {
            yield put(addInquiryFail());
            action.callback && action.callback('error', 'Something went wrong.');
        }
    } catch (error) {
        yield put(addInquiryFail());
        action.callback && action.callback('error', 'Something went wrong.');
    }
}

// Watcher Sagas
export function* watchUtilsSagas() {
    yield takeEvery(getPostTagsStart.type, fetchPostTags);
    yield takeEvery(getServiceLocationsStart.type, fetchServiceLocations);
    yield takeEvery(getProfessionsStart.type, fetchProfessions);
    yield takeEvery(addInquiryStart.type, addInquirySaga);
}