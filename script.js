const a = document.getElementById('prever')


a.addEventListener('mouseenter' , entrar)
a.addEventListener('mouseout' , sair)


function entrar() {
    a.style.background = 'white'
}

function sair() {
    a.style.background = 'purple'
}

function clicar() {
    
    const res = document.getElementById('res') 
    const pergunta = document.getElementById('pergunta')
    res.innerHTML = `${elemento}`
    if (pergunta.value == '') {
        res.innerHTML = `Faça uma pergunta primeiro`
        res.style.color = 'red'
    }
}




lista = ['Sim' , 'Com certeza' , 'Obviamente não' , 'Amadeh??' , 'Ficou com Deus' , 'Rapaz se eu te contar KKKKK' , 'Deixa Baixo e vai pra próxima']
elemento = lista[Math.floor(Math.random() * lista.length)]

