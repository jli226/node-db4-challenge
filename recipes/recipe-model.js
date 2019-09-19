const db = require("../data/db-config.js");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db("recipes");
}

function getShoppingList(recipe_id) {
  return db("recipes as r")
    .join("recipe_ingredients as ri", "r.id", "ri.recipe_id")
    .join("ingredients as i", "ri.ingredient_id", "i.id")
    .select(
      "ri.recipe_id",
      "ri.ingredient_id",
      "ri.quantity",
      "ri.measurement",
      "i.ingredient_name"
    )
    .where("ri.recipe_id", recipe_id);
}

function getInstructions(recipe_id) {
  return db("recipes as r")
    .join("instructions as i", "r.id", "i.recipe_id")
    .select("i.id", "r.recipe_name", "i.step_number", "i.instruction")
    .where("i.recipe_id", recipe_id)
    .orderBy("i.step_number", "asc");
}
