exports.seed = function(knex) {
  return knex("recipes").insert([
    { id: 1, recipe_name: "Mac and Cheese" },
    { id: 2, recipe_name: "Spaghetti with Tomato Sauce" },
    { id: 3, recipe_name: "Grilled Cheese Sandwich" }
  ]);
};
