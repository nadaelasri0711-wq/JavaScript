const inputConcepto = document.getElementById("concepto");
const inputCantidad = document.getElementById("cantidad");
const inputPrecio = document.getElementById("precio");
const btnInsertar = document.getElementById("btnInsertar");
const cuerpoTabla = document.getElementById("cuerpoTabla");

const celdaSubTotal = document.getElementById("subtotal");
const celdaTasa = document.getElementById("tasa");
const celdaImpuestos = document.getElementById("impuestos");
const celdaTotal = document.getElementById("total");

function recalcular(){
    let subtotal = 0;
}

//Recorrer todas las filas y sumar su precio total

const filas = cuerpoTabla.querySelectorAll("tr");
filas.forEach(function(fila){
    subtotal = 
})