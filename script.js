var numeroSecreto = Math.floor(Math.random() * 1000)+1;
var tentativa = 1
var maximoTentativas = 10

while(chute != numeroSecreto) {
    var chute = prompt ('Digite um número entre 1 e 1000')
    //se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
      alert('Acertou!') 
    }

    else if (chute > numeroSecreto) {
      alert('Infelizmente você errou... o número secreto é menor do que '+
            chute +
            '.'+
           'Você já deu '+ tentativa + ' tentativa .')
      tentativa++;
     
      
    }

    else if (chute < numeroSecreto) {
      alert('Infelizmente você errou... o número secreto é maior do que '+ 
            chute +
           '.' +
           'Você já deu '+ tentativa + ' tentativa .')    
      tentativa++;     
    }
  
    if (tentativa >= maximoTentativas) {
          alert('Infelizmente você errou... o número secreto é ' + numeroSecreto +'.')    
          break;
    }
 
}

 

