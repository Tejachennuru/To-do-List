const express = require("express");
const router = express.Router();
const { Todo } = require("../models");

// Get all todos
router.get("/", async (req, res) => {
  const todos = await Todo.findAll();
  res.json(todos);
});

// Create a new todo
router.post("/", async (req, res) => {
  const todo = await Todo.create(req.body);
  res.json(todo);
});

// Update a todo
router.put("/:id", async (req, res) => {
  await Todo.update(req.body, { where: { id: req.params.id } });
  res.send("Todo Updated");
});

// Delete a todo
router.delete("/:id", async (req, res) => {
  await Todo.destroy({ where: { id: req.params.id } });
  res.send("Todo Deleted");
});

module.exports = router;
