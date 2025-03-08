import { all, fork } from 'redux-saga/effects';
import { watchAuth } from './authSaga';
import { watchProfileSagas } from './profileSaga';
// import { watchPostSagas } from './postSaga';
import { watchUtilsSagas } from './utilsSaga';
// import { watchProjectSagas } from './projectSaga';
// import { watchReviewSagas } from './reviewSaga';
// import { watchTransactionServiceSagas } from './transactionServiceSaga';

export default function* rootSaga() {
    yield all([
        fork(watchAuth),
        fork(watchProfileSagas),
        // fork(watchPostSagas),
        fork(watchUtilsSagas),
        // fork(watchProjectSagas),
        // fork(watchReviewSagas),
        // fork(watchTransactionServiceSagas),
    ]);
}