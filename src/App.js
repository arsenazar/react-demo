import React, {Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as statusActions from './actions/Status';
import logo from './logo.svg';
import './App.css';
import {FormGroup, Grid, Row, Col} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import DatePicker from 'react-bootstrap-date-picker';

class App extends Component {
  constructor(props) {
    super(props);
    let value = new Date().toISOString();
    this.state = {
      value: value
    };
  }
  componentWillMount() {
    this.props.getStatus(this.state.value);
  }
  handleChange = (value, formattedValue) => {
    this.setState({
      value: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
      formattedValue: formattedValue // Formatted String, ex: "11/19/2016"
    });
    this.props.getStatus(value);
  };
  render() {
    const {statusList} = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <Grid>
            <Row>
              <Col xs={4}/>
              <Col xs={4}>
                <img src={logo} className="App-logo" alt="logo" />
                <FormGroup>
                  <DatePicker id="example-datepicker" value={this.state.value} onChange={this.handleChange} />
                </FormGroup>
              </Col>
              <Col xs={4}/>
            </Row>
          </Grid>
        </div>
        <div>
          {
              <BootstrapTable
                data={ statusList }
                pagination>
                <TableHeaderColumn dataField='_id' isKey>ID</TableHeaderColumn>
                <TableHeaderColumn dataField='group'>Group</TableHeaderColumn>
                <TableHeaderColumn dataField='task'>Task</TableHeaderColumn>
                <TableHeaderColumn dataField='target_date'>Date</TableHeaderColumn>
                <TableHeaderColumn dataField='status'>Status</TableHeaderColumn>
              </BootstrapTable>
          }
        </div>
        <div> Copyright, Contact</div>
      </div>
    );
  }
}

class AppContainer extends Component {
  static propTypes = {
    statusList: PropTypes.array,
    loaded: PropTypes.bool,
    loading: PropTypes.bool,
    err: PropTypes.object,
    dispatch: PropTypes.func.isRequired
  };

  render() {
    const { statusList, dispatch, loaded, loading, err } = this.props;
    return <App
      statusList={statusList}
      loading={loading}
      loaded={loaded}
      err={err}
      dispatch={dispatch}
      {...bindActionCreators({
        ...statusActions,
      }, dispatch)} />;
  }
}

AppContainer = connect(state => ({
  statusList: state.statusList.get('statusList'),
}))(AppContainer);

export default AppContainer;
