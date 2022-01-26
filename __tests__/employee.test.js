const Employee = require('../lib/Employee')

describe("Employee", () => {
    describe('initialization', () =>
    //positive test
    it("should return a name, and id, and an email", () => {
        const name = 'Leland';
        const obj = new Employee(name)
        expect(obj.getName).toBe(name);
    })

})