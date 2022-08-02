/* ------------------- Defino variables de stock y precio ------------------- */
let precioFinal = 0;
let cantidadCompra = 0;
let idCompra = 0;
let comprar = true;
let seguirComprando = true;

/* Arreglo de tipo de armas */

let stockProductos = [{
        id: 1,
        tipo: "AK-47",
        stock: 10,
        precio: 2300,
        imageUrl: "../../src/multimedia/images/shop/ak47-nightwish-ww.png",
    },
    {
        id: 2,
        tipo: "AWP",
        stock: 2,
        precio: 3500,
        imageUrl: "../../src/multimedia/images/shop/awp-hyperbeast-ft.png",
    },
    {
        id: 3,
        tipo: "USP",
        stock: 5,
        precio: 1800,
        imageUrl: "../../src/multimedia/images/shop/usps-orange-ft.png",
    },
    {
        id: 4,
        tipo: "M4A1-S",
        stock: 6,
        precio: 2500,
        imageUrl: "../../src/multimedia/images/shop/m4a1s-printstream-ft.png",
    },
    {
        id: 5,
        tipo: "GLOCK",
        stock: 10,
        precio: 1000,
        imageUrl: "../../src/multimedia/images/shop/glock-pinkddpat-ww.png",
    }
]



/* ---------------- Listar productos en la web--------------- */


let listaProductos = document.getElementById("productos-tienda")

/* Renderizar */

for (const prod of stockProductos) {

    let productosHTML = `
                    <div class="col-12 col-md-4 m-5 d-flex justify-content-center">
                        <div class="card" style="width: 18rem;">
                            <img src="${prod.imageUrl}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${prod.tipo}</h5>
                                <p class="card-text">$ ${prod.precio}</p>
                                <a href="#" class="btn btn-primary">Agregar al carrito</a>
                            </div>
                        </div>
                    </div>
                    `
    listaProductos.innerHTML+=productosHTML;

}