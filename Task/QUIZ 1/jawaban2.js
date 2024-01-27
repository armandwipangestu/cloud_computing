const score = 99;
let result;

if (score >= 90) {
    result = "Selamat! Anda mendapatkan nilai A.";
}

if (score >= 80 && score <= 89) {
    result = "Anda mendapatkan nilai B.";
}

if (score >= 70 && score <= 79) {
    result = "Anda mendapatkan nilai C.";
}

if (score >= 60 && score <= 69) {
    result = "Anda mendapatkan nilai D.";
}

if (score < 60) {
    result = "Anda mendapatkan nilai E.";
}

console.log(`
Score: ${score}
Result: ${result}
`);
