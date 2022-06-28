const Staff = require("./staff");
class Teacher extends Staff {
  constructor(
    first_name,
    last_name,
    phone_number,
    address,
    personal_email,
    base_salary,
    bank_IBAN,
    bank_name,
    bank_branch,
    subject
  ) {
    const role = "teacher";
    super(
      first_name,
      last_name,
      phone_number,
      address,
      personal_email,
      role,
      base_salary,
      bank_IBAN,
      bank_name,
      bank_branch
    );
    this.subject = subject;
    this.employment_type = this.validate_employment_type('full-time');
    this.floors_covered = [];
    this.classes_taught = [];
    
  }

  validate_employment_type(type) {
    if (type === "part-time" || type === "full-time") return type;
    else return undefined;
  }

  
  assign_class(c) {
    this.classes_taught.push(c);
  }
  remove_class(id) {
    this.classes_taught = this.classes_taught.filter((c) => {
      if (c.id !== id) return c;
    });
  }

  assign_floor(num) {
    if (isNaN(num) || (num !== 1 && num !== 2 && num !== 3)) {
           return;
    } else {
      this.floors_covered.push(num);
    }
  }

  remove_floor(num){
    this.floors_covered = this.floors_covered.filter((floor) => {
        if (floor !== num) return floor;
      });
  }

  has_floor(num){
    return this.floors_covered.includes(num);
  }
}
module.exports = Teacher;
