import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

import Select from 'react-select';
import 'react-select/dist/react-select.css';

import * as contactActions from '../../actions/contactActions';

class Contact extends Component {
  constructor (props, context) {
    super(props, context);

    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.checkMail = this.checkMail.bind(this);
    this.handleStepThree = this.handleStepThree.bind(this);
    this.recoverDataFromLocalStorage = this.recoverDataFromLocalStorage.bind(this);
  }

  componentWillMount () {
    this.props.actions.recoverDataFromLocalStorage();
  }

  recoverDataFromLocalStorage () {
    this.props.actions.recoverDataFromLocalStorage();
    console.log('will mounr', this.props);
  }

  handleName (event) {
    const name = event.target.value;
    this.props.actions.handleName(name);
  }

  handleEmail (event) {
    const email = event.target.value;
    this.props.actions.handleEmail(email);
    this.props.actions.checkMail(email);
  }

  handlePhone (event) {
    const phone = event.target.value;
    this.props.actions.handlePhone(phone);
  }

  checkMail (email) {
    this.props.actions.checkMail(email);
  }

  handleStepThree (event) {
    event.preventDefault();
    this.props.actions.checkMail(this.props.email);

    const options = {
      name: this.props.name,
      email: this.props.email,
      phone: this.props.phone
    };

    this.props.actions.handleStepThree(options);

    if (!this.props.emailError) {
      this.props.router.push('/details');
    }
  }

  render () {
    return (
      <div className="container col-xs-12 col-sm-6 col-lg-4">
        <h6 className="alert alert-info">Datos de contacto</h6>
        {
          this.props.category && this.props.subCategory ?
          <form method='post' onSubmit={this.handleStepThree}>
            <div className="form-group">
              <fieldset className="form-group">
                <label htmlFor="name">*Nombre:</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={this.props.name}
                  required
                  onChange={this.handleName}/>
                <br/>
                <label htmlFor="email">*Email:</label>
                {
                  this.props.emailError &&
                  <div className="alert alert-warning">El email no debe contener @hotmail</div>
                }
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={this.props.email}
                  required
                  onChange={this.handleEmail}/>
                <br/>
                <label htmlFor="phone">*Teléfono:</label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  value={this.props.phone}
                  required
                  onChange={this.handlePhone}/>
              </fieldset>
            </div>
            <button type="submit" className="btn btn-primary btn-lg btn-block">Continuar</button>
            <button className="btn btn-block" onClick= {() => this.props.router.push('/category')}>Volver</button>
          </form>
          :
          <div className="alert alert-warning">
            <p>No has seleccionado una categoría para tu presupuesto.</p>
            <p>Por favor vuelve al paso anterior para completar los datos necesarios. Gracias!</p>
            <button className="btn btn-block btn-primary" onClick= {() => this.props.router.push('/category')}>Volver</button>
          </div>
        }

      </div>
    )
  }
}

Contact.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  emailError: PropTypes.bool
}

function mapStateToProps (state) {
  return {
    category: state.category.category,
    subCategory: state.category.subCategory,
    name: state.contact.name,
    email: state.contact.email,
    recovedEmail: state.budget.email,
    phone: state.contact.phone,
    emailError: state.contact.emailError
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators ({...contactActions}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
