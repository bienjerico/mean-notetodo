var mongoose = require('mongoose');

var NoteSchema = new mongoose.Schema({
  title : { type: String, require: true},
  text : { type: String, require: true},
  date: { type: Date, default: Date.now }
});
var Notes = mongoose.model('Notes',NoteSchema);

var TodoSchema = new mongoose.Schema({
  entry : { type: String, require: true},
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
