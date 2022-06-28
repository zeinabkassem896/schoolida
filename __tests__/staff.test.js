jest.mock('../models/staff'); 
const Staff =require('../models/staff');
const actualStaff = jest.requireActual('../models/staff');

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  Staff.mockClear();
})

it('We can check if the instance called the staff class constructor', () => {
  
  const staff = new Staff('John','X',123456,'blah','jx@gmail.com',1500000,'sed345','BankX','beirut');
  
  expect(Staff).toHaveBeenCalledTimes(1);
  
});

it('checking the salary validation', () => {
  
    const staff = new actualStaff('John','X',123456,'blah','jx@gmail.com','s1500000','sed345','BankX','beirut');
    expect(staff.validate_salary('s1500000')).toBe(undefined);
    expect(staff.validate_salary(1500000)).toBe(1500000);
    
  });

it('checking the role validation', () => {
  
  const staff = new actualStaff('John','X',123456,'blah','jx@gmail.com','s1500000','sed345','BankX','beirut');
  expect(staff.validate_role('principal')).toBe('principal');
 expect(staff.validate_salary('guest')).toBe(undefined);
  
});