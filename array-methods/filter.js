//Array.filter retourne les fruits ayant plus ou égale à 6 lettres
//const fruits = ['Pomme', 'Banane', 'Poire', 'Pamplemousse'];
//const resultat = fruits.filter(fruit=> fruit.length >= 6);
//console.log(resultat);

//Exemple de focntion qui représente le fonctionnement de array.filter
//Retourne les fruits ayant plus ou égale à 6 lettres
function Fruits(arrFruits, numOfLetters)
{        
    let fruitsList = [];         
    for (let i = 0; i < arrFruits.length; i++)
    {
        if (arrFruits[i].length >= numOfLetters)
        {
            fruitsList.push(arrFruits[i]);
        }
    }    
    return fruitsList;
}
const NUMBER_OF_LETTERS = 6;
const lesfruits = ['Pomme', 'Banane', 'Poire', 'Pamplemousse'];
console.log(Fruits(lesfruits, NUMBER_OF_LETTERS));