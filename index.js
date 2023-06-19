// constantes a utilizar
// const opcion_salir = 4;
const ArrayProductos = []
// const ArrayCarrito = [];
// const ArrayPromociones = [];
let codigoProductos = 0


//productos

class Producto {
    constructor (codigo,nombre, precio,categoria, cantidad,stock ){
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
    this.cantidad = cantidad;
    this.stock = stock
    }
}


// creamos los productos y promociones, luego los incorporamos al array

const nueces = new Producto (codigoProductos++, "Nueces", 1850, "Frutos Secos", "por 1kg", 10 );
ArrayProductos.push (nueces);

const almendras = new Producto (codigoProductos++,"Almendras", 4800, "Frutos Secos", "por 1kg", 20 );
ArrayProductos.push (almendras);

const pistachos = new Producto (codigoProductos++, "Pistachos", 4950, "Frutos Secos", "por 1kg", 30);
ArrayProductos.push (pistachos);

const anana = new Producto (codigoProductos++, "Anana", 1500, "Frutas Abrillantadas", "por 1kg", 40);
ArrayProductos.push (anana);

const ciruelas = new Producto (codigoProductos++, "Ciruelas", 1700, "Frutas Abrillantadas", "por 1kg", 45);
ArrayProductos.push (ciruelas);

const duraznos = new Producto (codigoProductos++, "duraznos", 2100, "Frutas Abrillantadas", "por 1kg", 50);
ArrayProductos.push (duraznos);


const oregano = new Producto (codigoProductos++, "Oregano", 600, "Condimentos", "por 500g", 60);
ArrayProductos.push (oregano);

const ajiMolido = new Producto (codigoProductos++, "Aji Molido", 600, "Condimentos", "por 500g", 55);
ArrayProductos.push (ajiMolido);

const ajoEnPolvo = new Producto (codigoProductos++, "Ajo En Polvo", 600, "Condimentos", "por 500g", 150) ;
ArrayProductos.push (ajoEnPolvo);

const promo1 = new Producto (codigoProductos++, "nueces y almendras", 6000, "promo", "por 2kg", 15);
ArrayProductos.push (promo1);

const promo2 = new Producto (codigoProductos++, "ciruelas y durazno", 3200, "promo", "2kg", 250);
ArrayProductos.push (promo2);

const promo3 = new Producto (codigoProductos++, "oregano y ajo", 1000, "promo", "por 1kg", 500) ;
ArrayProductos.push (promo3);

// const mostrarProductoPorCategoria = (categoria) =>{
//         const filtrado = ArrayProductos.filter((el)=> el.categoria === categoria); 
//         let mensajeAMostrar = '';
//         filtrado.forEach((el) =>{
//                 mensajeAMostrar += "\n" + el.codigo + "-Producto: " + el.nombre + " " + "\nPrecio: " + el.precio
//         });
//         const codigo = parseInt(prompt(mensajeAMostrar + "\n" + "Ingrese producto para agregar al carrito"));
//         const productoEcontrado = ArrayProductos.find(el => el.codigo === codigo);
//         ArrayCarrito.push(productoEcontrado);
//     }
    

// Creamos las categorias a utilizar


// const verProductos = () => {
//     let opcion ;
//     opcion = parseInt(prompt("Elige el producto que desea \n 1-Frutos Secos \n 2- Frutas Abrillantadas \n 3-Condimentos \n 4- Volver al menu anterior"));
//     while(opcion != opcion_salir){
//         switch(opcion){
//             case 1: 
//                     mostrarProductoPorCategoria("Frutos Secos");
//                     break;
//             case 2: mostrarProductoPorCategoria("Frutas Abrillantadas");
//                     break;
//             case 3: mostrarProductoPorCategoria("Condimentos");
//                     break;
//             default:
//                 alert("Ingreso una opcion invalida.");
//                 break;
//         }
//         opcion = parseInt(prompt("Elige el producto que desea \n 1-Frutos Secos \n 2- Frutas Abrillantadas \n 3-Condimentos \n 4- Volver al menu anterior"));
//     }
// }
// //creamos las opciones de promociones

// const verPromociones = () => {
//     let opcion ;
//     opcion = parseInt(prompt("Elige la promocion que desea \n 1-nuces y almedras \n 2- ciruelas y durazno \n 3-oregano y ajo \n 4- Volver al menu anterior"));
//     while(opcion != opcion_salir){
//         switch(opcion){
//             case 1: 
//                     mostrarPromo("nuces y almedras");
//                     break;
//             case 2: mostrarPromo("ciruelas y durazno");
//                     break;
//             case 3: mostrarPromo("oregano y ajo");
//                     break;
//             default:
//                 alert("Ingreso una opcion invalida.");
//                 break;
//         }
//         opcion = parseInt(prompt("Elige el producto que desea \n 1-Frutos Secos \n 2- Frutas Abrillantadas \n 3-Condimentos \n 4- Volver al menu anterior"));
//     }
// }

// // const mostrarPromo = (categoria) =>{
// //         const filtrado = ArrayPromociones.filter((el)=> el.categoria === categoria); 
// //         let promoAMostrar = '';
// //         filtrado.forEach((el) =>{
// //         promoAMostrar += "\n" + el.codigo + "-Promociones: " + el.nombre + " " + "\nPrecio: " + el.precio
// //         });
// //         const codigo = parseInt(prompt( promoAMostrar + "\n" + "Ingrese promo para agregar al carrito"));
// //         const promoEcontrada = ArrayPromociones.find(el => el.codigo === codigo);
// //         ArrayCarrito.push(promoEcontrada);
// //     }

// //Creamos el carrito

// // const verCarrito = () => {
// //     let mensajeAMostrar = 'Lista de procutos y/o promociones \n';
// //     ArrayCarrito.forEach((el) =>{
// //     mensajeAMostrar += "\n" + "Producto: " + el.nombre + " " + "\nPrecio: " + el.precio
// //     });
// //     const total = ArrayCarrito.reduce((acumulador,element) => acumulador + element.precio,0)
// //     mensajeAMostrar += "\nEl total es: " + total
// //     alert(mensajeAMostrar);
// // }

// // creamos el menu principal

// let opcion = parseInt(prompt("Elige la opcion que desea \n 1-productos \n 2- Promociones \n 3-Carrito de compras \n 4- Salir"))

// while(opcion != opcion_salir ){

//     switch(opcion){
//         case 1: 
//                 verProductos();
//                 break;
//         case 2: 
//         verPromociones();
//                 break;
//         case 3: 
//         verCarrito();
//                 break;
//         default:
//             alert("Ingreso una opcion invalida.");
//             break;
//     }

//     opcion = parseInt(prompt("Elige la opcion que desea \n 1-productos \n 2- Combos disponibles \n 3-Carrito de compras \n 4- Salir"));
// }

// alert("Gracias vuelva pronto.")



const pedido = ArrayProductos.map((el) =>{

if (el.stock < 25){
        return{
               codigo: el.codigo,
               nombre: el.nombre,
                categoria: el.categoria,
                stock: el.stock,
                almacenamiento: "hay que pedir mas mercaderia" }
}
else {
        return {
               codigo: el.codigo,
               nombre: el.nombre,
                categoria: el.categoria,
                stock: el.stock,
                almacenamiento: "el sotck de este producto esta bien"}
}

})

console.log (pedido)
