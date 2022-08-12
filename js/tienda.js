/* ------------------- Defino variables de stock y precio ------------------- */
let preciototal = 0;
let cantidadCompra = 0;
let idCompra = 0;
let comprar = true;
let seguirComprando = true;

/* Arreglo de tipo de armas */

let stockProductos = [{
        id: 1,
        tipo: "rifle",
        stock: 10,
        precio: 2300,
        descipcion: "Ak Nightwish",
        imageUrl: "../../src/multimedia/images/shop/ak47-nightwish-ww.png",
    },
    {
        id: 2,
        tipo: "rifle",
        stock: 2,
        precio: 3500,
        descipcion: "AWP Hyperbeast",
        imageUrl: "../../src/multimedia/images/shop/awp-hyperbeast-ft.png",
    },
    {
        id: 3,
        tipo: "pistola",
        stock: 5,
        precio: 1800,
        descipcion: "USP Orange",
        imageUrl: "../../src/multimedia/images/shop/usps-orange-ft.png",
    },
    {
        id: 4,
        tipo: "rifle",
        stock: 6,
        precio: 2500,
        descipcion: "M4A1-S Printstream",
        imageUrl: "../../src/multimedia/images/shop/m4a1s-printstream-ft.png",
    },
    {
        id: 5,
        tipo: "pistola",
        stock: 10,
        precio: 1000,
        descipcion: "Glock Pinkddpat",
        imageUrl: "../../src/multimedia/images/shop/glock-pinkddpat-ww.png",
    },
    {
        id: 6,
        tipo: "rifle",
        stock: 10,
        precio: 2500,
        descipcion: "AK Emerald",
        imageUrl: "../../src/multimedia/images/shop/ak47-emerald-fn.png",
    },
    {
        id: 7,
        tipo: "rifle",
        stock: 10,
        precio: 3500,
        descipcion: "AWP Lightning",
        imageUrl: "../../src/multimedia/images/shop/awp-lightning-fn.png",
    },
    {
        id: 8,
        tipo: "pistola",
        stock: 10,
        precio: 1500,
        descipcion: "Desert Kumicho",
        imageUrl: "../../src/multimedia/images/shop/desert-kumicho-fn.png",
    },
    {
        id: 9,
        tipo: "rifle",
        stock: 10,
        precio: 800,
        descipcion: "Famas Commen",
        imageUrl: "../../src/multimedia/images/shop/famas-commem-fn.png",
    },
    {
        id: 10,
        tipo: "pistola",
        stock: 10,
        precio: 1100,
        descipcion: "Glock Vogue",
        imageUrl: "../../src/multimedia/images/shop/glock-vogue.mw_.png",
    },
    {
        id: 11,
        tipo: "cuchillo",
        stock: 10,
        precio: 5500,
        descipcion: "Bayonet Ultraviolet",
        imageUrl: "../../src/multimedia/images/shop/knife-bayonet-ultraviolet-ww.png",
    },
    {
        id: 12,
        tipo: "rifle",
        stock: 10,
        precio: 2500,
        descipcion: "AK emerald",
        imageUrl: "../../src/multimedia/images/shop/ak47-emerald-fn.png",
    },
    {
        id: 13,
        tipo: "cuchillo",
        stock: 10,
        precio: 6500,
        descipcion: "Falchion Marble",
        imageUrl: "../../src/multimedia/images/shop/knife-falchion-marble-fn.png",
    },
    {
        id: 14,
        tipo: "cuchillo",
        stock: 10,
        precio: 2500,
        descipcion: "Flip Scorched",
        imageUrl: "../../src/multimedia/images/shop/knife-flip-scorched-ww.png",
    },
    {
        id: 15,
        tipo: "cuchillo",
        stock: 10,
        precio: 6400,
        descipcion: "Flip Ultraviolet",
        imageUrl: "../../src/multimedia/images/shop/knife-flip-ultraviolet-ww.png",
    },
    {
        id: 16,
        tipo: "cuchillo",
        stock: 10,
        precio: 2500,
        descipcion: "Flip Ultraviolet",
        imageUrl: "../../src/multimedia/images/shop/knife-flip-ultraviolet-ww.png",
    },
    {
        id: 17,
        tipo: "cuchillo",
        stock: 10,
        precio: 2500,
        descipcion: "Gut Damascus",
        imageUrl: "../../src/multimedia/images/shop/knife-gut-damascus-ft.png",
    },
    {
        id: 18,
        tipo: "rifle",
        stock: 10,
        precio: 2500,
        descipcion: "M4A4 Desolate",
        imageUrl: "../../src/multimedia/images/shop/m4a4-desolate-fn.png",
    },
    {
        id: 19,
        tipo: "smg",
        stock: 10,
        precio: 2500,
        descipcion: "MAC10 Neonrider",
        imageUrl: "../../src/multimedia/images/shop/mac10-neonrider-fn.png",
    },
    {
        id: 20,
        tipo: "smg",
        stock: 10,
        precio: 2500,
        descipcion: "MAG7 Monstercall",
        imageUrl: "../../src/multimedia/images/shop/mag7-monstercall-bs.png",
    }, {
        id: 21,
        tipo: "pistola",
        stock: 10,
        precio: 2500,
        descipcion: "USP Guardian",
        imageUrl: "../../src/multimedia/images/shop/usps-guardian-fn.png",
    }, {
        id: 22,
        tipo: "pistola",
        stock: 10,
        precio: 2500,
        descipcion: "USP Stanless",
        imageUrl: "../../src/multimedia/images/shop/usps-stainless-bs.png",
    }
]



