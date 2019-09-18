exports.seed = function(knex) {
  return knex("instructions").insert([
    {
      id: 1,
      recipe_id: 1,
      step_number: 1,
      instruction: "Boil water and start cooking the pasta."
    },
    {
      id: 2,
      recipe_id: 1,
      step_number: 2,
      instruction: "Drain water after pasta is cooked."
    },
    {
      id: 3,
      recipe_id: 1,
      step_number: 3,
      instruction: "Combine pasta with cheese and salt to taste."
    },
    {
      id: 4,
      recipe_id: 2,
      step_number: 1,
      instruction: "Boil water and start cooking the pasta."
    },
    {
      id: 5,
      recipe_id: 2,
      step_number: 2,
      instruction: "Drain water after pasta is cooked."
    },
    {
      id: 6,
      recipe_id: 2,
      step_number: 3,
      instruction: "Cook tomatoes down and salt to taste."
    },
    {
      id: 7,
      recipe_id: 2,
      step_number: 4,
      instruction: "Combine pasta with tomato sauce."
    },
    {
      id: 8,
      recipe_id: 3,
      step_number: 1,
      instruction: "Heat up a pan with some butter."
    },
    {
      id: 9,
      recipe_id: 3,
      step_number: 2,
      instruction: "Place a slice of bread in the pan."
    },
    {
      id: 10,
      recipe_id: 3,
      step_number: 3,
      instruction: "Place a slice of cheese and another slice of bread on top."
    },
    {
      id: 11,
      recipe_id: 3,
      step_number: 4,
      instruction:
        "Toast bread on both sides until cheese is melted and bread is toasted on both sides."
    }
  ]);
};
