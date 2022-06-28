class Student {
  
  constructor(first_name, last_name, mother_name, father_name) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.mother_name = mother_name;
    this.father_name = father_name;
    Student.count = Student.count + 1;
    this.student_id = Student.count;
    this.schoolida_email = `${this.first_name}.${this.last_name}@schoolida.com`;
  }
}
Student.count = 0;
module.exports = Student;