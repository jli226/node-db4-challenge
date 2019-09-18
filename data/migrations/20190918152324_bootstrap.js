exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      // Primary key
      tbl.increments();

      // Other columns/fields
      tbl.string("recipe_name", 255).notNullable();
    })
    .createTable("ingredients", tbl => {
      // Primary key
      tbl.increments();

      // Other columns/fields
      tbl.string("ingredient_name", 255).notNullable();
    })
    .createTable("instructions", tbl => {
      // Primary key
      tbl.increments();

      // Foreign keys
      tbl
        .integer("recipe_id")
        .unsigned()
        .references("id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");

      // Other columns/fields
      tbl.integer("step_number").notNullable();
      tbl.string("instruction").notNullable();
    })
    .createTable("recipe_ingredients", tbl => {
      // Foreign keys
      tbl
        .integer("recipe_id")
        .unsigned()
        .references("id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl
        .integer("ingredient_id")
        .unsigned()
        .references("id")
        .inTable("ingredients")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");

      // Composite key
      tbl.primary(["recipe_id", "ingredient_id"]);

      // Other columns/fields
      tbl.float("quantity").notNullable();
      tbl.string("measurement", 255).notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("instructions")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
