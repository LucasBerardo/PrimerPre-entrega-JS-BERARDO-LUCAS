// constantes a utilizar
const opcion_salir = 4;
const ArrayProductos = []

//productos

class Producto {
    constructor (nombre, precio,categoria, cantidad ){
    // this.codigo
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
    this.cantidad = cantidad;
    }
}

// creamos los productos y los incorporamos al array
const incorporarProductos = () => {
const nueces = new Producto ("Nueces", 1850, "Frutos Secos", "por 1kg" )
ArrayProductos.push (nueces)

const almendras = new Producto ("Almendras", 4800, "Frutos Secos", "por 1kg" )
ArrayProductos.push (almendras)

const pistachos = new Producto ("Pistachos", 4950, "Frutos Secos", "por 1kg")
ArrayProductos.push (nueces)

const anana = new Producto ("Anana", 1500, "Frutas Abrillantadas", "por 1kg")
ArrayProductos.push (anana)

const ciruelas = new Producto ("Ciruelas", 1700, "Frutas Abrillantadas", "por 1kg")
ArrayProductos.push (ciruelas)

const duraznos = new Producto ("duraznos", 2100, "Frutas Abrillantadas", "por 1kg")
ArrayProductos.push (duraznos)


const oregano = new Producto ("Oregano", 600, "Condimentos", "por 500g")
ArrayProductos.push (oregano)

const ajiMolido = new Producto ("Aji Molido", 600, "Condimentos", "por 500g")
ArrayProductos.push (ajiMolido)

const ajoEnPolvo = new Producto ("Ajo En Polvo", 600, "Condimentos", "por 500g")
ArrayProductos.push (ajoEnPolvo)
}

incorporarProductos();




// Creamos las categorias a utilizar

const verProductos = () => {
    let opciones;
    opciones = parseInt(prompt ("Elige el producto que desea \n 1-Futos secos \n 2- Fruntas abrillantadas \n 3-Condimentos \n 4- Volver al menu anterior"))
    while (opciones != opcion_salir){

        switch (opciones){
    
            case 1:
                verFrutosSecos()
                break
    
    
            case 2:
                verFrutasAbrillantadas()
                break
    
            case 3:
                verCondimentos()
                break
    
            case 4:
                break
    
                default: alert("La opcion no es valida")
    
        }
        opciones = parseInt(prompt ("Elige el producto que desea \n 1-Nueces \n 2- Almendras \n 3-Pistachos \n 4- Volver al menu anterior"))
}
}

// Creamos el menu principal

let opciones = prompt ("Elige la opcion que desea \n 1-productos \n 2- Combos disponibles \n 3-Carrito de compras \n 4- Salir")

while (opciones != opcion_salir){

    switch (opciones){

        case 1:
            verProductos()
            break


        case 2:
            verPromociones()
            break

        case 3:
            verCarrito()
            break

        case 4:
            break

            default: alert("Muchas gracias, lo esperamos pronto")

    }

    opciones = parseInt(prompt ("Elige la opcion que desea \n 1-productos \n 2- Combos disponibles \n 3-Carrito de compras \n 4- Salir"))

}

alert ("gracias por su compra, lo esperamos pronto")

