    
    var novoElemento = (document.querySelector("footer"))
    let texto = document.createTextNode('Alguma coisa')
    
    novoElemento.appendChild(texto)
    var elementoAlvo = (document.querySelector(".central1"))
    var elementoPai = (document.querySelector(".container"))
    


    elementoPai.insertBefore(novoElemento, elementoAlvo)
