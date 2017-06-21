import { ReleaseTogglesState } from '../../release-toggles.state';
import * as React from 'react';
import TextField from 'material-ui/TextField';

interface Props {
    releaseToggles: ReleaseTogglesState;
    onEditFormDescriptionChanged(value: string);
}

export class EditToggleDescriptionComponent extends React.Component<Props, any> {

    constructor(props, context) {
        super(props, context);

        this.onEditFormDescriptionChanged = this.onEditFormDescriptionChanged.bind(this);
    }

    onEditFormDescriptionChanged(event) {
        this.props.onEditFormDescriptionChanged(event.target.value);
    }

    render() {
        return (
            <TextField
                hintText="Description"
                floatingLabelText="Description"
                fullWidth={true}
                multiLine={true}
                value={this.props.releaseToggles.editingReleaseToggle.description}
                onChange={this.onEditFormDescriptionChanged}
            />
        );
    }
}
