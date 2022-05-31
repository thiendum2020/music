import { all, takeEvery } from 'redux-saga/effects'

function* helloSaga() {
    console.log("hello saga");
}

function* log(action) {
    console.log("Log: ", action);
}

export function* getAllSongsPublished() {
    yield takeEvery('GET_ALL_SONGS_PUBLISHED_SUCCESS', log)
}

export default function* rootSaga() {
    console.log("root saga");
    yield all([
        helloSaga(),
        getAllSongsPublished()
    ]);
}