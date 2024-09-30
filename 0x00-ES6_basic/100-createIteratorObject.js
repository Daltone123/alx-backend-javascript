export default function createIteratorObject(report) {
  const employees = [];

  // Collect all employees from the report's allEmployees property
  for (const department in report.allEmployees) {
    // Use Object.prototype.hasOwnProperty.call to check for own properties
    if (Object.prototype.hasOwnProperty.call(report.allEmployees, department)) {
      employees.push(...report.allEmployees[department]);
    }
  }

  // Return an iterator for the employees array
  return employees[Symbol.iterator]();
}
