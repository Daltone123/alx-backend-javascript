export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = []; // Initialize an array to hold employee names

  // Use the iterator to collect all employee names
  for (const employee of reportWithIterator) {
    employeeNames.push(employee); // Push each employee name into the array
  }

  // Join the employee names with a '|' separator and return the result
  return employeeNames.join(' | ');
}
