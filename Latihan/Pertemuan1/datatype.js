/*
Tipe Data:

Pada javascript terdapat beberapa jenis tipe data diantaranya adalah

- undefined = variable yang tidak memiliki nilai (variable nya sudah dideklarasikan namun tidak mempunyai nilai sama sekali)
- null = variable yang memiliki nilai null
- number = tipe data dengan isian nya adalah angka
- bigint = sama seperti number yaitu tipe data dengan isianya adalah angka namun dapat menampung nilai yang lebih besar (+2^53). Biasanya ditandai dengan karakter `n` dibelakang nilainya.
- string = tipe data dengan isian teks
- boolean = tipe data dengan isian atau nilai true dan false
- symbol = tipe data symbol digunakan untuk menunjukkan identifier yang unik

*/

let test;
console.log(`
- variable: test
- data type: ${typeof test}
- value: ${test}
`);

const variableNull = null;
console.log(`
- variable: variableNull
- data type: ${typeof variableNull}
- value: ${variableNull}
`);

const bigInt = 1234567890123456789012345678901234567890n + 1n;
console.log(`
- variable: bigInt
- data type: ${typeof bigInt}
- value: ${bigInt}
`);

const string = "Ini adalah tipe data string";
console.log(`
- variable: string
- data type: ${typeof string}
- value: ${string}
`);

const boolean = true;
console.log(`
- variable: boolean
- data type: ${typeof boolean}
- value: ${boolean}
`);

let symbol1 = Symbol("Ini adalah variable symbol1");
let symbol2 = Symbol("Ini adalah variable symbol2");

console.log(`
- variable: symbol1 dan symbol2
- data type: {
    symbol1: ${typeof symbol1},
    symbol2: ${typeof symbol2}
}
- value: {
    symbol1: ${symbol1.description},
    symbol2: ${symbol2.description}
}
`);

console.log(symbol1);
console.log(symbol2);

// make the value of symbol2 the same as symbol1
symbol2 = Symbol("Ini adalah variable symbol1");
console.log(symbol1 === symbol2); // return false because symbol always unique, even if the data type and value same
