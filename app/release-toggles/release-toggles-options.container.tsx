import { ReleaseToggle, ReleaseTogglesState } from './release-toggles.state';
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './release-toggles.actions';
import { ReleaseTogglesOptions } from './release-toggles-options.component';

interface Props {
    releaseToggle: ReleaseToggle;
    actions: Actions;
}

interface Actions {
    showEditReleaseTogglesModal(releaseToggle: ReleaseToggle);
}

const ReleaseTogglesContainer: React.StatelessComponent<Props> = (props) => {
    return (
        <ReleaseTogglesOptions
            releaseToggle={props.releaseToggle}
            showEditReleaseTogglesModal={props.actions.showEditReleaseTogglesModal} />
    );
};

function mapStateToProps(state, ownProps) {
    return {
        releaseToggle: ownProps.releaseToggle
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
