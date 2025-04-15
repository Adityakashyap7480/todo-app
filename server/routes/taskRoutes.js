const express = require("express");
const router = express.Router();
const Task = require("../models/Task");
const {
  gettodo,
  createTodo,
  updatetodo,
  deletetodo,
} = require("../controller/todoContoller");

router.route("/").get(gettodo).post(createTodo);
router.route("/:id").put(updatetodo).delete(deletetodo);

module.exports = router;
