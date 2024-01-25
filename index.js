let pergunta = {
    titulo: 'Gato',
    alternativas: ['Gat', 'Cat', 'Gate', 'Dog'],
    correta: 1
}

function start(){
    let alts = document.querySelectorAll('.alternativa')
    alts.forEach(function (element, index) {
        element.addEventListener('click', function () {
            console.log('checa resposta');
        })
    });

    mostraquestao(pergunta)
}

function mostraquestao(q) {
    const titleDiv = document.getElementById('titulo')
    titleDiv.textContent = q.titulo

    let alts = document.querySelectorAll('.alternativa')
    alts.forEach(function (element, index) {
        element.textContent = q.alternativas[index]
        })
    };

start()