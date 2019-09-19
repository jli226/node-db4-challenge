const express = require("express");

const Recipes = require("./recipe-model.js");

const router = express.Router();

// TODO: Add validation middleware

router.get("/", (req, res) => {
  Recipes.getRecipes()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(err => {
      res.status(500).json({
        message: "Error occurred while getting all recipes.",
        err: err
      });
    });
});

router.get("/:id/shoppingList", (req, res) => {
  const { id } = req.params;

  Recipes.getShoppingList(id)
    .then(shoppingList => {
      res.status(200).json(shoppingList);
    })
    .catch(err => {
      res.status(500).json({
        message: "Error occurred while getting shopping list.",
        err: err
      });
    });
});

router.get("/:id/instructions", (req, res) => {
  const { id } = req.params;

  Recipes.getInstructions(id)
    .then(instructions => {
      res.status(200).json(instructions);
    })
    .catch(err => {
      res.status(500).json({
        message: "Error occurred while getting all instructions.",
        err: err
      });
    });
});

module.exports = router;
