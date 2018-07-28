import { delay } from 'redux-saga'
import { call, put, takeEvery } from 'redux-saga/effects'

export function* helloSaga() {
  console.log('Hello Saga!')
}

export function* AddAsync() {
    console.log('adding!')
  yield call(delay, 2000)
  yield put({type: 'ADD'})
}

export function* watchAddAsync() {
  yield takeEvery('ADD', AddAsync)
// yield take('ADD', incrementAsync)
}

export function* subtractAsync() {
    console.log('subtracting!')
  yield call(delay, 2000)
  yield put({type: 'SUBTRACT'})
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield [
    subtractAsync(),
    helloSaga(),
    watchAddAsync()
  ]
}
