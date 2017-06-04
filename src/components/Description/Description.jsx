import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

import Select from 'react-select';
import 'react-select/dist/react-select.css';

import * as descriptionActions from '../../actions/DescriptionActions';

export class Description extends Component {
  constructor (props, context) {
    super(props, context);

    this.handleDescription = this.handleDescription.bind(this);
    this.handleEstimatedTime = this.handleEstimatedTime.bind(this);
    this.handleStepOne = this.handleStepOne.bind(this);
    this.recoverDataFromLocalStorage = this.recoverDataFromLocalStorage.bind(this);
  }

  componentWillMount () {
    this.props.actions.recoverDataFromLocalStorage();
  }

  recoverDataFromLocalStorage () {
    this.props.actions.recoverDataFromLocalStorage();
  }

  handleDescription (event) {
    const description = event.target.value;
    this.props.actions.handleDescription(description);
  }

  handleEstimatedTime (option) {
    const estimatedTime = option.value;
    this.props.actions.handleEstimatedTime(estimatedTime);
  }

  handleStepOne (event) {
    event.preventDefault();
    const options = {
      description: this.props.description,
      estimatedTime: this.props.estimatedTime
    };

    this.props.actions.handleStepOne(options);
    this.props.router.push('/category');
  }

  render () {
    return (
      <div className="container col-xs-12 col-sm-6 col-lg-4">
        <h6 className="alert alert-info">Descripción del presupuesto</h6>
        <form method='post' onSubmit={this.handleStepOne}>
          <div className="form-group">
            <label htmlFor="description">*¿Qué necesitas?:</label>
            <br/>
            <textarea
              className="form-control"
              name="description"
              rows="5"
              id="description"
              value={this.props.description}
              required
              onChange={this.handleDescription}
           />
          </div>
          <div className="form-group">
            <label htmlFor="estimatedTime">¿Cuándo quieres realizar el trabajo?:</label>
            <Select
              name="estimatedTime"
              value={this.props.estimatedTime}
              options={this.props.estimatedTimeOptions}
              onChange={this.handleEstimatedTime}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-lg btn-block">Continuar</button>
        </form>
      </div>
    )
  }
}

Description.propTypes = {
  description: PropTypes.string,
  estimatedTime: PropTypes.string
}

function mapStateToProps (state) {
  return {
    description: state.description.description,
    estimatedTime: state.description.estimatedTime,
    estimatedTimeOptions: state.description.estimatedTimeOptions
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators ({...descriptionActions}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Description);
