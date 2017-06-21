import { Card, CardText } from 'material-ui/Card';
import * as React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { ReleaseToggle, ReleaseTogglesState } from './release-toggles.state';

interface Props {
    releaseToggle: ReleaseToggle;
    showEditReleaseTogglesModal(releaseToggle: ReleaseToggle);
}

export class ReleaseTogglesOptions extends React.Component<Props, any> {

    constructor(props, context) {
        super(props, context);

        this.showEditReleaseTogglesModal = this.showEditReleaseTogglesModal.bind(this);
    }

    showEditReleaseTogglesModal() {
        this.props.showEditReleaseTogglesModal(this.props.releaseToggle);
    }

    render() {
        return (
            <IconMenu
                iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
                targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            >
                <MenuItem primaryText="Edit" onTouchTap={this.showEditReleaseTogglesModal} />
            </IconMenu>
        );
    }
}
