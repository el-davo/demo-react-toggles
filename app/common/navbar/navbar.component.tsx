import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import { darkWhite } from 'material-ui/styles/colors';
import UserIcon from 'material-ui/svg-icons/action/face';
import * as React from 'react';

const style = {
  marginBottom: 20,
  backgroundColor: '#00BCD4'
};

export const NavbarComponent = () => (
  <Toolbar style={style}>
    <ToolbarGroup />
    <ToolbarGroup lastChild={true}>
      <IconButton>
        <UserIcon color={darkWhite} />
      </IconButton>
    </ToolbarGroup>
  </Toolbar>
);