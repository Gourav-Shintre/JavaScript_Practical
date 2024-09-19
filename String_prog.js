
const fruits = ["apple", "bannana", "Cherry", "apricot", "blueberry", "cranberrry"];

const categorizedFruits = fruits.reduce((acc, fruit) => {
    const firstLetter = fruit[0].toLowerCase();
    console.log(firstLetter);
    if (!acc[firstLetter]) {
        acc[firstLetter] = [];
    }
    acc[firstLetter].push(fruit);
    return acc;
}, {});

console.log(categorizedFruits);