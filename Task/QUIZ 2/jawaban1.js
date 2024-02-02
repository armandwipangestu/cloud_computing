const minimal = (a, b) => {
    if (a < b) {
        return a;
    }

    if (a > b) {
        return b;
    }

    return a;
};

console.log(`
- minimal: 1 dan 4
- output: ${minimal(1, 4)}`);

console.log(`
- minimal: 3 dan 2
- output: ${minimal(3, 2)}`);

console.log(`
- minimal: 3 dan 3
- output: ${minimal(3, 3)}`);

const power = (a, b) => {
    return Math.pow(a, b);
};

console.log(`
- power: 7^3
- output: ${power(7, 3)}`);

console.log(`
- power: 3^3
- output: ${power(3, 3)}`);

console.log(`
- power: 4^0.5
- output: ${power(4, 0.5)}`);
