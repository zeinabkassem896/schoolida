class Student_Controller{

    add_student(employee, students_array, new_student){
        if(employee.role == 'principal'){
            students_array.push(new_student);
        }
        return students_array;
    }

    edit_student(employee, students_array, new_student){
        if(employee.role == 'principle'){
            students_array.push(new_student);
        }
        return students_array;
    }

    delete_student(employee, students_array, student){
        if(employee.role == 'principal'){
            students_array = students_array.filter((c) => 
                c.first_name != student.first_name && c.last_name != student.last_name            );
            }
        return students_array;
    }
    
}
module.exports = Student_Controller;