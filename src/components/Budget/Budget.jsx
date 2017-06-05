import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

import * as budgetActions from '../../actions/budgetActions';

class Budget extends Component {
  constructor (props, context) {
    super(props, context);
  }

  componentWillMount () {
    this.props.actions.recoverDataFromLocalStorage();
  }

  recoverDataFromLocalStorage () {
    this.props.actions.recoverDataFromLocalStorage();
  }

  render () {
    return (
      <div className="container col-xs-12 col-sm-6 col-lg-4">
        {
          (this.props.name && this.props.email && this.props.phone && this.props.category && this.props.subCategory) ?
            <div>
              <h6 className="alert alert-info">Tienes un presupuesto a medias</h6>
              <p className="alert alert-warning">Pulsa en continuar para recuperar tu presupuesto</p>
              <button className="btn btn-primary btn-lg btn-block" onClick={() => this.props.router.push('/details')}>Continuar</button>
            </div>
          : (this.props.description && this.props.category && this.props.subCategory) ?
            <div>
              <h6 className="alert alert-info">Tienes un presupuesto a medias</h6>
              <p className="alert alert-warning">Pulsa en continuar para recuperar tu presupuesto</p>
              <button className="btn btn-primary btn-lg btn-block" onClick={() => this.props.router.push('/contact')}>Continuar</button>
            </div>
          : (this.props.description) ?
            <div>
              <h6 className="alert alert-info">Tienes un presupuesto a medias</h6>
              <p className="alert alert-warning">Pulsa en continuar para recuperar tu presupuesto</p>
              <button className="btn btn-primary btn-lg btn-block" onClick={() => this.props.router.push('/category')}>Continuar</button>
            </div>
          :
            <div>
              <h6 className="alert alert-info">SOLICITA UN NUEVO PRESUPUESTO</h6>
              <button className="btn btn-primary btn-lg btn-block" onClick={() => this.props.router.push('/description')}>Comenzar</button>
            </div>
        }
      </div>
    )
  }
}

Budget.propTypes = {
  description: PropTypes.string,
  estimatedTime: PropTypes.string,
  category: PropTypes.string,
  subCategory: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  price: PropTypes.string
}

function mapStateToProps (state) {
  return {
    description: state.description.description,
    estimatedTime: state.description.estimatedTime,
    category: state.category.category,
    subCategory: state.category.subCategory,
    name: state.contact.name,
    email: state.contact.email,
    phone: state.contact.phone,
    price: state.category.price
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators ({...budgetActions}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Budget);
