const Bank_Info = require("./bank_info");

const Role = {
  PRINCIPAL: "principal",
  ACCOUNTANT: "accountant",
  FLOOR_DIRECTOR: "floor_director",
  TEACHER: "teacher",
  COUNSELOR: "counselor",
};
Object.freeze(Role);

class Staff {
  #first_name;
  #last_name;
  #phone_number;
  #address;
  #personal_email;
  #role;
  #schoolida_email;
  #base_salary;
  #bank_info;
  constructor(
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
  ) {
    this.#first_name = first_name;
    this.#last_name = last_name;
    this.#phone_number = phone_number;
    this.#address = address;
    this.#personal_email = personal_email;
    this.#role = this.validate_role(role);
    this.#schoolida_email = `${first_name}.${last_name}@schoolida.com`;
    this.#base_salary = this.validate_salary(base_salary);
    this.#bank_info = new Bank_Info(bank_IBAN, bank_name,bank_branch);
  }

  get first_name(){
    return this.#first_name;
  }
  set first_name(first_name){
    this.#first_name = first_name;
  }
  get last_name(){
    return this.#last_name;
  }
  set last_name(last_name){
    this.#last_name = last_name;
  }
  get role(){
    return this.#role;
  }
  set role(role){
    this.#role = role;
  }
  get address(){
    return this.#address;
  }
  set address(address){
    this.#address = address;
  }
  get base_salary(){
    return this.#base_salary;
  }
  set base_salary(base_salary){
    this.#base_salary = base_salary;
  }
  get schoolida_email(){
    return this.#schoolida_email;
  }
  set schoolida_email(schoolida_email){
    this.#schoolida_email = schoolida_email;
  }
  get phone_number(){
    return this.#phone_number;
  }
  set phone_number(phone_number){
    this.#phone_number = phone_number;
  }
  get personal_email(){
    return this.#personal_email;
  }
  set personal_email(personal_email){
    this.#personal_email = personal_email;
  }
  get bank_info(){
    return this.#bank_info;
  }

  validate_role(role) {
    if (Object.values(Role).includes(role)) {
      const pair = Object.entries(Role).filter((pair) => {
        if (pair[1] === role) return pair;
      });
      return Role[pair[0][0]];
    }
    return undefined;
  }
  validate_salary(salary) {
    if (isNaN(salary)) {
      return undefined;
    }
    return salary;
  }
}

module.exports = Staff;
