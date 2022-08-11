//creo un array de objetos (productos)
const productos=[
    {
        tipo: "vino",
        nombre: "Luiggi Bosca",
        bodega: "Luiggi Bosca",
        precio: 1600,
        codigo: 1
    },
    {
        tipo: "cerveza",
        nombre: "Amber Lager",
        bodega: "Patagonia",
        precio: 750,
        codigo: 2
    },
    {
        tipo: "espumante",
        nombre: "Champagne Mumm Extra Brut",
        bodega: "Mumm",
        precio: 950,
        codigo: 3
    },
    {
        tipo: "espirituosa",
        nombre: "Ron Bacardi Carta Oro",
        bodega: "Bacardi",
        precio: 1300,
        codigo: 4
    }

];

//el cliente ingresa el codigo de lo que quiere comprar
let codigo=parseInt(prompt("¿Que desea comprar? 1: vino, 2: cerveza, 3: espumante, 4:espirituosa. (-1 para finalizar compra)"));
let precioPorCodigo;
let sumaProductos=0;
let cantidadProductos=0;

//busca el precio del producto en funcion del codigo ingresado
for (const producto of productos){
    if(producto.codigo == codigo){
        precioPorCodigo = producto.precio;
        console.log (precioPorCodigo);
    }
}

//funcion para sumar los productos
function calcularProductos () {
    while(codigo!=-1){
        //va sumando los precios de los productos
        sumaProductos=sumaProductos+precioPorCodigo;
        //suma de a uno en uno la cantidad de productos
        cantidadProductos++;
        //se repite el ciclo
        codigo=parseInt(prompt("¿Que desea comprar? 1: vino, 2: cerveza, 3: espumante, 4:espirituosa. (-1 para finalizar compra)"));
    }
    //devuelve la cantidad de productos que lleva y el precio total a pagar.
    alert("Usted compro "+cantidadProductos+" producto/s, por un valor total de $"+sumaProductos);
}

//ejecuta la funcion
calcularProductos();
  

/* ---------------------------------------------------------------------------------------------------------------------------------------
CODIGO ANTERIOR:

//el cliente ingresa el precio del producto que quiere comprar
let precioProducto=parseInt(prompt("Ingresa el precio del producto (-1 para salir)"));
let sumaProductos=0;
let cantidadProductos=0;

//bucle para continuar preguntado precio de productos, por si quiere seguir comprando.
function calculoProductos () {
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
}

//ejecuta la funcion del calculo de productos
calculoProductos();

//pregunta por el metodo de pago y ofrece descuento en efectivo.
let metodoDePago=prompt("Ingrese 1 para pagar en efectivo con 10% de descuento, o 2 para pagar con tarjeta");

function pagarCarrito () {
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
}

//ejecuta la funcion del pago de la compra
pagarCarrito(); */