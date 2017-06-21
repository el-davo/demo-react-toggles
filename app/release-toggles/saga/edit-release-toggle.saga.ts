import { ReleaseToggle, ReleaseToggles } from '../release-toggles.state';
import { toastr } from 'react-redux-toastr';
import { editReleaseToggleSuccess, editReleaseToggleFailed } from '../release-toggles.actions';
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { REQUEST_EDIT_RELEASE_TOGGLE } from '../release-toggles.action-types';
import { editReleaseToggle } from '../service/release-toggles.service';

function* edit({ releaseToggle }: { releaseToggle: ReleaseToggle }) {
    try {
        yield call(editReleaseToggle, releaseToggle);

        toastr.success('Success', 'Toggle has been updated');

        yield put(editReleaseToggleSuccess(releaseToggle));
    } catch (err) {
        yield put(editReleaseToggleFailed(releaseToggle));
    }
}

export function* editReleaseToggleSaga() {
    yield* takeEvery(REQUEST_EDIT_RELEASE_TOGGLE, edit);
}
