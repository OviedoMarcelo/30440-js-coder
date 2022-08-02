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
        imageUrl: "..\src\multimedia\images\shop\ak47-nightwish-ww.png",
    },
    {
        id: 2,
        tipo: "AWP",
        stock: 2,
        precio: 3500,
        imageUrl: "..\src\multimedia\images\shop\awp-hyperbeast-ft.png",
    },
    {
        id: 3,
        tipo: "USP",
        stock: 5,
        precio: 1800,
        imageUrl:"..\src\multimedia\images\shop\usps-orange-ft.png",
    },
    {
        id: 4,
        tipo: "M4A1-S",
        stock: 6,
        precio: 2500,
        imageUrl:"..\src\multimedia\images\shop\m4a1s-printstream-ft.png" ,
    },
    {
        id: 5,
        tipo: "GLOCK",
        stock: 10,
        precio: 1000,
        imageUrl:"..\src\multimedia\images\shop\glock-pinkddpat-ww.png",
    }
]


/* ---------------------- Inicio del programa de venta ---------------------- */

alert("👋¡Bienvenido a nuestro sistema de venta!")

do {
    /* Entro al loop hasta tener un número válido de item */
    idCompra = parseInt(prompt("👋¡Ingresa el número del item que quieras comprar:\n 1. AK \n 2.AWP \n 3.USP \n 4.M4A1 \n 5.Glock"))
    if (Number(idCompra) == idCompra && idCompra >= 1 && idCompra <= 5) {
        /* Valido que se haya ingresado un número y entre los valores del menú */
        do {
            cantidadCompra = parseInt(prompt("👋¡Ingresa ahora la cantidad que quieras comprar:"))
            if (Number(cantidadCompra) == cantidadCompra) {
                venta(stockProductos, cantidadCompra, idCompra);
            } else {
                alert("Ingrese un número correcto para realizar la compra")
            }
        } while (cantidadCompra = undefined); /* Repito solamente el bucle si no cancela el ingreso de la cantidad */
    } else {
        /* Si no ingresa un número entre 1 o 5 solicita de nuevo */
        alert("Ingrese un valor correcto de producto para continuar la compra")
    }
    seguirComprando = window.confirm("¿Desea seguir comprando?")
} while (seguirComprando);



/* ----------------------- Función de control de stock ---------------------- */
function controlStock(itemstock, cantidadVenta) {

    if (cantidadVenta <= itemstock) {
        return true;
    } else {
        return false;
    }
}


/* ---------------- Función de venta y actualizacion de stock --------------- */

function venta(stockProductos, cantidadCompra, id) {

    const itemVenta = stockProductos.find(itemCompra => itemCompra.id == id)
    /* Controlo el stock y si hay stock vendo y actualizo */
    if (controlStock(itemVenta.stock, cantidadCompra)) {
        itemVenta.stock = itemVenta.stock - cantidadCompra;
        const precioFinal = cantidadCompra * itemVenta.precio;
        alert("Venta exitosa de " + cantidadCompra + " " + itemVenta.tipo + " Precio final: " + precioFinal);
    } else {
        alert("Lo sentimos, no tenemos la cantidad que solicitaste el stock actual es: " + itemVenta.stock);
        return 0;
    }
}


/* ---------------- Listar productos en la web--------------- */