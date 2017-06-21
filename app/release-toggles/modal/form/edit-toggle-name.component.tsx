import { ReleaseTogglesState } from '../../release-toggles.state';
import * as React from 'react';
import TextField from 'material-ui/TextField';

interface Props {
    releaseToggles: ReleaseTogglesState;
    onEditFormNameChanged(value: string);
}

export class EditToggleNameComponent extends React.Component<Props, any> {

    constructor(props, context) {
        super(props, context);

        this.onEditFormNameChanged = this.onEditFormNameChanged.bind(this);
    }

    onEditFormNameChanged(event) {
        this.props.onEditFormNameChanged(event.target.value);
    }

    render() {
        return (
            <TextField
                hintText="Name"
                floatingLabelText="Name"
                fullWidth={true}
                value={this.props.releaseToggles.editingReleaseToggle.name}
                onChange={this.onEditFormNameChanged}
            />
        );
    }
}
