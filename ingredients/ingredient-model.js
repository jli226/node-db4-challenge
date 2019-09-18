const db = require("../data/db-config.js");

module.exports = {
  getRecipesForIngredient
};

function getRecipesForIngredient(ingredient_id) {
  return db("recipes as r")
    .join("recipe_ingredients as ri", "r.id", "ri.recipe_id")
    .join("ingredients as i", "ri.ingredient_id", "i.id")
    .select("ri.ingredient_id", "i.ingredient_name", "r.recipe_name")
    .where("ri.ingredient_id", ingredient_id)
    .groupBy("r.recipe_name");
}
