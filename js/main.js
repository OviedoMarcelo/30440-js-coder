let numeroDesde = 0;
let numeroHasta = 0;

alert("👋¡Bienvenido!👋 te mostraremos todos los números pares entre el  rango de número que nos indiques")

numeroDesde = prompt("Ingrese el número inicial");
numeroHasta = prompt("Ingrese el número final");

for (let index = numeroDesde; index <= numeroHasta; index++) {

    /* ---Se dividie por 2 y si el resto es 0 el número es par y se muestra en consola--- */

    if ((index % 2) == 0) {
        console.log("El número " + index + " es par");
    }
}

alert("Final del script ✔")