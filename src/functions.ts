/**Given two related values (m & s or km & h, etc), calculate the average velocity.*/
export function averageVelocity(displacement: number, time: number): number | null {
    if (time < 0) {
        return null;
    }

    return parseFloat((displacement / time).toFixed(2));
}