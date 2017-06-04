var express         = require('express'),
    app             = express(),
    bodyParser      = require('body-parser'),
    methodOverride  = require('method-override');

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var CategoryCtrl = require('./controllers/category');
var ValidationCtrl = require('./controllers/validation');

var router = express.Router();
router.get('/', function(req, res) {
  res.status(404);
});
app.use(router);

// API routes
var category = express.Router();
var validation = express.Router();

category.route('/list')
  .get(CategoryCtrl.findAllCategories);

category.route('/list/:id')
  .get(CategoryCtrl.findSubCategoryByCategoryId);

validation.route('/email/:email')
  .get(ValidationCtrl.isValidMail);

app.use('/category', category);
app.use('/validation', validation);

// Start server
app.listen(3000, function() {
  console.log('Node server running on http://localhost:3000');
});
