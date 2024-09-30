export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments() {
      // Count the number of departments in allEmployees
      return Object.keys(this.allEmployees).length;
    },
  };
}
