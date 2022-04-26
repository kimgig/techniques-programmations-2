//const Age  = (majeur) => majeur >= 18;
//const arrayAge= [18, 20, 19, 30, 45];
//console.log(arrayAge.every(Age));

//Exemple d'une fonction qui représente le fonctionnement de array.every
//Retourne vrai si l'évaluation de chacune des valeurs du tebleau répond au critère d'évaluation

function MajeurEtVaccine(arrOfAge, majeur)
{                  
    let unAdulte = true;
    for (let i = 0; i < arrOfAge.length; i++)
    {        
        if (arrOfAge[i] < majeur)
        { unAdulte = false;
          break;
        }            
    }    
    return unAdulte;
}
const ADULTE = 18;
const arrayAge =  [18, 20, 19, 30, 45]; // Retourne true
//const arrayAge =  [5, 12, 18, 20, 19, 30, 45]; // Retourne false
console.log(MajeurEtVaccine(arrayAge, ADULTE));