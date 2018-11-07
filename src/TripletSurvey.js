import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'antd';
import SuperInput from './SuperInput';

class TripletSurvey extends Component {
  constructor(props) {
    super(props);
    this.onData = this.onData.bind(this);
  }

  onData(point, data) {
    this.props.onData(this.props.surface, {
      [point]: data
    });
  }

  render() {
    return (
      <Form>
        <SuperInput label="Point 1" onData={this.onData} name="point1" />
        <SuperInput label="Point 2" onData={this.onData} name="point2" />
        <SuperInput label="Point 3" onData={this.onData} name="point3" />
      </Form>
    );
  }
}

TripletSurvey.propTypes = {
  surface: PropTypes.string.isRequired,
  onData: PropTypes.func.isRequired
}

export default TripletSurvey;
