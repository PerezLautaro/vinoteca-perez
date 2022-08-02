//el cliente ingresa el precio del producto que quiere comprar
let precioProducto=parseInt(prompt("Ingresa el precio del producto (-1 para salir)"));
let sumaProductos=0;
let cantidadProductos=0;

//bucle para continuar preguntado precio de productos, por si quiere seguir comprando.
while(precioProducto!=-1){
    //va sumando los precios de los productos
    sumaProductos=sumaProductos+precioProducto;
    //suma de a uno en uno la cantidad de productos
    cantidadProductos++;
    //se repite el ciclo
    precioProducto=parseInt(prompt("Ingresa el precio del producto (-1 para salir)"));
}

//devuelve la cantidad de productos que lleva y el precio total a pagar.
alert("Usted compro "+cantidadProductos+" producto/s, por un valor total de $"+sumaProductos);

//pregunta por el metodo de pago y ofrece descuento en efectivo.
let metodoDePago=prompt("Ingrese 1 para pagar en efectivo con 10% de descuento, o 2 para pagar con tarjeta");

if (metodoDePago == 1) {
    
    //funcion para el descuento
    function descuento () {
        return sumaProductos * 0.9;
    }

    let totalConDesc = descuento();
    alert("Ha seleccionado pagar en efectivo. El total a pagar con descuento es $"+totalConDesc);

}else if (metodoDePago == 2) {
    alert("Ha seleccionado pagar con tarjeta. El total a pagar es $"+sumaProductos);
}