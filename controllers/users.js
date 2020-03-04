var User = require("../models/user");
var axios = require("axios");

exports.user_create = function(req, res, next) {
  if (req.body) {
    let items = req.body;
    User.create(items, function(err, newUsers) {
      if (err) return res.json({ error: err });
      // res.json(newUsers);
      res.redirect("/");
    });
  } else {
    res.json({ status: "ERROR", message: "Debe completar todos los campos" }); //opcional mandar un mensaje de error
  }
};

exports.list_user = function(req, res, next) {
  User.find({}, (err, data) => {
    if (err) return res.json({ error: err });
    res.render("index", { title: "Formulario", list: data });
  }).sort({ lastname: 1 });
  // User.map(palabra => {
  //   palabra.name.replace(/ñ/gi, "nn");
  //   palabra.lastname.replace(/ñ/gi, "nn");
  // });
};

// data = data.map(palabra => {
//   console.log(palabra);
//   palabra.name.replace(/ñ/gi, "nn");
//   palabra.lastname.replace(/ñ/gi, "nn");
// });
