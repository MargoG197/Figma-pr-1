
const images = [{
    src: "Images/image 2.1.png",
    },
    {
    src: "Images/image 2.2.png",
    },
    {
    src: "Images/image 2.3.png",
}];

const data = [{
container: `<div class="container2_item1">
        <h2 class="title h2_p2">City:</h2>
        <p class="text3 text3_1">Rostov-on-Don<br> LCD admiral</p>
        <h2 class="title h2_p2">Repair time:</h2>
        <p class="text3 textt3_2">3.5 months</p>
    </div>
    <div class="container2_item2">
        <h2 class="title h2_p2">apartment area:</h2>
        <p class="text3 text3_3">81 m2</p>
        <h2 class="title h2_p2"><br>Repair Cost:</h2>
        <p class="text3">Upon request</p>
    </div>` 
},    {
container: `<div class="container2_item1">
    <h2 class="title h2_p2">City:</h2>
    <p class="text3 text3_1">Sochi<br> Thieves</p>
    <h2 class="title h2_p2">Repair time:</h2>
    <p class="text3 textt3_2">4 months</p>
</div>
<div class="container2_item2">
    <h2 class="title h2_p2">apartment area:</h2>
    <p class="text3 text3_3">105 m2</p>
    <h2 class="title h2_p2"><br>Repair Cost:</h2>
    <p class="text3">Upon request</p>
</div>`
},    {
container: `<div class="container2_item1">
       <h2 class="title h2_p2">City:</h2>
       <p class="text3">Rostov-on-Don<br> Patriotic</p>
       <h2 class="title h2_p2">Repair time:</h2>
       <p class="text3">3 months</p>
   </div>
   <div class="container2_item2">
       <h2 class="title h2_p2">apartment area:</h2>
       <p class="text3">93 m2</p>
       <h2 class="title h2_p2"><br>Repair Cost:</h2>
       <p class="text3">Upon request</p>
   </div>`
}];


function initSlides(){
// находим необходимые элементы в документе
let page2 = document.querySelector(".page2")
let sliderArrows = page2.querySelector(".group8");
let sliderImages = page2.querySelector(".slider__images");
let sliderNavigation = page2.querySelector(".header_nav2");
let sliderDots = page2.querySelector(".slider__dots");
let sliderDescription = page2.querySelector(".container2");

//вызываем функции
initImages();
initDescription();
initArrows();
initDots();
initNavigation();


// функция инициализации картинок
function initImages(){
images.forEach((image, index) =>{
let imageDiv = `<img src="${images[index].src}" class = "image n${index} ${index === 0? "active": "" }" data-index="${index}" alt="renovation_pictures">`;
sliderImages.innerHTML += imageDiv;
    });
}
// конец функции инициализации картинок

function initDescription(){
    data.forEach((item, index) =>{
    let insertData = `<div class = "container2_2 n${index} ${index === 0? "active" : "" }" data-index = "${index}">${data[index].container}</div>`;
    sliderDescription.innerHTML = insertData;
        });
    }


// работа со стрелками начало
function initArrows(){
sliderArrows.querySelectorAll(".slider__arrow").forEach(arrow => {
arrow.addEventListener("click", function() {
let currentNumber = +sliderImages.querySelector(".active").dataset.index;
let nextNumber;
if(arrow.classList.contains("left")){
    nextNumber = currentNumber === 0? images.length - 1 : currentNumber - 1;
} else {
    nextNumber = currentNumber === images.length - 1 ? 0 : currentNumber + 1;
};
moveSlider(nextNumber);
});
});
}
// работа со стрелками конец


// работа с точками начало

function initDots(){
    images.forEach((image, index) =>{
        let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index = "${index}"></div>`;
        sliderDots.innerHTML += dot;
    });

    sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
    dot.addEventListener("click", function() {
    moveSlider(this.dataset.index);
})
})     
}
// работа с точками конец


// начало работы с навигацией
function initNavigation(){
let navItems = sliderNavigation.querySelectorAll(".header_nav_item2");

navItems.forEach((item, index) => {
    item.classList.add(`n${index}`);
    item.setAttribute("data-index", `${index}`);
    });

navItems[0].classList.add('active');

sliderNavigation.querySelectorAll(".header_nav_item2").forEach(navItem => {
navItem.addEventListener("click", function(){
moveSlider(this.dataset.index);
    })
    })

};

// окончание работы с навигацией




//приводим слайдер в движение
function moveSlider(num){
sliderImages.querySelector(".active").classList.remove("active");
sliderImages.querySelector(".n" + num).classList.add("active");
sliderDots.querySelector(".active").classList.remove("active");
sliderDots.querySelector(".n" + num).classList.add("active");
sliderNavigation.querySelector(".active").classList.remove("active");
sliderNavigation.querySelector(".n" + num).classList.add("active");
sliderDescription.querySelector(".active").classList.remove("active");
sliderDescription.querySelector(".n" + num).classList.add("active");

};




}


document.addEventListener("DOMContentLoaded", initSlides);