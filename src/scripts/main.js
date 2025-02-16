const aqui = document.querySelector('#aqui')
const diversos = document.querySelector('#diversos')
const depoimentos = document.querySelector('#depoimentos')
const voltar = document.querySelector('#voltar')
const voltar2 = document.querySelector('#voltar2')
const voltar3 = document.querySelector('#voltar3')

const ctBox1 = document.querySelector('#contentBox1')
const ctBox2 = document.querySelector('#contentBox2')
const ctBox3 = document.querySelector('#contentBox3')
const ctBox4 = document.querySelector('#contentBox4')

aqui.addEventListener('click', informations)
diversos.addEventListener('click', tecnica)
depoimentos.addEventListener('click', depos)
voltar.addEventListener('click', mainPage)
voltar2.addEventListener('click', mainPage)
voltar3.addEventListener('click', tecnica)

function informations(){
    ctBox1.classList.add('hidden')
    ctBox2.classList.remove('hidden')
}

function mainPage(){
    ctBox1.classList.remove('hidden')
    ctBox2.classList.add('hidden')
    ctBox3.classList.add('hidden')
    ctBox4.classList.add('hidden2')
}

function tecnica(){
    ctBox1.classList.add('hidden')
    ctBox2.classList.add('hidden')
    ctBox3.classList.remove('hidden')
    ctBox4.classList.add('hidden2')
}

function depos(){
    ctBox1.classList.add('hidden')
    ctBox2.classList.add('hidden')
    ctBox3.classList.add('hidden')
    ctBox4.classList.remove('hidden2')
}

document.addEventListener('keydown', (e) => {
    if(e.key === 'Tab') {
        e.preventDefault();
    }
});