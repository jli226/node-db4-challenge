exports.seed = function(knex) {
  return knex("recipe_ingredients").insert([
    {
      recipe_id: 1,
      ingredient_id: 1,
      quantity: 6,
      measurement: "cups"
    },
    {
      recipe_id: 1,
      ingredient_id: 2,
      quantity: 1,
      measurement: "lbs"
    },
    {
      recipe_id: 1,
      ingredient_id: 3,
      quantity: 0.5,
      measurement: "Tbsp"
    },
    {
      recipe_id: 2,
      ingredient_id: 4,
      quantity: 2,
      measurement: "pints"
    },
    {
      recipe_id: 2,
      ingredient_id: 2,
      quantity: 1,
      measurement: "lbs"
    },
    {
      recipe_id: 2,
      ingredient_id: 3,
      quantity: 0.5,
      measurement: "Tbsp"
    },
    {
      recipe_id: 3,
      ingredient_id: 1,
      quantity: 2,
      measurement: "slices"
    },
    {
      recipe_id: 3,
      ingredient_id: 5,
      quantity: 2,
      measurement: "slices"
    },
    {
      recipe_id: 3,
      ingredient_id: 6,
      quantity: 1.5,
      measurement: "Tbsp"
    }
  ]);
};
