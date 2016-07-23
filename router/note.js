// API Router
var apinote = require('express').Router();
// Schema
var models = require('../models/schema');


module.exports = (function() {

    'use strict';

    apinote.route('/note')
      .get(function(req,res){
        models.Notes.find(function(err, docs){
          if (!err) {
            res.json(docs);
            console.log(docs);
          }
        });
      })
      .post(function(req,res){
        var notes = new models.Notes(req.body);
        notes.save(function(err, docs){
          if (!err) {
            res.json(docs);
            console.log(docs);
          }
        });
      });

    apinote.route('/note/:id')
      .get(function(req,res){
        var id = req.params.id;
        models.Notes.findById(id,function(err, docs){
          if (!err) {
            res.json(docs);
            console.log(docs);
          }
        })
      })
      .put(function(req,res){
        var id = req.params.id;
        models.Notes.findByIdAndUpdate(id, req.body ,function(err, docs){
          if (!err) {
            res.json(docs);
            console.log(docs);
          }
        });
      })
      .delete(function(req,res){
        var id = req.params.id;
        models.Notes.findByIdAndRemove(id,function(err, docs){
          if (!err) {
            res.json(docs);
            console.log(docs);
          }
        });
      });
    return apinote;

})();
