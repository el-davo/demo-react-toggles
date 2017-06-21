import { Card, CardText } from 'material-ui/Card';
import * as React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { LoadingComponent } from '../common/loading.component';
import Toggle from 'material-ui/Toggle';
import { ReleaseToggle, ReleaseTogglesState } from './release-toggles.state';
import ReleaseTogglesOptionsContainer from './release-toggles-options.container';

interface Props {
  releaseToggles: ReleaseTogglesState;
  fetchReleaseToggles();
  quickToggle(releaseToggle: ReleaseToggle);
}

export class ReleaseTogglesComponent extends React.Component<Props, any> {

  constructor(props, context) {
    super(props, context);

    this.quickToggle = this.quickToggle.bind(this);
  }

  componentDidMount() {
    this.props.fetchReleaseToggles();
  }

  quickToggle(releaseToggle: ReleaseToggle) {
    this.props.quickToggle(releaseToggle);
  }

  render() {
    return (
      <Card>
        <CardText>
          {
            !this.props.releaseToggles.isFetchingReleaseToggles ? (
              <Table>
                <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                  <TableRow>
                    <TableHeaderColumn>Category</TableHeaderColumn>
                    <TableHeaderColumn>Name</TableHeaderColumn>
                    <TableHeaderColumn>Description</TableHeaderColumn>
                    <TableHeaderColumn>Active</TableHeaderColumn>
                    <TableHeaderColumn>Created</TableHeaderColumn>
                    <TableHeaderColumn></TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                  {
                    Object.keys(this.props.releaseToggles.releaseToggles).map((key) => {
                      return <TableRow key={key}>
                        <TableRowColumn>{this.props.releaseToggles.releaseToggles[key].category}</TableRowColumn>
                        <TableRowColumn>{this.props.releaseToggles.releaseToggles[key].name}</TableRowColumn>
                        <TableRowColumn>{this.props.releaseToggles.releaseToggles[key].description}</TableRowColumn>
                        <TableRowColumn>
                          <Toggle
                            onToggle={() => this.quickToggle(this.props.releaseToggles.releaseToggles[key])}
                            defaultToggled={this.props.releaseToggles.releaseToggles[key].active}
                          />
                        </TableRowColumn>
                        <TableRowColumn>{this.props.releaseToggles.releaseToggles[key].created}</TableRowColumn>
                        <TableRowColumn>
                          <ReleaseTogglesOptionsContainer releaseToggle={this.props.releaseToggles.releaseToggles[key]} />
                        </TableRowColumn>
                      </TableRow>;
                    })
                  }
                </TableBody>
              </Table>
            ) : (
                <LoadingComponent />
              )
          }
        </CardText>
      </Card>
    );
  }
}
