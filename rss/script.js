/*
    Product Database
*/

let productos = [
    {
        id: 1,
        nombre: 'Pera Conferencia',
        precio: 0.34,
        imagen: 'item1.jpeg'
    },
    {
        id: 2,
        nombre: 'Manzana Golden',
        precio: 0.36,
        imagen: 'item2.jpeg'
    },
    {
        id: 3,
        nombre: 'Uvas',
        precio: 2.60,
        imagen: 'item3.jpeg'
    },
    {
        id: 4,
        nombre: 'Banana',
        precio: 0.21,
        imagen: 'item4.jpeg'
    },
    {
        id: 5,
        nombre: 'Melón Galia',
        precio: 2.71,
        imagen: 'item5.jpeg'
    },
    {
        id: 6,
        nombre: 'Mandarina',
        precio: 0.36,
        imagen: 'item6.jpeg'
    },
    {
        id: 7,
        nombre: 'Piña',
        precio: 2.30,
        imagen: 'item7.jpeg'
    },
    {
        id: 8,
        nombre: 'Mango',
        precio: 1.23,
        imagen: 'item8.jpeg'
    }
];

let cartItems = []
/*

ITEM LIST REFERENCE

    <div class="item">
        <div class="item-description">
            <img class="item-img" src=".\rss\img\item1.jpeg">
            <p class="item-name">Pera Conferencia</p>
            <p class="item-price">0.34€</p>
        </div>
        <div class="item-order">
            <button class="item-add">Añadir al carrito</button>
        </div>
    </div>
*/  



function renderProducts (){
    let listElement = document.getElementById('listItems');

    for ( let i = 0; i < productos.length; i++){

        let divElementItem = document.createElement('div');
        divElementItem.classList.add('item');

        let divElementItemDescription = document.createElement('div');
        divElementItemDescription.classList.add('item-description');

        let imgElementItem = document.createElement('img');
        imgElementItem.classList.add('item-img');
        let url = './rss/img/' + productos[i].imagen;
        imgElementItem.setAttribute('src', url);

        let nameElementItem = document.createElement('p');
        nameElementItem.classList.add('item-name');
        nameElementItem.textContent = productos[i].nombre;

        let divElementItemOrder = document.createElement('div');
        divElementItemOrder.classList.add('item-order');

        let priceElementItem = document.createElement('p');
        priceElementItem.classList.add('item-price');
        priceElementItem.textContent = productos[i].precio + '€';

        let buttonElementItem = document.createElement('button');
        buttonElementItem.classList.add('item-add');
        buttonElementItem.textContent = 'Añadir al carrito';
        buttonElementItem.addEventListener('click', function () { addProductsToCart(productos[i])});

        divElementItemDescription.appendChild(imgElementItem);
        divElementItemDescription.appendChild(nameElementItem);
        divElementItemDescription.appendChild(priceElementItem);
        
        divElementItemOrder.appendChild(buttonElementItem);

        divElementItem.appendChild(divElementItemDescription);
        divElementItem.appendChild(divElementItemOrder);

        listElement.appendChild(divElementItem);
    }
}


function addProductsToCart(item){
    cartItems.push(item);
    console.log(cartItems)
    renderCart();
}

function renderCart (){

    let elementNoProducts = document.getElementById('noProducts')
    let elementCartList = document.getElementById('cartItems');
    elementCartList.textContent = '';
    
    let totalPrice = 0;
    if (cartItems.length > 0){
        elementNoProducts.style.display = 'none';

    for ( let i = 0; i < cartItems.length; i++){

        let divElementCartTop = document.createElement('div');
            divElementCartTop.classList.add('cart-CartSectionTop');

        let imgElementCart = document.createElement('img');
            imgElementCart.classList.add('cart-ItemImg');
            let url = './rss/img/' + cartItems[i].imagen;
            imgElementCart.setAttribute('src', url);

        let elementCartName = document.createElement('p');
            elementCartName.classList.add('cart-ItemName');
            elementCartName.textContent = cartItems[i].nombre;
        let elementCartPrice = document.createElement('p');
            elementCartPrice.classList.add('cart-ItemPrice');
            elementCartPrice.textContent = cartItems[i].precio + '€';
        
        let divElementCartBot = document.createElement('div');
            divElementCartBot.classList.add('cart-CartSectionBot')
        
        let elementCartQuantity = document.createElement('p');
            elementCartQuantity.classList.add('cart-ItemQuantity');
            elementCartQuantity.textContent = '1 Ud.';
        
        let elementCartBtn = document.createElement('button');
            elementCartBtn.classList.add('cartBtn');
            elementCartBtn.textContent = '-';
            elementCartBtn.addEventListener('click', function () { deleteProductsFromCart(i)});


            divElementCartTop.appendChild(imgElementCart);
            divElementCartTop.appendChild(elementCartName);
            divElementCartTop.appendChild(elementCartPrice);
            
            divElementCartBot.appendChild(elementCartQuantity);
            divElementCartBot.appendChild(elementCartBtn);
            
            elementCartList.appendChild(divElementCartTop);
            elementCartList.appendChild(divElementCartBot);

            totalPrice += cartItems[i].precio;
        }

        let elementTotal = document.createElement('p');
        elementTotal.classList.add('cart-TotalPrice');
        elementTotal.textContent = 'TOTAL: ' + totalPrice.toFixed(2) + '€';
        
        elementCartList.appendChild(elementTotal);

    } else {
        elementNoProducts.style.display = 'flex';
    }
    

}

function deleteProductsFromCart(elementPosition){
    let cartItemsAux = [];

    for( let i = 0; i < cartItems.length; i++){
            if(i !== elementPosition){
                cartItemsAux.push(cartItems[i]);
            }
        }

        cartItems = cartItemsAux;
        renderCart();
}


renderProducts();



/*
    <div class="cart-Item">
    <!--When there are products-->
        <div class="cart-ItemSectionTop">
            <img class="cart-ItemImg" src="rss\img\item1.jpeg" alt="">
            <p class="cart-ItemName">Pera Conferencia</p>
            <p class="cart-ItemPrice">0.34€</p>
        </div>

        <div class="cart-ItemSectionBot">
            <p class="cart-ItemQuantity">1 Ud.</p>
            <button class="cart-ItemBtn">-</button>
        </div>
        <div class="cart-Total">
            <p class="cart-TotalPrice">TOTAL: 5.00€</p>
        </div>
    </div>
</div>
*/