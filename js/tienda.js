/* ------------------- Defino variables de stock y precio ------------------- */
let precioFinal = 0;
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
        imageUrl: "../../src/multimedia/images/shop/ak47-nightwish-ww.png",
    },
    {
        id: 2,
        tipo: "rifle",
        stock: 2,
        precio: 3500,
        imageUrl: "../../src/multimedia/images/shop/awp-hyperbeast-ft.png",
    },
    {
        id: 3,
        tipo: "pistola",
        stock: 5,
        precio: 1800,
        imageUrl: "../../src/multimedia/images/shop/usps-orange-ft.png",
    },
    {
        id: 4,
        tipo: "rifle",
        stock: 6,
        precio: 2500,
        imageUrl: "../../src/multimedia/images/shop/m4a1s-printstream-ft.png",
    },
    {
        id: 5,
        tipo: "pistola",
        stock: 10,
        precio: 1000,
        imageUrl: "../../src/multimedia/images/shop/glock-pinkddpat-ww.png",
    },
    {
        id: 6,
        tipo: "rifle",
        stock: 10,
        precio: 2500,
        imageUrl: "../../src/multimedia/images/shop/ak47-emerald-fn.png",
    },
    {
        id: 7,
        tipo: "rifle",
        stock: 10,
        precio: 3500,
        imageUrl: "../../src/multimedia/images/shop/awp-lightning-fn.png",
    },
    {
        id: 8,
        tipo: "pistola",
        stock: 10,
        precio: 1500,
        imageUrl: "../../src/multimedia/images/shop/desert-kumicho-fn.png",
    },
    {
        id: 9,
        tipo: "rifle",
        stock: 10,
        precio: 800,
        imageUrl: "../../src/multimedia/images/shop/famas-commem-fn.png",
    },
    {
        id: 10,
        tipo: "pistola",
        stock: 10,
        precio: 1100,
        imageUrl: "../../src/multimedia/images/shop/glock-vogue.mw_.png",
    },
    {
        id: 11,
        tipo: "cuchillo",
        stock: 10,
        precio: 5500,
        imageUrl: "../../src/multimedia/images/shop/knife-bayonet-ultraviolet-ww.png",
    },
    {
        id: 12,
        tipo: "cuchillo",
        stock: 10,
        precio: 2500,
        imageUrl: "../../src/multimedia/images/shop/ak47-emerald-fn.png",
    },
    {
        id: 13,
        tipo: "cuchillo",
        stock: 10,
        precio: 6500,
        imageUrl: "../../src/multimedia/images/shop/knife-falchion-marble-fn.png",
    },
    {
        id: 14,
        tipo: "cuchillo",
        stock: 10,
        precio: 2500,
        imageUrl: "../../src/multimedia/images/shop/knife-flip-scorched-ww.png",
    },
    {
        id: 15,
        tipo: "rifle",
        stock: 10,
        precio: 6400,
        imageUrl: "../../src/multimedia/images/shop/knife-flip-ultraviolet-ww.png",
    },
    {
        id: 16,
        tipo: "cuchillo",
        stock: 10,
        precio: 2500,
        imageUrl: "../../src/multimedia/images/shop/knife-flip-ultraviolet-ww.png",
    },
    {
        id: 17,
        tipo: "cuchillo",
        stock: 10,
        precio: 2500,
        imageUrl: "../../src/multimedia/images/shop/knife-gut-damascus-ft.png",
    },
    {
        id: 18,
        tipo: "rifle",
        stock: 10,
        precio: 2500,
        imageUrl: "../../src/multimedia/images/shop/m4a4-desolate-fn.png",
    },
    {
        id: 19,
        tipo: "smg",
        stock: 10,
        precio: 2500,
        imageUrl: "../../src/multimedia/images/shop/mac10-neonrider-fn.png",
    },
    {
        id: 20,
        tipo: "smg",
        stock: 10,
        precio: 2500,
        imageUrl: "../../src/multimedia/images/shop/mag7-monstercall-bs.png",
    }, {
        id: 21,
        tipo: "pistola",
        stock: 10,
        precio: 2500,
        imageUrl: "../../src/multimedia/images/shop/usps-guardian-fn.png",
    }, {
        id: 22,
        tipo: "pistola",
        stock: 10,
        precio: 2500,
        imageUrl: "../../src/multimedia/images/shop/usps-stainless-bs.png",
    }
]



/* ---------------- Listar productos en la web--------------- */

/* funtion renderizar */

function renderizar(stockProductos) {

    /* Siempre limpio pantalla para reutilizar en los filtros */

    let listaProductos = document.getElementById("productos-tienda");
    listaProductos.innerHTML = "";

    /* Recorro el array de productos para mostrar */
    for (const prod of stockProductos) {

        let productosHTML = `
                    <div class="col">
                        <div class="card product__card" style="width: 18rem;">
                            <img src="${prod.imageUrl}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${prod.tipo}</h5>
                                <p class="card-text">$ ${prod.precio}</p>
                                <a href="#" class="btn btn-primary">Agregar al carrito</a>
                            </div>
                        </div>
                    </div>
                    `
        listaProductos.innerHTML += productosHTML;

    }
}

/* Ejecuto render inicial de todos los productos */


renderizar(stockProductos)

function applyFilter(productType) {

    let showOnlyType = stockProductos.filter(producto => producto.tipo === productType)
    console.log(showOnlyType)
    renderizar(showOnlyType)

}


/****************** Filtros *************************/

/* Ak Filter */
let rifleFilter = document.getElementById("rifle-filter")
let pistolFilter = document.getElementById("pistol-filter")
let smgFilter = document.getElementById("smg-filter")
let knifeFilter = document.getElementById("knife-filter")
let allFilter = document.getElementById("all-filter")

/* Assign funtion */

/* Specific */

rifleFilter.addEventListener("click", () => applyFilter("rifle"))
pistolFilter.addEventListener("click", () => applyFilter("pistola"))
smgFilter.addEventListener("click", () => applyFilter("smg"))
knifeFilter.addEventListener("click", () => applyFilter("cuchillo"))

/* All */

allFilter.addEventListener("click", () => renderizar(stockProductos))