/****************************** Render principal de la tienda **************************************/

/* Subo esto del carrito arriba para que funciona desde el 
principio el contador del carrito*/

let contadorCarrito =document.getElementById("contador-carrito");
let carrito = [];
contadorCarrito.innerText = carrito.length



/* Funcionalidad de agregar botón */

function addToCart(prodId) {

    const item = stockProductos.find((prod) => prod.id === prodId)
    carrito.push(item)
    contadorCarrito.innerText = carrito.length
    localStorage.setItem("carrito", JSON.stringify(carrito))

}

/* funtion renderizar */

function renderizar(stockProductos) {

    /* Siempre limpio pantalla para reutilizar en los filtros */

    let listaProductos = document.getElementById("productos-tienda");
    listaProductos.innerHTML = "";

    /* Recorro el array de productos para mostrar */
    stockProductos.forEach(prod => {
        let productosHTML = `
                    <div class="col">
                        <div class="card product__card" style="width: 18rem;">
                            <img src="${prod.imageUrl}" class="card-img-top" alt="${prod.descipcion}">
                            <div class="card-body justify-content-evenly">
                                <h5 class="card-title">${prod.descipcion}</h5>
                                <p class="card-text">$ ${prod.precio}</p>
                                <button class="button__item" marcador="${prod.id}">Agregar <i class="fa-solid fa-cart-shopping"></i></i></button>
                            </div>
                        </div>
                    </div>
                    `
        listaProductos.innerHTML += productosHTML;
        /* A cada producto le agrego el event listener con el ID del producto que es único */
        /* console.log(document.getElementById(`item${prod.id}`)) */
    })
    const buttonAddToCart = [...document.getElementsByClassName("button__item")];
    console.log(buttonAddToCart)
    buttonAddToCart.forEach(button => button.addEventListener("click", (e) => {
        addToCart(parseInt(e.target.getAttribute("marcador")))
    }))


}


/* Ejecuto render inicial de todos los productos */

renderizar(stockProductos)













/****************************** Filters ************ **************************/

function applyFilter(productType) {

    let showOnlyType = stockProductos.filter(producto => producto.tipo === productType)
    /* console.log(showOnlyType) */
    renderizar(showOnlyType)

}

/* Assign button filters */

let rifleFilter = document.getElementById("rifle-filter")
let pistolFilter = document.getElementById("pistol-filter")
let smgFilter = document.getElementById("smg-filter")
let knifeFilter = document.getElementById("knife-filter")
let allFilter = document.getElementById("all-filter")


/* Specific button filters */

rifleFilter.addEventListener("click", () => applyFilter("rifle"))
pistolFilter.addEventListener("click", () => applyFilter("pistola"))
smgFilter.addEventListener("click", () => applyFilter("smg"))
knifeFilter.addEventListener("click", () => applyFilter("cuchillo"))

/* All */

allFilter.addEventListener("click", () => renderizar(stockProductos))
















/******************** Contenedor del Carrito y funciones **************************/


let botonVaciar = document.getElementById("boton-vaciar");
let contenedorCarrito = document.getElementById("carrito-contenedor");
let preciototalHTML = document.getElementById("precio-total")
console.log("A")
preciototalHTML.innerText = 0


document.addEventListener("DOMContentLoaded", ()=>{
    if(localStorage.getItem("carrito")){
        /* Si existe carrito actualizo */
        carrito = JSON.parse(localStorage.getItem("carrito"));
        actualizarCarrito;
    }


})

function deleteToCart(prodId) {

    const item = carrito.find((prod) => prod.id === prodId);
    const indice = carrito.indexOf(item);
    carrito.splice(indice, 1)
    actualizarCarrito()
    contadorCarrito.innerText = carrito.length

}

function deleteAllCart(){

    carrito.length
    actualizarCarrito();
    contadorCarrito.innerText = carrito.lengths
}


function actualizarCarrito() {

    contenedorCarrito.innerHTML = "";
    carrito.forEach((prod) => {


            let carritoHTML = `
                        <div class="card mb-3" style="max-width: 540px;">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="${prod.imageUrl}" class="img-fluid rounded-start" alt="${prod.descipcion}">
                                </div>
                                 <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">${prod.descipcion}</h5>
                                        <p class="card-text">${prod.precio}</p>
                                        <button class="button__delete" onclick="deleteToCart(${prod.id})">Agregar <i class="fa-solid fa-cart-shopping"></i></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>    
        `
            contenedorCarrito.innerHTML += carritoHTML;

        }

    )
    contadorCarrito.innerText = carrito.length;
    preciototalHTML.innerText = carrito.reduce((acc,prod) => acc + prod.precio, 0)
}



botonVaciar.addEventListener("click",() => actualizarCarrito())

