/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (tbl) => {
      tbl.increments("project_id");
      tbl.text("project_name").notNullable();
      tbl.text("project_description");
      tbl.boolean("project_completed").defaultTo(false);
      // I remember seeing something in the guided project w/gabe on GP2 about setting this to 0 or 1
    })
    // .createTable("resources", (tbl) => {
    //   tbl.increments("resource_id");
    //   tbl.text("resource_name").notNullable().unique();
    //   tbl.text("resource_description");
    // })
    .createTable("tasks", (tbl) => {
      tbl.increments("task_id");
      tbl.text("task_description").notNullable();
      tbl.text("task_notes");
      tbl.boolean("task_completed").defaultTo(false);
      // doesnt this need to be 0 or 1 above??
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("projects")
        .onDelete("CASCADE");
    })
    .createTable("project_resources", (tbl) => {
      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("resource_id")
        .inTable("resources");
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("projects");
      tbl.primary(["resource_id", "project_id"]);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("projects")
    // .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("project_resources");
};
