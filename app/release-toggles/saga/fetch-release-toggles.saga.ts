import { ReleaseToggle, ReleaseToggles } from '../release-toggles.state';
import { updateReleaseToggles } from '../release-toggles.actions';
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { FETCH_RELEASE_TOGGLES } from '../release-toggles.action-types';
import { fetchReleaseToggles } from '../service/release-toggles.service';
import { fetchReleaseTogglesFailed } from '../release-toggles.actions';

function* fetch() {
    try {
        const releaseToggles: ReleaseToggle[] = yield call(fetchReleaseToggles);
        const optimizedReleaseToggles = {} as ReleaseToggles;

        releaseToggles.map((releaseToggle) => {
            optimizedReleaseToggles[releaseToggle.id] = releaseToggle;
        });

        yield put(updateReleaseToggles(optimizedReleaseToggles));
    } catch (err) {
        yield put(fetchReleaseTogglesFailed());
    }
}

export function* fetchReleaseTogglesSaga() {
    yield* takeEvery(FETCH_RELEASE_TOGGLES, fetch);
}
