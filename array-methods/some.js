// Retourne vrai si au moins un élément répond au critère
//const arrayNbr = [1, 2, 3, 4, 5, 6];
//const pair = (element) => element % 2 === 0
//console.log(arrayNbr.some(pair));

//Exemple de focntion qui représente le fonctionnement de array.some
//Retourne vrai si au minimum un élément répond au critère d'évaluation

function Pair(arrOfNumbers, modulo)
{        
    let nbrPair = [];         
    for (let i = 0; i < arrOfNumbers.length; i++)
    {
        if (arrOfNumbers[i] % modulo === 0)
        {
            nbrPair.push(arrOfNumbers[i]);
        }
    }    
    return nbrPair;
}
const MODULO = 2;
const arrayNbr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(Pair(arrayNbr, MODULO));