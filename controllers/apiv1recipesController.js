'use strict'

var varapiv1recipesController = require('./apiv1recipesControllerService');

module.exports.getRecipes = function getRecipes(req, res, next) {
  varapiv1recipesController.getRecipes(req.swagger.params, res, next);
};

module.exports.addRecipe = function addRecipe(req, res, next) {
  varapiv1recipesController.addRecipe(req.swagger.params, res, next);
};