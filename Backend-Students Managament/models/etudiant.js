const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let Etudiant= new Schema({
   Nom: {
      type: String
   },
   Prenom: {
    type: String
   },
   Classe: {
    type: String
    
   },
   
}, {
   collection: 'Etudiant'
})
module.exports = mongoose.model('Etudiant', Etudiant)