import { ReleaseTogglesState } from '../../release-toggles.state';
import * as React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

interface Props {
    releaseToggles: ReleaseTogglesState;
    onEditFormCategoryChanged(value: string);
}

export class EditToggleCategoryComponent extends React.Component<Props, any> {

    constructor(props, context) {
        super(props, context);

        this.onEditFormCategoryChanged = this.onEditFormCategoryChanged.bind(this);
    }

    onEditFormCategoryChanged(event, index, value) {
        this.props.onEditFormCategoryChanged(value);
    }

    render() {
        return (
            <SelectField
                fullWidth={true}
                floatingLabelText="Category"
                value={this.props.releaseToggles.editingReleaseToggle.category}
                onChange={this.onEditFormCategoryChanged}
            >
                <MenuItem value={'Dashboard'} primaryText="Dashboard" />
                <MenuItem value={'Unity'} primaryText="Unity" />
                <MenuItem value={'Admin'} primaryText="Admin" />
            </SelectField>
        );
    }
}
