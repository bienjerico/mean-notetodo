var mongoose = require('mongoose');

var NoteSchema = new mongoose.Schema({
  title : { type: String, require: true},
  text : String
});
var Notes = mongoose.model('Notes',NoteSchema);

var TodoSchema = new mongoose.Schema({
  entry : String,
  checkbox: {
        type: Boolean,
        default: false
      }
});
var Todos = mongoose.model('Todos', TodoSchema);

module.exports = {
  Notes : Notes,
  Todos : Todos
}
