const express = require('express');
const app = express();
const ClasseRoute = express.Router();
// Classe model
let Classe = require('../models/classe');
// Add Classe
ClasseRoute.route('/ajouter-classe').post((req, res, next) => {
  Classe.create(req.body, (error, data) => {
    console.log(req.body)
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get All Classes
ClasseRoute.route('/').get((req, res) => {
  Classe.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
      console.log(data)
    }
  })
})
// Get single Classe
ClasseRoute.route('/getclassebyid/:id').get((req, res) => {
  Classe.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update Classe
ClasseRoute.route('/update/:id').put((req, res, next) => {
  Classe.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})
// Delete Classe
ClasseRoute.route('/delete/:id').delete((req, res, next) => {
  Classe.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})


// Get Students of a class
ClasseRoute.route('/class/students/:id').get((req, res) => {
    Classe.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })
 



module.exports = ClasseRoute;