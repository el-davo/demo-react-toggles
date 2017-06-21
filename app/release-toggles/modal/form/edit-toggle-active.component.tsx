import { ReleaseTogglesState } from '../../release-toggles.state';
import * as React from 'react';
import Toggle from 'material-ui/Toggle';

interface Props {
    releaseToggles: ReleaseTogglesState;
    onEditFormActiveChanged(active: boolean);
}

export class EditToggleActiveComponent extends React.Component<Props, any> {

    constructor(props, context) {
        super(props, context);

        this.onEditFormActiveChanged = this.onEditFormActiveChanged.bind(this);
    }

    onEditFormActiveChanged(event, active: boolean) {
        this.props.onEditFormActiveChanged(active);
    }

    render() {
        return (
            <Toggle
                style={{width: 100, marginTop: 20}}
                label="Active"
                defaultToggled={this.props.releaseToggles.editingReleaseToggle.active}
                onToggle={this.onEditFormActiveChanged}
            />
        );
    }
}
