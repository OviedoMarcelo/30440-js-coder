/* ------------------- Defino variables de stock y precio ------------------- */
let akStock = 4;
let akPrecio = 2300;

let awpStock = 2;
let awpPrecio = 3500;

let uspStock = 5;
let uspPrecio = 1800;

let m4a1Stock = 6;
let m4a1Precio = 2500;

let glockStock = 10;
let glockPrecio = 1000;

let precioFinal = 0;
let itemCompra = 0;
let cantidadCompra = 0;



/* ---------------------- Inicio del programa de venta ---------------------- */


alert("👋¡Bienvenido a nuestro sistema de venta!")
itemCompra = parseInt(prompt("👋¡Ingresa el número del item que quieras comprar:\n 1. AK \n 2.AWP \n 3.USP \n 4.M4A1 \n 5.Glock"))
cantidadCompra = parseInt(prompt("👋¡Ingresa ahora la cantidad que quieras comprar:"))
switch (itemCompra) {
    case 1:
        venta(akStock, cantidadCompra, akPrecio, "AK47");
        break;
    case 2:
        venta(awpStock, cantidadCompra, awpPrecio, "AWP");
        break;
    case 3:
        venta(uspStock, cantidadCompra, uspPrecio, "USP");
        break;
    case 4:
        venta(m4a1Stock, cantidadCompra, m4a1Precio, "M4A1");
        break;
    case 5:
        venta(glockStock, cantidadCompra, glockPrecio, "Glock");
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

function venta(itemStock, cantidadCompra, itemPrecio, descripcion) {
    let precioFinal = 0;
    if (controlStock(itemStock, cantidadCompra)) {
        itemStock = itemStock - cantidadCompra;
        precioFinal = cantidadCompra * itemPrecio;
        alert("Venta exitosa de " + cantidadCompra + " " + descripcion + " Precio final: " + precioFinal);
    } else {
        alert("Lo sentimos, no tenemos la cantidad que solicitaste el stock actual es: " + itemStock);
        return 0;
    }
}