import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

import Select from 'react-select';
import 'react-select/dist/react-select.css';

import * as categoryActions from '../../actions/categoryActions';

class Category extends Component {
  constructor (props, context) {
    super(props, context);

    this.handleCategory = this.handleCategory.bind(this);
    this.handleSubCategory = this.handleSubCategory.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.fetchCategoryOptions = this.fetchCategoryOptions.bind(this);
    this.fetchSubCategoryOptions = this.fetchSubCategoryOptions.bind(this);
    this.fetchPriceOptions = this.fetchPriceOptions.bind(this);
    this.handleStepTwo = this.handleStepTwo.bind(this);
    this.recoverDataFromLocalStorage = this.recoverDataFromLocalStorage.bind(this);
    this.fetchCategories = this.fetchCategories.bind(this);
    this.fetchSubCategories = this.fetchSubCategories.bind(this);
  }

  componentWillMount () {
    this.props.actions.recoverDataFromLocalStorage();
    this.props.actions.fetchCategories();

    if (JSON.parse(localStorage.getItem('category'))) {
      this.props.actions.fetchSubCategories(JSON.parse(localStorage.getItem('category')));
    }
  }

  recoverDataFromLocalStorage () {
    this.props.actions.recoverDataFromLocalStorage();
  }

  handleCategory (category) {
    this.props.actions.fetchSubCategories(category.value);
    this.props.actions.handleCategory(category.value);
  }

  handleSubCategory (subCategory) {
    this.props.actions.handleSubCategory(subCategory.value);
  }

  handlePrice (option) {
    const price = option.value;
    this.props.actions.handlePrice(price);
  }

  fetchCategories () {
    this.props.actions.fetchCategories();
  }

  fetchSubCategories (categoryId) {
    this.props.actions.fetchSubCategories(categoryId);
  }

  fetchCategoryOptions () {
    if (typeof this.props.categoryOptions.length) {
      return this.props.categoryOptions.map(category => (
        {
          value: category.id,
          label: category.name,
          clearableValue: false
        }
      ));
    }
  }

  fetchSubCategoryOptions () {
    return this.props.subCategoryOptions.map(subCategory => (
      {
        value: subCategory.id,
        label: subCategory.name,
        clearableValue: false
      }
    ));
  }

  fetchPriceOptions () {
    return this.props.priceOptions;
  }

  handleStepTwo (event) {
    event.preventDefault();
    const options = {
      category: this.props.category,
      subCategory: this.props.subCategory,
      price: this.props.price
    };

    this.props.actions.handleStepTwo(options);
    this.props.router.push('/contact');
  }

  render () {
    return (

      <div className="container col-xs-12 col-sm-6 col-lg-4">
        <h6 className="alert alert-info">Categoría de tu presupuesto</h6>
        { this.props.description ?
          <form method='post' onSubmit={this.handleStepTwo}>
            <div className="form-group">
              <label htmlFor="categories">*¿A qué categoría corresponde el trabajo?:</label>
              <br/>
              <Select
                name="categories"
                value={this.props.category}
                options={this.fetchCategoryOptions()}
                onChange={this.handleCategory}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subCategories">Tipo de trabajo:</label>
              <Select
                name="subCategories"
                value={this.props.subCategory}
                options={this.fetchSubCategoryOptions()}
                onChange={this.handleSubCategory}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">*¿Qué preferencia tienes para el trabajo?:</label>
              <Select
                name="price"
                value={this.props.price}
                options={this.fetchPriceOptions()}
                onChange={this.handlePrice}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-lg btn-block">Continuar</button>
            <button className="btn btn-block" onClick= {() => this.props.router.push('/description')}>Volver</button>
          </form>
          :
          <div className="alert alert-warning">
            <p>No has seleccionado una descripción para tu presupuesto.</p>
            <p>Por favor vuelve al inicio para completar los datos necesarios. Gracias!</p>
            <button className="btn btn-block btn-primary" onClick= {() => this.props.router.push('/description')}>Volver</button>
          </div>
        }
      </div>

    )
  }
}

Category.propTypes = {
  category: PropTypes.string,
  subCategory: PropTypes.string,
  price: PropTypes.string,
  categoryOptions: PropTypes.array,
  subCategoryOptions: PropTypes.array,
  priceOptions: PropTypes.array
}

function mapStateToProps (state) {
  return {
    description: state.description.description,
    category: state.category.category,
    subCategory: state.category.subCategory,
    price: state.category.price,
    categoryOptions: state.category.categoryOptions,
    subCategoryOptions: state.category.subCategoryOptions,
    priceOptions: state.category.priceOptions
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators ({...categoryActions}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);
