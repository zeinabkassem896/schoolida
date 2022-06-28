const Staff = require("./staff");

class Floor_director extends Staff {
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
    const role = "floor_director";
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
    this.floor_number = 0;
  }

  assign_floor_number(num){
      this.floor_number= this.validate_floor_number(num);
  }
  validate_floor_number(num) {
    if (isNaN(num) && num !== 1 && num !== 2 && num !== 3) return undefined;
    else return num;
  }
}
module.exports = Floor_director
