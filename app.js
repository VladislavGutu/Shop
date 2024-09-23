let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";
let quantity = 1;

// Получаем кнопки для каждого товара
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");

// Получаем элементы для отображения количества каждого товара
let quantity1 = document.getElementById("quantity1");
let quantity2 = document.getElementById("quantity2");
let quantity3 = document.getElementById("quantity3");
let quantity4 = document.getElementById("quantity4");
let quantity5 = document.getElementById("quantity5");
let quantity6 = document.getElementById("quantity6");

// Функции для увеличения и уменьшения количества товара
function increaseQuantity(productId) {
    let quantityElement = document.getElementById("quantity" + productId);
    let currentQuantity = parseInt(quantityElement.innerText);
    quantityElement.innerText = currentQuantity + 1;
}

function decreaseQuantity(productId) {
    let quantityElement = document.getElementById("quantity" + productId);
    let currentQuantity = parseInt(quantityElement.innerText);
    if (currentQuantity > 1) {
        quantityElement.innerText = currentQuantity - 1;
    }
}

// Функции для отображения текста в MainButton и отправки данных в зависимости от выбранного товара
btn1.addEventListener("click", function(){
    quantity = parseInt(quantity1.innerText);
    toggleMainButton("Вы выбрали товар 1! Количество: " + quantity, "1");
});

btn2.addEventListener("click", function(){
    quantity = parseInt(quantity2.innerText);
    toggleMainButton("Вы выбрали товар 2! Количество: " + quantity, "2");
});

btn3.addEventListener("click", function(){
    quantity = parseInt(quantity3.innerText);
    toggleMainButton("Вы выбрали товар 3! Количество: " + quantity, "3");
});

btn4.addEventListener("click", function(){
    quantity = parseInt(quantity4.innerText);
    toggleMainButton("Вы выбрали товар 4! Количество: " + quantity, "4");
});

btn5.addEventListener("click", function(){
    quantity = parseInt(quantity5.innerText);
    toggleMainButton("Вы выбрали товар 5! Количество: " + quantity, "5");
});

btn6.addEventListener("click", function(){
    quantity = parseInt(quantity6.innerText);
    toggleMainButton("Вы выбрали товар 6! Количество: " + quantity, "6");
});

// Функция для управления отображением кнопки MainButton
function toggleMainButton(text, selectedItem) {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText(text);
        item = selectedItem;
        tg.MainButton.show();
    }
}

// Отправляем данные в Telegram WebApp, когда нажата MainButton
Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(item + " - Количество: " + quantity);
});

// Отображение информации о пользователе
let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name} ${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);

// Добавляем функциональность для кнопок увеличения/уменьшения количества
document.querySelectorAll('.quantity-btn').forEach(button => {
    button.addEventListener('click', function(event) {
        const target = event.target;
        const productId = target.closest('.product').id.replace('product', '');

        if (target.innerText === "+") {
            increaseQuantity(productId);
        } else if (target.innerText === "-") {
            decreaseQuantity(productId);
        }
    });
});
