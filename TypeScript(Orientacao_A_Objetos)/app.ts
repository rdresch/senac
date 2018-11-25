import { Animal } from "./animal";
import { Zoo } from "./zool\u00F3gico";


let fred = new Animal('cachorro', 'grande')
let jarvis = new Animal('gato', 'médio')
let macanuda = new Animal('girafa', 'grande')

let listaDeAnimais: Animal[] = []


//psuh método para inserir no array
listaDeAnimais.push(fred)
listaDeAnimais.push(jarvis)
listaDeAnimais.push(macanuda)

let zooSapucaia = new Zoo('sapucaia', listaDeAnimais)
console.log(zooSapucaia.mostrarListadeAnimais())

//tsc -w automatico typescript



//Classe Animal


//Classe invertebrados

//Poríferos
//1- tipo
//Platelmintos
//1- tipo

//Classe vertebrados
//numero de patas
//cor

//Classe Peixes
//metodo nadar

//Classe anfibio herda peixes
//2 métodos (nadar, caminhar)

//Classe mamífero
//- 4 tipos

//Classe Aves
//possui penas, voa, coloração
//- 4 tipos

//Classe répteis
//2 - tipos

//cor - nome