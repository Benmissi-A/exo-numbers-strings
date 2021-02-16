let txt = 'C\'était à Mégara, faubourg de Carthage, dans les jardins d\'Hamilcar.'
/* 

for(let i = 0 ; i < txt.length ; ++i){
  console.log(txt[i])
} 
*/

// on ameliore  l'exercice

for(let i = 0 ; i < txt.length ; ++i){
if(i === 0){
  console.log('titre: Salammbô')
   console.log('auteur: Gustave Flaubert')
    console.log('annee; 1862')
}

  console.log(txt[i])
}

