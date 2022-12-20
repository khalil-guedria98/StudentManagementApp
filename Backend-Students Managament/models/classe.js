const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let Classe= new Schema({
   Nom: {
      type: String
   },
   Etudiants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Etudiant"
    }
  ]
}, {
   collection: 'Classe'
})
module.exports = mongoose.model('Classe', Classe)