const items = document.querySelectorAll(".item");
console.log(`Number of categories: ${items.length}`);
items.forEach(item => {
    const header = item.querySelector("h2");
    console.log(`Category: ${header.textContent}`);
    const children = item.querySelectorAll("li");
    console.log(`Elements: ${children.length}`);
});
