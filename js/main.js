/* ------------------- Defino variables de stock y precio ------------------- */
let precioFinal = 0;
let cantidadCompra = 0;
let itemCompra=0;
let itemVenta={};

/* Arreglo de tipo de armas */

let stock = [{
        tipo: "AK-47",
        stock: 10,
        precio: 2300,
    },
    {
        tipo: "AWP",
        stock: 2,
        precio: 3500,
    },
    {
        tipo: "USP",
        stock: 5,
        precio: 1800,
    },
    {
        tipo: "M4A1-S",
        stock: 6,
        precio: 2500,
    },
    {
        tipo: "GLOCK",
        stock: 10,
        precio: 1000,
    }
]


/* ---------------------- Inicio del programa de venta ---------------------- */

alert("👋¡Bienvenido a nuestro sistema de venta!")
itemCompra = parseInt(prompt("👋¡Ingresa el número del item que quieras comprar:\n 1. AK \n 2.AWP \n 3.USP \n 4.M4A1 \n 5.Glock"))
//que pasaria si ingreso un numero negativo?
//y si ingreso letras?
//que sucederia si hoy decido agregar un producto extra a la lista???
//la lista deberia generarse dinamicamente
cantidadCompra = parseInt(prompt("👋¡Ingresa ahora la cantidad que quieras comprar:"))
//que pasaria si ingreso un numero negativo?
//y si ingreso letras?
//armar el condicional correspondiente por favor
switch (itemCompra) {
    case 1:
        itemVenta = stock.find(itemCompra => itemCompra.tipo == "AK-47") //esta linea
        venta(itemVenta,cantidadCompra); //y esta linea
        break;
    case 2:
        itemVenta = stock.find(itemCompra => itemCompra.tipo == "AWP") //se repiten
        venta(itemVenta,cantidadCompra); //se repiten
        break;
    case 3:
        itemVenta = stock.find(itemCompra => itemCompra.tipo == "USP") //se repiten
        venta(itemVenta,cantidadCompra); //se repiten
        break;
    case 4:
        itemVenta = stock.find(itemCompra => itemCompra.tipo == "M4A1-S") //se repiten
        venta(itemVenta,cantidadCompra); //se repiten
        break;
    case 5:
        itemVenta = stock.find(itemCompra => itemCompra.tipo == "GLOCK") //QUE USO PARA NO REPETIR CODIGO???
        venta(itemVenta,cantidadCompra); //USO FUNCIONES! PARA LA PRE-ENTREGA OPTIMIZAR ESTO POR FAVOR!
        break;
    default:
        break;
}


/* ----------------------- Función de control de stock ---------------------- */
function controlStock(itemstock, cantidadVenta) {

    if (cantidadVenta <= itemstock) {
        return true;
    } else {
        return false;
    }
}


/* ---------------- Función de venta y actualizacion de stock --------------- */

function venta(item,cantidadCompra) {
    /* Controlo el stock y si hay stock vendo y actualizo */
    if (controlStock(item.stock, cantidadCompra)) {
        item.stock = item.stock - cantidadCompra;
        const precioFinal = cantidadCompra * item.precio;
        alert("Venta exitosa de " + cantidadCompra + " " + item.tipo + " Precio final: " + precioFinal);
    } else {
        alert("Lo sentimos, no tenemos la cantidad que solicitaste el stock actual es: " + itemStock);
        return 0;
    }
}