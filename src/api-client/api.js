import fetch from 'isomorphic-fetch';

const BaseURL = 'http://localhost:3000';

const API = {
  categories: {
    async getAll () {
      const response = await fetch(`${BaseURL}/category/list`);
      const data = await (response.json());
      return data;
    }
  },
  subCategories: {
    async getSubCategories (categoryId) {
      const response = await fetch(`${BaseURL}/category/list/${categoryId}`);
      const data = await response.json();
      return data;
    }
  },
  validation: {
    async isValidMail (email) {
      const response = await fetch(`${BaseURL}/validation/email/${email}`);
      const data = await response.json();
      return data;
    }
  }
}

export default API;
