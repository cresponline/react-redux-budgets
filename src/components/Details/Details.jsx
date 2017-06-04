import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

import * as detailsActions from '../../actions/detailsActions';

class Details extends Component {
  constructor (props, context) {
    super(props, context);

    this.confirmBudget = this.confirmBudget.bind(this);
    this.recoverDataFromLocalStorage = this.recoverDataFromLocalStorage.bind(this);
  }

  componentWillMount () {
    this.props.actions.recoverDataFromLocalStorage();
  }

  recoverDataFromLocalStorage () {
    this.props.actions.recoverDataFromLocalStorage();
  }

  confirmBudget (event) {
    event.preventDefault();
    this.props.actions.confirmBudget();
    this.props.router.push('/');
  }

  render () {
    return (

      <div className="container col-xs-12 col-sm-6 col-lg-4">
        <h6 className="alert alert-info">RESUMEN DE TU PRESUPUESTO</h6>
        {
          this.props.name && this.props.email && this.props.phone ?
          <form method='post' className="alert alert-success" onSubmit={this.confirmBudget}>
            <p>Prespuesto recibido correctamente!</p>
            <p>Revisa los datos antes de confirmar, recuerda que puedes cambiar los datos antes de confirmar</p>

            <ul className="list-group list-group-flush">
              <li className="list-group-item"><strong>Nombre: </strong>{this.props.name}</li>
              <li className="list-group-item"><strong>Em@il: </strong> {this.props.email}</li>
              <li className="list-group-item"><strong>Teléfono: </strong>{this.props.phone}</li>
              <li className="list-group-item"><strong>Descripción: </strong>{this.props.description}</li>
              <li className="list-group-item"><strong>Fecha estimada: </strong>{this.props.estimatedTime}</li>
              <li className="list-group-item"><strong>Categoria:</strong>{this.props.category}</li>
              <li className="list-group-item"><strong>Subcategoría:</strong> {this.props.subCategory}</li>
              <li className="list-group-item"><strong>Precio:</strong> {this.props.price}</li>
            </ul>
            <button className="btn btn-primary btn-lg btn-block" type="submit">Confirmar presupuesto</button>
            <button className="btn btn-block" onClick= {() => this.props.router.push('/contact')}>Volver</button>
          </form>
          :
          <div className="alert alert-warning">
            <p>Parece que nos faltan datos para completar tu presupuesto.</p>
            <p>Por favor vuelve al paso anterior para completar los datos necesarios. Gracias!</p>
            <button className="btn btn-block btn-primary" onClick= {() => this.props.router.push('/contact')}>Volver</button>
          </div>
        }
      </div>
    )
  }
}

Details.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  description: PropTypes.string,
  estimatedTime: PropTypes.string,
  category: PropTypes.string,
  subCategory: PropTypes.string,
  price: PropTypes.string,
  categoryOptions: PropTypes.array,
  subCategoryOptions: PropTypes.array,
  priceOptions: PropTypes.array
}

function mapStateToProps (state) {
  return {
    name: state.contact.name,
    email: state.contact.email,
    phone: state.contact.phone,
    description: state.description.description,
    estimatedTime: state.description.estimatedTime,
    category: state.category.category,
    subCategory: state.category.subCategory,
    price: state.category.price
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators ({...detailsActions}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);
