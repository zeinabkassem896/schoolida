jest.mock('../models/teacher'); 
const Teacher =require('../models/teacher');
const actualTeacher = jest.requireActual('../models/teacher');

beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    Teacher.mockClear();
  })

  it('We can check if the instance called the teacher class constructor', () => {
  
    const teacher = new Teacher('John','X',123456,'blah','jx@gmail.com',1500000,'sed345','BankX','beirut','math');
    
    expect(Teacher).toHaveBeenCalledTimes(1);
    
  });

  it('We can check if the  teacher class constructor set properties properly', () => {
  
    const teacher = new actualTeacher('John','X',123456,'blah','jx@gmail.com',1500000,'sed345','BankX','beirut','math');
    expect(teacher.floors_covered).toHaveLength(0);
    expect(teacher.classes_taught).toHaveLength(0);
    expect(teacher.subject).toBe('math');
  });

  it('Check if assign_floor function works properly', () => {
  
    const teacher = new actualTeacher('John','X',123456,'blah','jx@gmail.com',1500000,'sed345','BankX','beirut','math');
    expect(teacher.floors_covered).toHaveLength(0);
    teacher.assign_floor(1);
    expect(teacher.floors_covered).toContain(1);
    expect(teacher.floors_covered).toHaveLength(1);
    teacher.assign_floor(2);
    expect(teacher.floors_covered).toContain(2);
    expect(teacher.floors_covered).toHaveLength(2);
    teacher.assign_floor(3);
    expect(teacher.floors_covered).toContain(3);
    expect(teacher.floors_covered).toHaveLength(3);
    teacher.assign_floor(4);
    expect(teacher.floors_covered).not.toContain(4);
    expect(teacher.floors_covered).toHaveLength(3);
    teacher.assign_floor('test');
    expect(teacher.floors_covered).not.toContain('test');
    expect(teacher.floors_covered).toHaveLength(3);
  });