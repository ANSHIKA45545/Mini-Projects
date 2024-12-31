const menu=[
    {
        id:1,
        title: "Hot Chilli Burger",
        category: "lunch",
        price :15 ,
        img:"OIP.jpeg",
        desc:"A Hot Chilli Burger is the perfect choice for spice lovers, combining a juicy, grilled beef patty with a fiery blend of fresh chillies, jalapeños, and a zesty chilli sauce.",
    },
    {
        id:2,
        title: "Pancakes",
        category: "breakfast",
        price :17 ,
        img:"pancakes.jpeg",
        desc:"Indulge in our fluffy, golden pancakes, served warm and stacked to perfection. Light and airy, each bite is a delicious treat.",
    },
    {
        id:3,
        title: "Strawberry Shake",
        category: "shakes",
        price :19 ,
        img:"straw-shake.jpeg",
        desc:"Our creamy Strawberry Shake is a sweet, refreshing delight made with real strawberries and premium ice cream. Blended to perfection, it’s rich, smooth",
    },
    {
        id:4,
        title: "pizza",
        category: "lunch",
        price :28 ,
        img:"pizza.jpeg",
        desc:"Our pizza is a perfect blend of crispy, thin crust and fresh, high-quality toppings. From classic Margherita to loaded meat and veggie options"
    },
    {
        id:5,
        title: "Egg-cutlet",
        category: "breakfast",
        price :10 ,
        img:"cutlet.jpeg",
        desc:"Our Egg Cutlet is a delicious, crispy snack made with a perfectly boiled egg wrapped in a seasoned breadcrumb coating and fried to golden perfection"
    },
    {
        id:6,
        title: "Bread and Broccoli",
        category: "lunch",
        price :22 ,
        img:"bread.jpeg",
        desc:"Our lunch menu features a wholesome and satisfying dish: Bread and Broccoli Delight. This dish pairs freshly baked, crispy bread with tender, lightly sautéed broccoli,"
    },
    {
        id:7,
        title: "Cold Coffee",
        category: "shakes",
        price :8 ,
        img:"coffe.jpeg",
        desc:"Our Cold Coffee menu offers a variety of refreshing options to suit every taste. Enjoy the Classic Iced Coffee, a simple blend of chilled coffee, milk, and ice"
    },
]

const sectionCenter = document.querySelector(".g-col-4");
const container = document.querySelector(".btn-container")
const filterBtns = document.querySelectorAll(".filter-btn");

//load items
window.addEventListener("DOMContentLoaded", function(){
    displayMenuItems(menu);
    displayMenuButtons();
    
});

 function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item) {

        return `<article class="menu-item">
        <img src=${item.img} alt=${item.title} class="photo"/>
        <div class="item-info">
            <header>
                <h6>${item.title}</h6>
                <h6 class="price">${item.price}</h6>
            </header>

            <p class="item-text">${item.desc} </p>
            <button class="order">Order</button>
        </div>
    </article>`;

    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML=displayMenu;
}

function displayMenuButtons(){
const categories = menu.reduce(
        function (values,item) {
            if(!values.includes(item.category)){
                values.push(item.category);
            }
            return values;
        },
        ["all"]
    );
    const categoryBtns = categories.map(function(category) {
        return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`
    })
    .join("");
    container.innerHTML = categoryBtns;
    const filterBtns = container.querySelectorAll(".filter-btn");

    //filter items
filterBtns.forEach(function(btn) {
    btn.addEventListener("click" , function(e) {
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function(menuItem) {
            if(menuItem.category === category){
                return menuItem;
            }
        });
        if(category === 'all'){
            displayMenuItems(menu)
        }else{
            displayMenuItems(menuCategory);
        }
    });
}); 
}