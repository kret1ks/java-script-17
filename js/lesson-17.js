// Створити розмітку з кнопкою та текстовим полем. За допомогою JavaScript отримати доступ до кнопки та текстового поля за їх ідентифікаторами та змінити текст на кнопці на значення текстового поля.

const btnEl = document.querySelector(".btn")
console.log(btnEl);
const findEl = document.querySelector('[id="textFind"]')
console.log(findEl);

btnEl.textContent = find.value;






// Створити розмітку з заголовком та зображенням. За допомогою JavaScript отримати доступ до зображення та змінити значення атрибута "src" на шлях до іншого зображення.

const imgRef = document.querySelector(".img")
imgRef.src = "https://www.internationalinsurance.com/wp-content/uploads/2017/07/img-logo-lg.png"
console.log(imgRef);







// Створити розмітку з посиланням та зображенням. За допомогою JavaScript отримати доступ до посилання та змінити значення атрибута "href" на нову URL-адресу. Також отримати доступ до зображення та додати новий атрибут "alt" з описом зображення.


const linkEl = document.querySelector(".link")
console.log(linkEl);
linkEl.href = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT69030HYuN0nCMuU_DuM_7GV-bjFb3ijdKoA&s"


const imgEL = document.querySelector(".newImg")
console.log(imgEL);
imgEL.alt = "team"





// Створити розмітку зі списком елементів. За допомогою JavaScript отримати доступ до першого елемента списку та змінити його вміст на новий текст.


const listRef = document.querySelector(".list .item")
console.log(listRef);

// listRef.firstElementChild => можна ще так найти
listRef.textContent = "100"