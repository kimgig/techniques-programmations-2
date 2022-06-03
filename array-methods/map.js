//const number = [1,2,3,4,5];
//const sum = number.map(nbr => nbr + 2);
//console.log(sum);

//Exemple de focntion qui représente le fonctionnement de array.map
//Calcule la somme de chacun des nombres dans le tableau + 2
//Retourne un nouveau tableau
function sum(arrOfNumbers, number)
{    
    let arrNewNumbers = [];    
    arrOfNumbers.forEach(element => {arrNewNumbers.push(element + number)});
    return arrNewNumbers;
}
const ADD_ME = 2;
const arrNumbers = [1,2,3,4,5];
console.log(sum(arrNumbers, ADD_ME));
