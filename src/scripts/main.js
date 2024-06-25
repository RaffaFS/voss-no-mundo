const aqui = document.querySelector('#aqui')
const voltar = document.querySelector('#voltar')
const ctBox1 = document.querySelector('#contentBox1')
const ctBox2 = document.querySelector('#contentBox2')

aqui.addEventListener('click', informations)
voltar.addEventListener('click', mainPage)

function informations(){
    ctBox1.classList.add('hidden')
    ctBox2.classList.remove('hidden')
}

function mainPage(){
    ctBox1.classList.remove('hidden')
    ctBox2.classList.add('hidden')
}