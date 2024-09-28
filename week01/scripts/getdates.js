const today = new Date();

console.log(today.getFullYear())

const year = document.querySelector("#currentyear");
year.innerHTML = today.getFullYear()

console.log(document.lastModified)

const lol = document.querySelector("#lastModified");
lol.innerHTML = document.lastModified