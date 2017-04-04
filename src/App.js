import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {FormGroup, ControlLabel, Grid, Row, Col} from 'react-bootstrap';

let DatePicker = require('react-bootstrap-date-picker');

class App extends Component {
  constructor() {
    super();
    let value = new Date().toISOString();
    this.state = {
      value: value
    };
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <div>
            <FormGroup>
            <ControlLabel>Select Date</ControlLabel>
            <DatePicker id="example-datepicker" value={this.state.value} onChange={this.handleChange} />
            </FormGroup>
          </div>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

class AppContainer extends Component {
  static propTypes = {
    auth: PropTypes.object,
    profile: PropTypes.object,
    question: PropTypes.object,
    user: PropTypes.object,
    tags: PropTypes.object,
    reports: PropTypes.array,
    loaded: PropTypes.bool,
    loading: PropTypes.bool,
    err: PropTypes.object,
    dispatch: PropTypes.func.isRequired
  };

  render() {
    const { status, dispatch, loaded, loading, err } = this.props;
    return <Home
      profile={profile}
      loading={loading}
      loaded={loaded}
      err={err}
      dispatch={dispatch}
      {...bindActionCreators({
        ...questionActions,
        ...userActions,
        ...tagActions,
        ...answerActions,
      }, dispatch)} />;
  }
}

AppContainer = connect(state => ({
  question: state.questions.get('question'),
  user: state.users.get('user'),
  reports: state.users.get('reports'),
  tags: state.tags.get('tags'),
}))(AppContainer);

export default AppContainer;
