const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let Enseignant= new Schema({
   Nom: {
      type: String
   },
   Prenom: {
    type: String
   },
   Matiere: {
    type: String
   },
   Etudiants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Etudiant"
    }
  ]
}, {
   collection: 'Enseignant'
})
module.exports = mongoose.model('Enseignant', Enseignant)