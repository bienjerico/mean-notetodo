// API Router
var apitodo = require('express').Router();
// Schema
var models = require('../models/schema');

module.exports = (function() {

    'use strict';

    apitodo.route('/todo')
      .get(function(req,res){
        models.Todos.find(function(err, docs){
          if (!err) {
            res.json(docs);
            console.log(docs);
          }
        });
      })
      .post(function(req,res){
        var todos = new models.Todos(req.body);
        todos.save(function(err, docs){
          if (!err) {
            res.json(docs);
            console.log(docs);
          }
        });
      });

    apitodo.route('/todo/:id')
      .get(function(req,res){
        var id = req.params.id;
        models.Todos.findById(id,function(err, docs){
          if (!err) {
            res.json(docs);
            console.log(docs);
          }
        })
      })
      .put(function(req,res){
        var id = req.params.id;
        models.Todos.findByIdAndUpdate(id, req.body ,function(err, docs){
          if (!err) {
            res.json(docs);
            console.log(docs);
          }
        });
      })
      .delete(function(req,res){
        var id = req.params.id;
        models.Todos.findByIdAndRemove(id,function(err, docs){
          if (!err) {
            res.json(docs);
            console.log(docs);
          }
        });
      });

    return apitodo;

})();
