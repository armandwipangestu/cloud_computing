/*
Variable:

- Pada Javascript setidaknya terdapat 3 cara untuk mendeklarasikan sebuah variabel, yaitu
menggunakan keyword `var`, `let`, dan `const`. Pada versi ECMAScript 2015 (ES6) dikenalkan deklarasi
variabel dengan let dan const untuk menggantikan var yang dinilai kontroversial dan rawan
menimbulkan bug

Aturan dalam penamaan variabel:
- Harus dimulai dengan huruf atau underscore (_)
- Dapat terdiri dari huruf, angka, dan underscore (_) dengan berbagai kombinasi
- Tidak boleh mengandung spasi (whitespace). Jika penamaan variabel lebih dari dua kata, tuliskan
secara `camelCase`. Contoh `firstName`, `lastName`, `catName`, dll.
- Tidak boleh mengandung karakter spesial (!.,/\+*= dll).
*/

var testVariable = "Ini adalah string dari variable var";
console.log(testVariable);

let firstName;
firstName = "Arman";
console.log(firstName);

let lastName;
lastName = "Dwi Pangestu";
console.log(lastName);

/*
Perbedaan variable `let` dan `const`

Untuk memahami perbedaan kalian cukup bayangkan jika variabel yang dibuat menggnunakan `let`
itu seperti box atau dus yang terbuka, sehingga kita dapat mengubah isian dari box atau dus tersebut.
Sedangkan untuk variabel yang dibuat menggunakan `const` kalian dapat bayangkan seperti box atau dus
yang tersegel sehingga kita tidak dapat mengubah nya
*/

const PI = 3.14;
console.log(PI);

// Jika kita ubah nilai variable PI yang dibuat dengan konstanta maka akan muncul error
PI = 3.15;
console.log(PI);
