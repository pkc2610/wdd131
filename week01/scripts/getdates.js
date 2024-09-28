const today = new Date();

console.log(today.getFullYear())

const year = document.querySelector("#currentyear");
year.innerHTML = today.getFullYear()