const body = document.querySelector("body");
// Здесь нужно вытянуть твой header, как ниже!!!! Я создам себе, что бы работало!
// const headerCreate = document.createElement("header");
// body.appendChild(headerCreate);
const header1 = querySelector("main_header")
console.log(header1)

//Далее создаем твой <p></p> с классами и атрибутами, стилями и текстом.
const paragraphCreate = document.createElement("p");
header.insertAdjacentElement("afterend",paragraphCreate);
paragraphCreate.id = "text";
paragraphCreate.textContent = "The best place to kick off your day or just take a break and enjoy";
// два ID это много, замени его на класс как ниже.
paragraphCreate.classList = "yummy";
paragraphCreate.style.color = "indigo";
paragraphCreate.style.fontFamily = "Comic Sans MS, Comic Sans, cursive";
paragraphCreate.style.fontSize = "40px";
paragraphCreate.style.marginTop = "50px";
paragraphCreate.style.textAlign = "center";
const paragraphCreate2 = document.createElement("p");
paragraphCreate.appendChild(paragraphCreate2).textContent = "a yummy breakfast";
