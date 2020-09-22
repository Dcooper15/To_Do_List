const db = require("./conn");

class tasksList {
    constructor (task_name, task_type, due_date) {
        this.task_name = task_name;
        this.task_type = task_type;
        this.due_date = due_date;

    }
    static async getAllTasks() {
        try {
            const response = await db.any(`SELECT * FROM tasks;`);
            console.log(response);
        } catch (error) {
            console.error("ERROR: ", error)
            return error.message;
        }
    }

    async postTask() {
        try {
            const response = await db.one(`INSERT INTO tasks (task_name, task_type, due_date) VALUES ($1, $2, $3) RETURNING id;`, [this.task_name, this.task_type, this.due_date]);
            console.log("Task Was Created:", response.id);
            return response;
        } catch(error) {
            console.error("ERROR: ", error.message);
            return error.message;
        }
    }




}




module.exports = tasksList;