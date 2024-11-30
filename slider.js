const products = document.querySelectorAll(".slider .product")
let counter = 0 

function left() {

    if(counter == 0){
        counter = products.length / 3 - 1
    }else {

    counter--
    }

    scroll()
}

function right(){

    if(counter == products.length / 3-1){
        counter = 0
    }else{
    counter ++
    }
    scroll()
}

function scroll(){
    products.forEach(function(item){
        item.style.transform =  `translate(-${counter * 1250}px)`
    })
}

const products2 = document.querySelectorAll(".slider2 .product2")
let counter2 = 0 

function izquierda() {

    if(counter2 == 0){
        counter2 = products2.length / 3 - 1
    }else {

    counter2--
    }

    scroll2()
}

function derecha(){

    if(counter2 == products2.length / 3-1){
        counter2 = 0
    }else{
    counter2 ++
    }
    scroll2()
}

function scroll2(){
    products2.forEach(function(item){
        item.style.transform =  `translate(-${counter2 * 1250}px)`
    })
}

const products3 = document.querySelectorAll(".slider3 .product3")
let counter3 = 0 

function izqui() {

    if(counter3 == 0){
        counter3 = products3.length / 3 - 1
    }else {

    counter3--
    }

    scroll3()
}

function dere(){

    if(counter3 == products3.length / 3-1){
        counter3 = 0
    }else{
    counter3 ++
    }
    scroll3()
}

function scroll3(){
    products3.forEach(function(item){
        item.style.transform =  `translate(-${counter3 * 1250}px)`
    })
}


// Selección de elementos
const toggleButton = document.getElementById('toggleFormButton');
const orderForm = document.getElementById('orderForm');

// Ocultar el formulario al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    orderForm.style.display = 'none';
});

// Evento para mostrar/ocultar el formulario
toggleButton.addEventListener('click', () => {
    if (orderForm.style.display === 'none') {
        orderForm.style.display = 'flex'; // Mostrar el formulario
    } else {
        orderForm.style.display = 'none'; // Ocultar el formulario
    }
});
