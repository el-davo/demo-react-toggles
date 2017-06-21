import { fork } from 'redux-saga/effects';
import { fetchReleaseTogglesSaga } from './release-toggles/saga/fetch-release-toggles.saga';
import { editReleaseToggleSaga } from './release-toggles/saga/edit-release-toggle.saga';
import { quickToggleSaga } from './release-toggles/saga/quick-toggle.saga';

export function* rootSaga() {
  yield [
    fork(fetchReleaseTogglesSaga),
    fork(editReleaseToggleSaga),
    fork(quickToggleSaga)
  ];
}
