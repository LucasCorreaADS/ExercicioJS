
const form = document.querySelector('.form');
const result = document.querySelector('.result');

const resultado = []

function recebeEventoForm(event) {
    const nome = form.querySelector('.Nome').value;
    const sobrenome = form.querySelector('.Sobrenome').value;
    const peso = Number.parseFloat(form.querySelector('.Peso').value);
    const altura = Number.parseFloat(form.querySelector('.Altura').value);
    
    if (errorDetector()) {
        return;
    }
    
    event.preventDefault();

    const createdObject = createObject(nome, sobrenome, peso, altura);
    resultado.push(createdObject);

    const element = document.createElement("p");
    element.appendChild(document.createTextNode(`${nome} ${sobrenome} pesa ${peso} Kg com altura de ${altura}m`));
    result.appendChild(element);

    console.log(resultado);

    function errorDetector() {
        if (nome.length === 0 || sobrenome.length === 0 || peso.length === 0 || altura.length === 0) {
            alert('[Error] Insira valores válidos');
            return true;
        } else if (Number.isNaN(peso) || Number.isNaN(altura)) {
            alert('[Error] Verifique os valores inseridos');
            return true;
        }
    }

}

function createObject(nome, sobrenome, peso, altura) {
    return { nome, sobrenome, peso, altura };
}

form.addEventListener('submit', recebeEventoForm);




