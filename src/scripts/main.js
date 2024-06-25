const aqui = document.querySelector('#aqui')
const diversos = document.querySelector('#diversos')
const voltar = document.querySelector('#voltar')
const voltar2 = document.querySelector('#voltar2')
const ctBox1 = document.querySelector('#contentBox1')
const ctBox2 = document.querySelector('#contentBox2')
const ctBox3 = document.querySelector('#contentBox3')

aqui.addEventListener('click', informations)
diversos.addEventListener('click', projects)
voltar.addEventListener('click', mainPage)
voltar2.addEventListener('click', mainPage)

function informations(){
    ctBox1.classList.add('hidden')
    ctBox2.classList.remove('hidden')
    ctBox3.classList.add('hidden2')
}

function mainPage(){
    ctBox1.classList.remove('hidden')
    ctBox2.classList.add('hidden')
    ctBox3.classList.add('hidden2')
}

function projects(){
    ctBox1.classList.add('hidden')
    ctBox2.classList.add('hidden')
    ctBox3.classList.remove('hidden2')
}