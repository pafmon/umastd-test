'use strict'

var varapiv1recipesrecipeIdController = require('./apiv1recipesrecipeIdControllerService');

module.exports.findRecipeByrecipeId = function findRecipeByrecipeId(req, res, next) {
  varapiv1recipesrecipeIdController.findRecipeByrecipeId(req.swagger.params, res, next);
};

module.exports.deleteRecipe = function deleteRecipe(req, res, next) {
  varapiv1recipesrecipeIdController.deleteRecipe(req.swagger.params, res, next);
};

module.exports.updateRecipe = function updateRecipe(req, res, next) {
  varapiv1recipesrecipeIdController.updateRecipe(req.swagger.params, res, next);
};