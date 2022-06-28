jest.mock("../controllers/employee_controller");
const Employee_Controller = require("../controllers/employee_controller");
const actualEmployeeController = jest.requireActual(
  "../controllers/employee_controller"
);

const actualTeacher = jest.requireActual('../models/teacher');
const actualPrincipal = jest.requireActual('../models/principal');

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  Employee_Controller.mockClear();
});

it("We can check if the instance called the Employee controller class constructor", () => {
  const employee_Controller = new Employee_Controller();

  expect(Employee_Controller).toHaveBeenCalledTimes(1);
});
