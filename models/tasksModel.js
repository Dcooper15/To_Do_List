const db = require("./conn");

class tasksList {
    constructor (task_name, task_type, due_date) {
        this.task_name = task_name;
        this.task_type = task_type,
        this.due_date = due_date

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

}












module.exports = tasksList;