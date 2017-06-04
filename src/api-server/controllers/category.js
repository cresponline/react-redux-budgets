//GET - Return all categories from habitissimo rest
var Client = require('node-rest-client').Client;
var client = new Client();
var BaseURL = 'http://api.habitissimo.es';

exports.findAllCategories = function(req, res) {
	client.get(BaseURL + '/category/list', function (data, response) {
    console.log('GET /catgory/list');
    if (data.error === 'error 404, not found') {
      res.status(404).jsonp(data);
    } else {
			res.header("Access-Control-Allow-Origin", "*");
      res.status(200).jsonp(data);
    }
	});
};
//GET - Return suBcategories By CategoryID from habitissimo rest
exports.findSubCategoryByCategoryId = function(req, res) {
  client.get(BaseURL + '/category/list/' + req.params.id, function (data, response) {
    console.log('GET /catgory/list/' + req.params.id);
    if (data.error === 'error 404, not found') {
      res.status(404).jsonp(data);
    } else {
			res.header("Access-Control-Allow-Origin", "*");
      res.status(200).jsonp(data);
    }
	});
};
