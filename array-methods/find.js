
//const arrayNumber = [10, 20, 30, 40, 50];
//const Find = arrayNumber.find(element => element > 30);
//console.log(Find);


//Exemple de fonction représentant le fonctionnement de array.find
//Retourne le premier élément du tableau qui correspond à l'évaluation (nombre > 30)
function PlusGrand(arrOfNumbers, number)
{   
    let nbr = 0;                       
    for (let i = 0; i < arrOfNumbers.length; i++)
    {        
        if (arrOfNumbers[i] > number)
        { nbr = arrOfNumbers[i];
          break;
        }            
    }    
    return nbr;
}
const PLUS_GRAND = 30;
arrayNumber = [20, 5, 30, 12, 50, 75];
console.log(PlusGrand(arrayNumber, PLUS_GRAND));