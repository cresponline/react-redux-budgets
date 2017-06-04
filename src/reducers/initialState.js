const initialState = {
  budget: {
    description: '',
    estimatedTime: '',
    category: '',
    subCategory: '',
    name: '',
    email: '',
    phone: '',
    price: ''
  },
  description: {
    description: '',
    estimatedTime: '',
    estimatedTimeOptions: [
      { value: 'Lo antes posible', label: 'Lo antes posible', clearableValue: false },
      { value: 'De 1 a 3 meses', label: 'De 1 a 3 meses', clearableValue: false },
      { value: 'Más de 3 meses', label: 'Más de 3 meses', clearableValue: false }
    ]
  },
  category: {
    category: '',
    subCategory: '',
    price: '',
    categoryOptions: [],
    subCategoryOptions: [],
    priceOptions: [
      {value: 'Relación calidad/precio', label: 'Relación calidad/precio'},
      {value: 'El mejor precio', label: 'El mejor precio'},
      {value: 'La mejor calidad', label: 'La mejor calidad'},
    ]
  },
  contact: {
    name: '',
    email: '',
    phone: '',
    emailError: true
  },
  details: {
    description: '',
    estimatedTime: '',
    category: '',
    subCategory: '',
    name: '',
    email: '',
    phone: '',
    price: ''
  }
};


export default initialState;
