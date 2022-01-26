const Employee = require('../lib/Employee')

describe("Employee", () => {
    it("should return a name, and id, and an email", () => {
        const obj = new Employee();

        expect('name, id, email' in obj).toEqual(true);
    })
})