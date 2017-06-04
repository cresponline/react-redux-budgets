exports.isValidMail = function(req, res) {
  var invalidAddresses = '@hotmail.';
  var data = !req.params.email.includes (invalidAddresses);

  res.header("Access-Control-Allow-Origin", "*");
  res.status(200).jsonp(data);
};
