import { ReleaseToggle, ReleaseTogglesState } from '../release-toggles.state';
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../release-toggles.actions';
import { EditReleaseToggleModal } from './edit-release-toggle-modal.component';

interface Props {
    releaseToggles: ReleaseTogglesState;
    actions: Actions;
}

interface Actions {
    hideEditReleaseTogglesModal();
    requestEditReleaseToggle(releaseToggle: ReleaseToggle);
    onEditFormCategoryChanged(value: string);
    onEditFormNameChanged(value: string);
    onEditFormDescriptionChanged(value: string);
    onEditFormActiveChanged(active: boolean);
}

const ReleaseTogglesContainer: React.StatelessComponent<Props> = (props) => {
    return (
        <EditReleaseToggleModal
            releaseToggles={props.releaseToggles}
            hideEditReleaseTogglesModal={props.actions.hideEditReleaseTogglesModal}
            requestEditReleaseToggle={props.actions.requestEditReleaseToggle}
            onEditFormCategoryChanged={props.actions.onEditFormCategoryChanged}
            onEditFormNameChanged={props.actions.onEditFormNameChanged}
            onEditFormDescriptionChanged={props.actions.onEditFormDescriptionChanged}
            onEditFormActiveChanged={props.actions.onEditFormActiveChanged} />
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
