import { ReleaseToggle, ReleaseToggles, releaseToggles, ReleaseTogglesState } from './release-toggles.state';
import * as actionTypes from './release-toggles.action-types';

interface Action {
  type: string;
  releaseToggles?: ReleaseToggles;
  releaseToggle?: ReleaseToggle;
  value?: string;
  active?: boolean;
}

export function releaseTogglesReducer(state: ReleaseTogglesState = releaseToggles, action: Action): ReleaseTogglesState {
  switch (action.type) {
    case actionTypes.FETCH_RELEASE_TOGGLES:
      return { ...state, isFetchingReleaseToggles: true };
    case actionTypes.UPDATE_RELEASE_TOGGLES:
      return { ...state, isFetchingReleaseToggles: false, releaseToggles: action.releaseToggles };
    case actionTypes.FETCH_RELEASE_TOGGLES_FAILED:
      return { ...state, isFetchingReleaseToggles: false };
    case actionTypes.SHOW_EDIT_RELEASE_TOGGLES_MODAL:
      return { ...state, showeEditReleaseToggleModal: true, editingReleaseToggle: action.releaseToggle };
    case actionTypes.HIDE_EDIT_RELEASE_TOGGLES_MODAL:
      return { ...state, showeEditReleaseToggleModal: false, editingReleaseToggle: null };
    case actionTypes.QUICK_TOGGLE:
      return {
        ...state, releaseToggles:
        { ...state.releaseToggles, [action.releaseToggle.id]: { ...action.releaseToggle, active: !action.releaseToggle.active } }
      };
    case actionTypes.QUICK_TOGGLE_FAILED:
      return {
        ...state, releaseToggles:
        { ...state.releaseToggles, [action.releaseToggle.id]: { ...action.releaseToggle, active: !action.releaseToggle.active } }
      };
    case actionTypes.EDIT_RELEASE_TOGGLE_SUCCESS:
      return { ...state, releaseToggles: { ...state.releaseToggles, [action.releaseToggle.id]: action.releaseToggle } };
    case actionTypes.ON_EDIT_FORM_NAME_CHANGED:
      return { ...state, editingReleaseToggle: { ...state.editingReleaseToggle, name: action.value } };
    case actionTypes.ON_EDIT_FORM_DESCRIPTION_CHANGED:
      return { ...state, editingReleaseToggle: { ...state.editingReleaseToggle, description: action.value } };
    case actionTypes.ON_EDIT_FORM_ACTIVE_CHANGED:
      return { ...state, editingReleaseToggle: { ...state.editingReleaseToggle, active: action.active } };
    case actionTypes.ON_EDIT_FORM_CATEGORY_CHANGED:
      return { ...state, editingReleaseToggle: { ...state.editingReleaseToggle, category: action.value } };
    default:
      return state;
  }
}
