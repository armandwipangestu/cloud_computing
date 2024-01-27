const restaurant = {
    name: "GreenLeaf Bistro",
    city: "San Francisco, CA",
    "favorite drink": "Matcha Latte",
    "favorite food": "Quinoa Salad Bowl",
    isVegan: true,
};

// const name = restaurant.name
// const favoriteDrink = restaurant["favorite drink"]

const {
    name,
    city,
    "favorite drink": favoriteDrink,
    "favorite food": favoriteFood,
    isVegan,
} = restaurant;

console.log("Name:", name);
console.log("City:", city);
console.log("Favorite Drink:", favoriteDrink);
console.log("Favorite Food:", favoriteFood);
console.log("Is Vegan:", isVegan);
