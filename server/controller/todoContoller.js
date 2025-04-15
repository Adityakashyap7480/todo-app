const express = require("express");
const Task = require("../models/Task");
const gettodo = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({ tasks });
  } catch (err) {
    console.log("Something went wrong");
  }
};

const createTodo = async (req, res) => {
  const newTask = new Task(req.body);
  await newTask.save();
  res.json(newTask);
};

const updatetodo = async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedTask);
  } catch (err) {
    console.log("Something went wrong");
  }
};

const deletetodo = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted" });
  } catch (err) {
    console.log("Something went wrong");
  }
};

module.exports = { gettodo, createTodo, updatetodo, deletetodo };
