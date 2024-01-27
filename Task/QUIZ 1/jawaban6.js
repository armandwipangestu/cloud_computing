const currency = new Map([
    ["USD", 14000],
    ["JPY", 131],
    ["SGD", 11000],
    ["MYR", 3500],
]);

const priceInJPY = 5000;
const priceInIDR = priceInJPY * currency.get("JPY");

console.log(`Price in IDR: ${priceInIDR}`);
