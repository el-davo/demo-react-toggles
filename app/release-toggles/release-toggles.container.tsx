import { ReleaseToggle, ReleaseTogglesState } from './release-toggles.state';
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './release-toggles.actions';
import { ReleaseTogglesComponent } from './release-toggles.component';
import EditReleaseToggleModalContainer from './modal/edit-release-toggle-modal.container';

interface Props {
  releaseToggles: ReleaseTogglesState;
  actions: Actions;
}

interface Actions {
  fetchReleaseToggles();
  quickToggle(releaseToggle: ReleaseToggle);
}

const ReleaseTogglesContainer: React.StatelessComponent<Props> = (props) => {
  return (
    <div>
      <ReleaseTogglesComponent
        releaseToggles={props.releaseToggles}
        fetchReleaseToggles={props.actions.fetchReleaseToggles}
        quickToggle={props.actions.quickToggle} />
      <EditReleaseToggleModalContainer />
    </div>
  );
};

function mapStateToProps(state, ownProps) {
  return {
    releaseToggles: state.releaseToggles
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect<{}, {}, any>(
  mapStateToProps,
  mapDispatchToProps
)(ReleaseTogglesContainer);
