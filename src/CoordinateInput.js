import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'antd';
import validator from './coordinateDataValidator';
const FormItem = Form.Item;

//TPS0074,0.6990,-0.3233,1.6191,02.11.2018,20:38:48.0

class CoordinateInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      point: '',
      isValid: null,
    }
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onBlur(e) {
    const { point } = this.state;
    if (!point) {
      return this.setState({ isValid: false });
    }
    const [id, x, y, z, date, time] = point.split(",");
    const isValid = validator(id, x, y, z, date, time);
    this.setState({ isValid });
    this.props.onData(this.props.name, { x, y, z, valid: isValid });
  }

  render() {
    const { point, isValid } = this.state;
    const { label, itemLayout } = this.props;

    return (
      <FormItem
        {...itemLayout}
        hasFeedback
        label={label}
        validateStatus={isValid === null ? '' : isValid ? 'success' : 'error'}
        help={isValid === null ? '' : !isValid ? 'Please enter a valid format' : ''}
      >
        <Input
          name="point"
          value={point}
          type="text"
          onChange={this.onChange}
          onBlur={this.onBlur}
          placeholder="TPS0000,X,Y,Z,DD.MM.YY,HH.MM.SS.M"
        />
      </FormItem>
    );
  }
}

CoordinateInput.propTypes = {
  label: PropTypes.string.isRequired,
  itemLayout: PropTypes.shape({
    labelCol: PropTypes.shape({
      xs: PropTypes.shape({
        span: PropTypes.number.isRequired
      }),
      sm: PropTypes.shape({
        span: PropTypes.number.isRequired
      })
    }).isRequired,
    wrapperCol: PropTypes.shape({
      xs: PropTypes.shape({
        span: PropTypes.number.isRequired
      }),
      sm: PropTypes.shape({
        span: PropTypes.number.isRequired
      })
    }).isRequired
  }).isRequired,
  onData: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

CoordinateInput.defaultProps = {
  itemLayout: {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 5 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 12 },
    }
  }
};

export default CoordinateInput;