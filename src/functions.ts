/**Given two related values (m & s or km & h, etc), calculate the average velocity.*/
export function averageVelocity(displacement: number, time: number): number | null {
    if (time < 0) {
        return null;
    }

    return parseFloat((displacement / time).toFixed(2));
}

type returnValue = "current" | "voltage" | "resistance" | "power";
type elements = {
    current: number | undefined,
    voltage: number | undefined,
    resistance: number | undefined,
    power: number | undefined
}

/**Ohm's law
 * 
 * The 'knownValues' argument must contain at least 2 numbers.
 * 
 * Returns a rounded value.
 * 
 * Note: The order of the properties in 'knownValues' matters!
 */
export function ohmsLaw(get: returnValue, knownValues: elements): number | number[] {

    switch (get) {
        case "current":
            if (knownValues.voltage === undefined || knownValues.resistance === undefined) {
                throw new Error("'voltage' and 'resistance' are needed to calculate the current.");
            }
            return parseFloat((knownValues.voltage / knownValues.resistance).toFixed(2));

        case "voltage":
            if (knownValues.current === undefined || knownValues.resistance === undefined) {
                throw new Error("'current' and 'resistance' are needed to calculate the voltage.");
            }
            return parseFloat((knownValues.current * knownValues.resistance).toFixed(2));

        case "resistance":
            if (knownValues.current === undefined || knownValues.voltage === undefined) {
                throw new Error("'current' and 'voltage' are needed to calculate the resistance.");
            }
            return parseFloat((knownValues.current * knownValues.voltage).toFixed(2));
            
        case "power":
            // @ts-ignore
            const knownElements: number[][] = Object.values(knownValues).filter((e, i) => { 
                if ((e !== undefined) && (i !== 3)) {
                    return e;
                }
            });

            if (knownElements.length < 2) {
                throw new Error("To calculate the power at least 2 of any of the elements in 'knownValues' (except power) are needed.");
            }

            if (knownValues.voltage === undefined) {
                // @ts-ignore
                return parseFloat(((knownValues.current ** 2) * knownValues.resistance).toFixed(2));
            }

            if (knownValues.current === undefined) {
                // @ts-ignore
                return parseFloat(((knownValues.voltage ** 2) / knownValues.resistance).toFixed(2));
            }

            return parseFloat((knownValues.voltage * knownValues.current).toFixed(2));
    }
}

/**Newton's second law.*/
export function newtonSecond(mass: number, acceleration: number) {
    return (mass * acceleration).toFixed(2); 
}

/**Kinectic energy equation.*/
export function kineticEnergy(mass: number, velocity: number) {
    return (0.5 * mass) * (velocity ** 2);
}