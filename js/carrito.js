//array de objetos (productos)
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

//declaracion
let codigo;
let precioPorCodigo;
let cantidadProductos=0;
let carrito = [];

//funcion para ir armando el carrito
function armarCarrito(){
    //bucle en el que pregunta al cliente qué producto desea comprar en funcion de un codigo, y los va sumando al carrito teniendo en cuenta su precio.
    while (codigo!=-1) {
        codigo=parseInt(prompt("¿Que desea comprar? 1: vino, 2: cerveza, 3: espumante, 4:espirituosa. (-1 para finalizar compra)"));
       
        for (const producto of productos){
            if(producto.codigo == codigo){
                precioPorCodigo = producto.precio;
                console.log (precioPorCodigo);
            }
        }
    
        carrito.push(precioPorCodigo); //metodo push

        //suma de a uno en uno la cantidad de productos
        cantidadProductos++;
    }

    //verifico en consola
    console.log(carrito);
    console.log(cantidadProductos);
}

//ejecuto la funcion
armarCarrito();

//funcion de orden superior (reduce): para sumar el total del carrito. 
let sumaCarrito = carrito.reduce(((acumulador, producto) => acumulador + precioPorCodigo),0);

//verifico en consola
console.log(sumaCarrito);

//salida para el cliente
alert("Usted compro "+cantidadProductos+" producto/s, por un valor total de $"+sumaCarrito);

//pregunta al cliente por el metodo de pago y ofrece descuento en efectivo.
let metodoDePago=prompt("Ingrese 1 para pagar en efectivo con 10% de descuento, o 2 para pagar con tarjeta");

//funcion para pagar el carrito
function pagarCarrito () {
    if (metodoDePago == 1) {
    
        //funcion para el descuento
        function descuento () {
            return sumaCarrito * 0.9;
        }
    
        let totalConDesc = descuento();
        alert("Ha seleccionado pagar en efectivo. El total a pagar con descuento es $"+totalConDesc);
    
    }else if (metodoDePago == 2) {
        alert("Ha seleccionado pagar con tarjeta. El total a pagar es $"+sumaCarrito);
    }

}

//ejecuta la funcion del pago de la compra
pagarCarrito();