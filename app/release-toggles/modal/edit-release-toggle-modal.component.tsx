import { Card, CardText } from 'material-ui/Card';
import * as React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { ReleaseToggle, ReleaseTogglesState } from '../release-toggles.state';
import { EditToggleNameComponent } from './form/edit-toggle-name.component';
import { EditToggleDescriptionComponent } from './form/edit-toggle-description.component';
import { EditToggleActiveComponent } from './form/edit-toggle-active.component';
import { EditToggleCategoryComponent } from './form/edit-toggle-category.component';

interface Props {
    releaseToggles: ReleaseTogglesState;
    hideEditReleaseTogglesModal();
    requestEditReleaseToggle(releaseToggle: ReleaseToggle);
    onEditFormCategoryChanged(value: string);
    onEditFormNameChanged(value: string);
    onEditFormDescriptionChanged(value: string);
    onEditFormActiveChanged(active: boolean);
}

export class EditReleaseToggleModal extends React.Component<Props, any> {

    constructor(props, context) {
        super(props, context);

        this.requestEditReleaseToggle = this.requestEditReleaseToggle.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    requestEditReleaseToggle() {
        this.props.requestEditReleaseToggle(this.props.releaseToggles.editingReleaseToggle);
        this.props.hideEditReleaseTogglesModal();
    }

    handleCloseModal() {
        this.props.hideEditReleaseTogglesModal();
    }

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleCloseModal}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.requestEditReleaseToggle}
            />
        ];

        return (
            <div>
                <Dialog
                    title="Edit Toggle"
                    modal={false}
                    actions={actions}
                    open={this.props.releaseToggles.showeEditReleaseToggleModal}
                    onRequestClose={this.handleCloseModal}
                >
                    <EditToggleCategoryComponent
                        releaseToggles={this.props.releaseToggles}
                        onEditFormCategoryChanged={this.props.onEditFormCategoryChanged} />
                    <EditToggleNameComponent
                        releaseToggles={this.props.releaseToggles}
                        onEditFormNameChanged={this.props.onEditFormNameChanged} />
                    <EditToggleDescriptionComponent
                        releaseToggles={this.props.releaseToggles}
                        onEditFormDescriptionChanged={this.props.onEditFormDescriptionChanged} />
                    <EditToggleActiveComponent
                        releaseToggles={this.props.releaseToggles}
                        onEditFormActiveChanged={this.props.onEditFormActiveChanged} />
                </Dialog>
            </div>
        );
    }
}
; ; ;