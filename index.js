let promociones = prompt ("combos disponibles 1-nueces, almendas y coco $60 2- nueces, almendas, coco y pistachos $100 3-mix tropical, mix energetico y mix summer $80 4-tomates disecados, durazno en orejones y pasas de uvas $120 5- Salir")
let total = 0
let cantidad = 0
const calcular = (combo,cantidad) => {
    let resultado = combo * cantidad
    console.log ("Acaba de comprar " + cantidad + " " + "combos de " + combo + " por un total de " + resultado)
    return resultado
}

while (promociones != "5"){

    switch (promociones){

        case "1":
            let combo1 = 60
            cantidad = prompt ("ingrese la cantidad que desea comprar")
            total = total + calcular (combo1, cantidad)
            console.log("$" + combo1 + " " + "x" +" "+ cantidad + " " + "=" + " " + "$" + total)
            break


        case "2":
            let combo2 = 100
            cantidad = prompt ("ingrese la cantidad que desea comprar")
            total = total + calcular(combo2, cantidad)
            console.log("$" + combo2 + " " + "x" +" "+ cantidad + " " + "=" + " " + "$" + total)
            break

        case "3":
            let combo3 = 80
            cantidad = prompt ("ingrese la cantidad que desea comprar")
            total = total + calcular(combo3, cantidad)
            console.log("$" + combo3 + " " + "x" +" "+ cantidad + " " + "=" + " " + "$" + total)
            break

        case "4":
            let combo4 = 120
            cantidad = prompt ("ingrese la cantidad que desea comprar")
            total = total + calcular (combo4, cantidad)
            console.log("$" + combo4 + " " + "x" +" "+ cantidad + " " + "=" + " " + "$" + total)
            break

            default: alert("no es una opcion valida")

    }

    promociones = prompt ("combos disponibles 1-nueces, almendas y coco $60 2- nueces, almendas, coco y pistachos $100 3-mix tropical, mix energetico y mix summer $80 4-tomates disecados, durazno en orejones y pasas de uvas $120 5- Salir")

}

alert ("gracias por su compra, lo esperamos pronto")