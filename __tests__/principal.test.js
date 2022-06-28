jest.mock('../models/principal'); 
const Principal =require('../models/principal');
const actualPrincipal = jest.requireActual('../models/principal');

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  Principal.mockClear();
})

it('We can check if the instance called the principal class constructor', () => {
  
  const myPrincipal2 = new Principal('John','X',123456,'blah','jx@gmail.com',1500000,'sed345','BankX','beirut');
  
  expect(Principal).toHaveBeenCalledTimes(1);
  
});
it('constructor sets the role to principal', () => {
  
  const myPrincipal = new actualPrincipal('John','X',123456,'blah','jx@gmail.com',1500000,'sed345','BankX','beirut');
  
    const role = myPrincipal.role;
    expect(role).toBe('principal');
  
});
it('constructor sets the rest of the properties are set by super', () => {
  
  const myPrincipal = new actualPrincipal('John','X',123456,'blah','jx@gmail.com',1500000,'sed345','BankX','beirut');
  
    const first_name = myPrincipal.first_name;
    const last_name = myPrincipal.last_name;
    const phone_number = myPrincipal.phone_number;
    const address = myPrincipal.address;
    const personal_email = myPrincipal.personal_email;
    const schoolida_email = myPrincipal.schoolida_email;
    const base_salary = myPrincipal.base_salary;
    const bank_IBAN = myPrincipal.bank_info.bank_IBAN;
    const bank_name = myPrincipal.bank_info.bank_name;
    const bank_branch = myPrincipal.bank_info.bank_branch;
    expect(first_name).toBe('John');
    expect(last_name).toBe('X');
    expect(phone_number).toBe(123456);
    expect(address).toBe('blah');
    expect(personal_email).toBe('jx@gmail.com');
    expect(base_salary).toBe(1500000);
    expect(schoolida_email).toBe(`${first_name}.${last_name}@schoolida.com`);
    expect(bank_IBAN).toBe('sed345');
    expect(bank_name).toBe('BankX');
    expect(bank_branch).toBe('beirut');
  
});
