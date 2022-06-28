const Teacher = require("./teacher");

class Part_Time_Teacher extends Teacher {
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
    subject,
    employment_type, 
    hourly_rate,
    monthly_hours
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
      bank_branch,
      subject,
      employment_type
    );
    this.hourly_rate = hourly_rate;
    this.monthly_hours = monthly_hours;
    this.employment_type=super.validate_employment_type('part-time');
  }

  ///add number validation function for both hourly rate and monthly hours
}
