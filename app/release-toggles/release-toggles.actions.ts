import { ReleaseToggle, ReleaseToggles } from './release-toggles.state';
import * as actionTypes from './release-toggles.action-types';

export function fetchReleaseToggles() {
    return { type: actionTypes.FETCH_RELEASE_TOGGLES };
}

export function updateReleaseToggles(releaseToggles: ReleaseToggles) {
    return { type: actionTypes.UPDATE_RELEASE_TOGGLES, releaseToggles };
}

export function fetchReleaseTogglesFailed() {
    return { type: actionTypes.FETCH_RELEASE_TOGGLES_FAILED };
}

export function showEditReleaseTogglesModal(releaseToggle: ReleaseToggle) {
    return { type: actionTypes.SHOW_EDIT_RELEASE_TOGGLES_MODAL, releaseToggle };
}

export function quickToggle(releaseToggle: ReleaseToggle) {
    return { type: actionTypes.QUICK_TOGGLE, releaseToggle };
}

export function quickToggleSuccess(releaseToggle: ReleaseToggle) {
    return { type: actionTypes.QUICK_TOGGLE_SUCCESS, releaseToggle };
}

export function quickToggleFailed(releaseToggle: ReleaseToggle) {
    return { type: actionTypes.QUICK_TOGGLE_FAILED, releaseToggle };
}

export function hideEditReleaseTogglesModal() {
    return { type: actionTypes.HIDE_EDIT_RELEASE_TOGGLES_MODAL };
}

export function requestEditReleaseToggle(releaseToggle: ReleaseToggle) {
    return { type: actionTypes.REQUEST_EDIT_RELEASE_TOGGLE, releaseToggle };
}

export function editReleaseToggleSuccess(releaseToggle: ReleaseToggle) {
    return { type: actionTypes.EDIT_RELEASE_TOGGLE_SUCCESS, releaseToggle };
}

export function editReleaseToggleFailed(releaseToggle: ReleaseToggle) {
    return { type: actionTypes.EDIT_RELEASE_TOGGLE_FAILED, releaseToggle };
}

export function onEditFormCategoryChanged(value: string) {
    return { type: actionTypes.ON_EDIT_FORM_CATEGORY_CHANGED, value };
}

export function onEditFormNameChanged(value: string) {
    return { type: actionTypes.ON_EDIT_FORM_NAME_CHANGED, value };
}

export function onEditFormDescriptionChanged(value: string) {
    return { type: actionTypes.ON_EDIT_FORM_DESCRIPTION_CHANGED, value };
}

export function onEditFormActiveChanged(active: boolean) {
    return { type: actionTypes.ON_EDIT_FORM_ACTIVE_CHANGED, active };
}
