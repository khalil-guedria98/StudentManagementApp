const express = require('express');
const app = express();
const EtudiantRoute = express.Router();
// Etudiant model
let Etudiant = require('../models/etudiant');
// Add Etudiant
EtudiantRoute.route('/ajouter-Etudiant').post((req, res, next) => {
  Etudiant.create(req.body, (error, data) => {
    console.log(req.body)
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get All Etudiants
EtudiantRoute.route('/').get((req, res) => {
  Etudiant.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
      console.log(data)
    }
  })
})
// Get single Etudiant
EtudiantRoute.route('/getetudiantbyid/:id').get((req, res) => {
  Etudiant.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update Etudiant
EtudiantRoute.route('/update/:id').put((req, res, next) => {
  Etudiant.findByIdAndUpdate(req.params.id, {
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
// Delete Etudiant
EtudiantRoute.route('/delete/:id').delete((req, res, next) => {
  Etudiant.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

EtudiantRoute.route('/Etudiantparclasse/:Nom').get((req, res) => {
    Etudiant.aggregate([

        {$lookup:{ from: 'Classe', localField:'Classe', 
          foreignField:'Nom',as:'myCustomResut'}},
          { $match: { "Classe": req.params.Nom } },
  ]).exec((err, result)=>{
        if (err) {
            console.log("error" ,err)
        }
        if (result) {
            console.log(req.params.Nom);
            console.log(result);
            res.json(result);
        }
  });
     
  })




 



module.exports = EtudiantRoute;