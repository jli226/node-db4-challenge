exports.seed = function(knex) {
  return knex("ingredients").insert([
    { id: 1, ingredient_name: "cheese" },
    { id: 2, ingredient_name: "pasta" },
    { id: 3, ingredient_name: "salt" },
    { id: 4, ingredient_name: "tomatoes" },
    { id: 5, ingredient_name: "bread" },
    { id: 6, ingredient_name: "butter" }
  ]);
};
