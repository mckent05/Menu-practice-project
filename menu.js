const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "dinner special",
        category: "dinner",
        price: 38.99,
        img: "./images/item-10.jpeg",
        desc: `Most Wonderful dinner experience you can have thats served at Tope's restuarant,great taste and definitely worth a try and your money, try it and be happy`,
      },
  ];

let container= document.querySelector('.item-container')

let myBtn=document.querySelector('.btn')

window.addEventListener('DOMContentLoaded', function(){
    showMenuItems(menu)
    showButtons()
    
    
    
})
function showButtons(){
    let createButton=menu.reduce(function(value,items){
        if (!value.includes(items.category)){
            value.push(items.category)
        }
        return value
    
    },['all'])
    let displayBtn= createButton.map(function(allBtn){
        return `<button class="filter-btn" type="button" data-id=${allBtn}>${allBtn}</button>`
    })
    displayBtn=displayBtn.join('')
    myBtn.innerHTML=displayBtn
    let filterBtns= document.querySelectorAll('.filter-btn')
    filterBtns.forEach(function(btn){
        btn.addEventListener('click', function(e){
            let category= e.currentTarget.dataset.id
            let filterDisplay=menu.filter(function(items){
               if(items.category=== category)
                return items
    
            })
            if (category =='all'){
                showMenuItems(menu)
            }
            else {
                showMenuItems(filterDisplay)
            }
        
        })
    })
    

}

    


function showMenuItems(showMenu){
    let allItems= showMenu.map(function(items){
        

        return ` <article class="item">
        <div class="image">
            <img src=${items.img} width='200px'>
        </div>
        <div class="item-desc">
            <div class="item-name-price">
                <h4 class="item-header">${items.title}</h4>
                <p class="price">$${items.price}</p>
            </div>
            <p class="desc">${items.desc}</p>
        

        </div>
    </article>`

    

    })
    allItems=allItems.join('')
    container.innerHTML= allItems
}