let txt =
            'Je suis le ténébreux, - le veuf, - l\'inconsolé,'+
            'Le prince d\'Aquitaine à la tour abolie :'+
            'Ma seule étoile est morte, - et mon luth constellé'+
            'Porte le soleil noir de la Mélancolie.'+

            'Dans la nuit du tombeau, toi qui m\'as consolé,'+
            'Rends-moi le Pausilippe et la mer d\'Italie,'+
            'La fleur qui plaisait tant à mon cœur désolé,'+
            'Et la treille où le pampre à la rose s\'allie.'+

            'Suis-je Amour ou Phébus ? ... Lusignan ou Biron ?'+
            'Mon front est rouge encor du baiser de la reine ;'+
            'J\'ai rêvé dans la grotte où nage la sirène...'+

            'Et j\'ai deux fois vainqueur traversé l\'Achéron ;'+
            'Modulant tour à tour sur la lyre d\'Orphée'+
            'Les soupirs de la sainte et les cris de la fée.'
let LetterE = 'e'
let LetterA = 'a'
let LetterI = 'i'
let LetterO = 'o'
let LetterU = 'u'
let LetterY = 'y'
let count = 0
 
for(let i = 0 ; i < txt.length ; ++i){
  if(
      txt[i] === LetterE || txt[i]=== LetterE.toUpperCase() ||
      txt[i] === LetterA || txt[i]=== LetterA.toUpperCase() ||
      txt[i] === LetterI || txt[i]=== LetterI.toUpperCase() ||
      txt[i] === LetterO || txt[i]=== LetterO.toUpperCase() ||
      txt[i] === LetterU || txt[i]=== LetterU.toUpperCase() ||
      txt[i] === LetterY || txt[i]=== LetterY.toUpperCase()    
    ){
      count = count+1
  }
} 
console.log(count)