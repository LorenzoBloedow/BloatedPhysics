import * as functions from "./functions";

describe("Given the displacement and the change in time, return the average velocity.", () => {
    it("Will return null if 'time' is negative.", () => {
        expect(functions.averageVelocity(82, -5)).toBeNull();
    });

    it("Will round and return the average velocity with two decimal places.", () => {
        expect(functions.averageVelocity(136, 7)).toBe(19.43);
        expect(functions.averageVelocity(53.82, 72.3)).toBe(0.74);
        expect(functions.averageVelocity(120, 10)).toBe(12.00);
    });
});