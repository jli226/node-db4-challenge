const express = require("express");

const Ingredients = require("./ingredient-model.js");

const router = express.Router();

// TODO: Add validation middleware

router.get("/:id/recipes", (req, res) => {
  const { id } = req.params;

  Ingredients.getRecipesForIngredient(id)
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(err => {
      res.status(500).json({
        message: `Error occurred while getting recipes for ingredient with id ${id}.`,
        err: err
      });
    });
});

module.exports = router;
