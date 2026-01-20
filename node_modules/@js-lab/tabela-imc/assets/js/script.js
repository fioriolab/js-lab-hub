function Escopo() {
    const form = document.querySelector('form');
    const resultado = document.querySelector('.resultado');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 1. Captura os valores e trata a vírgula
        const inputPeso = form.querySelector('#input-peso').value.replace(',', '.');
        const inputAltura = form.querySelector('#input-altura').value.replace(',', '.');

        const peso = Number(inputPeso);
        const altura = Number(inputAltura);

        // 2. Validação única
        if (!peso) return exibirResultado('Peso inválido', false);
        if (!altura) return exibirResultado('Altura inválida', false);

        // 3. Lógica
        const imc = calcularImc(peso, altura);
        const classificacao = getClassificacao(imc);
        
        exibirResultado(`Seu IMC é ${imc} (${classificacao})`, true, imc);
    });

    function calcularImc(p, a) {
        return (p / (a ** 2)).toFixed(2);
    }

    function getClassificacao(imc) {
        const estados = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
        if (imc >= 39.9) return estados[5];
        if (imc >= 34.9) return estados[4];
        if (imc >= 29.9) return estados[3];
        if (imc >= 24.9) return estados[2];
        if (imc >= 18.5) return estados[1];
        return estados[0];
    }

    function exibirResultado(msg, isValid, classificacao) {
        resultado.innerHTML = `<p>${msg}</p>`;
        resultado.style.padding = '10px';
        resultado.style.marginTop = '10px'
        
        // Lógica de cores simplificada
        if (!isValid) {
            resultado.style.backgroundColor = '#e74c3c';
        } else {
            if(classificacao > 40)
                resultado.style.backgroundColor = '#8B0000'
            else if (classificacao >= 35) {
                resultado.style.backgroundColor = '#FF4D4D'
            } else if (classificacao >= 30) {
                resultado.style.backgroundColor = '#FF8C42'
            } else if (classificacao >= 25) {
                resultado.style.backgroundColor = '#FFD93D'
            } else if (classificacao >= 18.5) {
                resultado.style.backgroundColor = '#2ECC71'
            } else if (classificacao < 18.5) {
                resultado.style.backgroundColor = '#54A0FF'
            } 
        }
    }
}
Escopo();