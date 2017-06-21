import { ReleaseToggle, ReleaseToggles } from '../release-toggles.state';
import { toastr } from 'react-redux-toastr';
import { quickToggleSuccess, quickToggleFailed } from '../release-toggles.actions';
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { QUICK_TOGGLE } from '../release-toggles.action-types';
import { editReleaseToggle } from '../service/release-toggles.service';

function* toggle({ releaseToggle }: { releaseToggle: ReleaseToggle }) {
    try {
        yield call(editReleaseToggle, { ...releaseToggle, active: !releaseToggle.active });

        toastr.success('Success', 'Toggle has been updated');

        yield put(quickToggleSuccess(releaseToggle));
    } catch (err) {
        yield put(quickToggleFailed(releaseToggle));
    }
}

export function* quickToggleSaga() {
    yield* takeEvery(QUICK_TOGGLE, toggle);
}
