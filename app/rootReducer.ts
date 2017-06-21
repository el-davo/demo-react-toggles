import { routerReducer as routing } from 'react-router-redux';
import { reducer as toastr } from 'react-redux-toastr';
import { combineReducers } from 'redux';
import { releaseTogglesReducer as releaseToggles } from './release-toggles/release-toggles.reducer';

export const rootReducer = combineReducers({
  routing,
  toastr,
  releaseToggles
});
