
const Class_Controller = require('../controllers/student_controller');

class Class_Controller_Student{
    constructor(){
        this.controller= new Class_Controller();
    }
    add_student(principal, student_array, new_student)
    {
        return this.controller.add_student(principal,student_array, new_student);
    }

    delete_student(principal, student_array, student)
    {
        console.log(principal.role)
        return this.controller.delete_student(principal,student_array, student);
    }

}

module.exports = Class_Controller_Student;