console.log("hola mundo")

let name = 'Miguel' // puedes reasignar un nuevo valor
console.log(name)
name = 'Pablo'
console.log(name)
const lastName = 4
var isDeveloper = true

//todos estos tipo pueden albergar tipops primitivos, el tipado en javascript es debil y dinamico por eso a una varible se le puede asiganr un numero y luego albergar un string.

//Arrays
//push => muta el array original
//concat => realiza una copia con los nuevos valores del array

//let a diferencia de var esta disponible solo en el scope donde se crea

const persona = {
    name:"Miguel",
    twiter:"@midudev",
    age:18,
    isDeveloper:true,
    links:['https://midu.tube', 'https://midu.live']
}

//Formaas de acceder a las propiedades del objeto
// primera forma => console.log(persona.name)
//otra forma suponiendo que se tiene una propiedad dinamica
const field = 'twiter'
console.log(persona[field])

//Funciones
 const sumar = (operando1, operando2) => {
     console.log(operando1)
     console.log(operando2)
     return operando1 + operando2
 }

 console.log(sumar(2,2))

 // Diferencia entre funciones

 //Function expression ^

 //Function Declaration
 function restar(a,b)
 {
     return a-b
 }

 //Diferencia la disponibilidad de la funcion, a diferencia del function expression, dicha funcion solo estara disponible despues de su declaracion,
 //minetras que la Declaration estara disponible de manera global
 