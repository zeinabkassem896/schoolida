class Employee_Controller{
    
    view_employee(staff_member, employee){
        const employee_info = {};
        employee_info.first_name= employee.first_name;
        employee_info.last_name= employee.last_name;
        employee_info.role= employee.role;
        employee_info.schoolida_email= employee.schoolida_email;
        if(staff_member.role==="principal")
        {
            employee_info.personal_email = employee.personal_email;
            employee_info.phone_number = employee.phone_number;
            if(employee.role==='teacher'){
                employee_info.floors_covered = [...employee.floors_covered];
                employee_info.subject = employee.subject;
            }
        }
        if(staff_member.role==="floor_director" && employee.role==="teacher" && employee.has_floor(staff_member.floor_number))
        {
            employee_info.personal_email = employee.personal_email;
            employee_info.phone_number = employee.phone_number;
        }
        return employee_info;
    }

    principle_edit(staff_member, employee, phone_number, personal_email){
        if((staff_member.role==="principal") || (staff_member.role==="floor_director" && employee.role == 'teacher' && employee.has_floor(staff_member.floor_number))){
            if(phone_number != null){
                employee.phone_number = phone_number
            }
            if(personal_email != null){
                employee.personal_email = personal_email;
            }
        }
    }
}
module.exports = Employee_Controller;