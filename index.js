
var cantidadProductoElemento = document.getElementById("cantidadProducto");
var totalPagarElemento = document.getElementById("totalPagar");
var aumentarBoton = document.getElementById("aumentar");
var disminuirBoton = document.getElementById("disminuir");

var total = 0;
var cantidad = 0;
var precioUnitario = 400000;

function actualizarTotal() {
    totalPagarElemento.innerHTML =  (total).toFixed(2);
}

function aumentarCantidad() {
    cantidad++;
    total = precioUnitario * cantidad;
    cantidadProductoElemento.innerHTML = cantidad;
    actualizarTotal();
}

function disminuirCantidad() {
    if (cantidad > 0) {
        cantidad--;
        total = precioUnitario * cantidad;
        cantidadProductoElemento.innerHTML = cantidad;
        actualizarTotal();
    }
}


aumentarBoton.addEventListener("click", aumentarCantidad);
disminuirBoton.addEventListener("click", disminuirCantidad);
