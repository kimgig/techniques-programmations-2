
//arrayFind.find retourne le premier nombre plus grand que 30
//const arrayNumber = [10, 20, 30, 40, 50];
//const Find = arrayNumber.find(element => element > 30);
//console.log(Find);

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
arrayNumber = [20, 5, 30, 50, 75];
console.log(PlusGrand(arrayNumber, PLUS_GRAND));