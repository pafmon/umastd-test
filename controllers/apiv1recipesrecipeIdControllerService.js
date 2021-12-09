'use strict'

module.exports.findRecipeByrecipeId = function findRecipeByrecipeId(req, res, next) {
  var data = {
    recipeId: "espetos",
    description: "Sardinas a la brasa ensartadas en un palo",
    ingredients: "sardinas , sal y brasas",
    complexity: "hard"
  }

  res.send(data);
};

module.exports.deleteRecipe = function deleteRecipe(req, res, next) {
  res.send({
    message: 'This is the mockup controller for deleteRecipe'
  });
};

module.exports.updateRecipe = function updateRecipe(req, res, next) {
  res.send({
    message: 'This is the mockup controller for updateRecipe'
  });
};