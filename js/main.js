var evento = document.getElementById('btnVerificar')
evento.addEventListener('click', Verificar)
function Verificar() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var anoNasc = document.getElementById('anoNascimento')
    var result = document.getElementById('resultado')

    if (anoNasc.value.length == 0 || anoNasc.value > anoAtual) {
        alert('{ERROR} Verifiques os campos.')
    }
    else {
        // alert ('executed')
        var sexo = document.getElementsByName('sexOpcao')
        var idade = anoAtual - anoNasc.value
        var genero = ''
        var imagem = document.createElement('img') // cria um elemento, 'tag' no caso foi a IMG
        imagem.setAttribute ('id', 'foto') // fAZ A ATRIBUIÇÃO de um id para o elemento criado de forma dinamica

        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade > 0 && idade < 10) {
                //criança
            }
            else if (idade < 21) {
                //jovem
                imagem.setAttribute ('src', './assets/images/homemJovem.jpg')
                imagem.style.width = '138px' // configuração da imagem de forma dinamica,
               // imagem.style.height = '400px' 
            }
            else if (idade < 50) {
                //adulto
                imagem.setAttribute ('src', './assets/images/homem.jpg')
                imagem.style.width = '250px' // configuração da imagem de forma dinamica,
               // imagem.style.height = '400px' 
            }
            else {
                //idoso
            }
        }
        else {
            genero = 'Mulher'
            if (idade > 0 && idade < 10) {
                //criança
            }
            else if (idade < 21) {
                //jovem
                imagem.setAttribute ('src', './assets/images/mulherJovem.jpg')
                imagem.style.width = '184px' // configuração da imagem de forma dinamica,
               // imagem.style.height = '400px' 
            }
            else if (idade < 50) {
                //adulto
                imagem.setAttribute ('src', './assets/images/mulher.jpg')
                imagem.style.width = '250px' // configuração da imagem de forma dinamica,
               // imagem.style.height = '400px' 
            }
            else {
                //idoso
                imagem.setAttribute ('src', './assets/images/mulher59.jpg')
                imagem.style.width = '167px' // configuração da imagem de forma dinamica,
               // imagem.style.height = '400px' 
            }
        }
        result.style.textAlign = 'center' // alinhamento ao centro por js de forma dinamica
        result.innerHTML = (`Detectamos ${genero} com ${idade} Anos.`)
        result.appendChild (imagem)

    }

    /*if (sexo = [0].checked) {
                genero = 'Homem'
            } else{
                genero = 'Mulher'
            }
            result.innerHTML = (`Detectamos ${genero} com ${idade} Anos`)
        } */
}