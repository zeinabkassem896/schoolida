const Staff = require("./staff");
const Office_Hours_Entry = require("./office_hours_entry");

class Counselor extends Staff {
  constructor(
    first_name,
    last_name,
    phone_number,
    address,
    personal_email,
    base_salary,
    bank_IBAN,
    bank_name,
    bank_branch
  ) {
    const role = "counselor";
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
    this.office_hours = [];
  }

  add_office_hours(day, start_time, end_time){
      const entry  = new Office_Hours_Entry(day, start_time, end_time)
      this.office_hours.push(entry);
  }
}

module.exports = Counselor;