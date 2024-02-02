const books = [
    { title: "The Da Vinci Code", author: "Dan Brown", sales: 5094805 },
    { title: "The Ghost", author: "Robert Harris", sales: 807311 },
    { title: "White Teeth", author: "Zadie Smith", sales: 815586 },
    { title: "Fifty Shades of Grey", author: "E. L. James", sales: 3758936 },
    { title: "Jamie's Italy", author: "Jamie Oliver", sales: 906968 },
    { title: "I Can Make You Thin", author: "Paul McKenna", sales: 905086 },
    {
        title: "Harry Potter and the Deathly Hallows",
        author: "J.K Rowling",
        sales: 4475152,
    },
];

// versi sort
const greatAuthors = books
    .filter((book) => book.sales > 1000000)
    .map(
        (book) =>
            `${book.author} adalah penulis buku ${book.title} yang sangat hebat!`
    );

// versi long
// const greatAuthors = [];
// books
//     .filter((book) => {
//         if (book.sales > 1000000) {
//             return book;
//         }
//     })
//     .map((book) => {
//         greatAuthors.push(
//             `${book.author} adalah penulis buku ${book.title} yang sangat hebat!`
//         );
//     });

console.log(greatAuthors);
