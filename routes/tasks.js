const express = require("express");
const router = express.Router();

const TasksModel = require("../models/tasksModel");


router.get("/", (req, res) => {
    res.render("template", {
      locals: {
        title: "Welcome User!",
        is_logged_in: req.session.is_logged_in
    
      },
      partials: {
        partial: "partial-tasks",
      },
    });
  });

router.post("/tasks", (req, res) => {
    const { task_name, task_type, due_date } = req.body;
    const taskInstance = new TasksModel(null, task_name, task_type, due_date);

    taskInstance.postTask().then(response => {
        if (response !== undefined) {
            console.log("task was submitted");
        }
        else { console.log("error", error);
    }
    })

    res.redirect("/users/tasks")

});




module.exports = router;