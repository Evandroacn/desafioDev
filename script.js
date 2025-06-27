let listaNumeros = [];
const limiteSorteio = 101;

document.querySelector('.btn').addEventListener('click', (event) => {
    limparResultados();
    
    listaNumeros = [];
    let inputSorteio = parseInt(document.querySelector('.inputField').value);

    if (inputSorteio > 0 && inputSorteio < 101 && inputSorteio != null) {
        //Adiciona os números sorteados a lista
        for (let i = 0; i < inputSorteio; i++) {
            let sorteio = Math.floor(Math.random() * limiteSorteio);
            listaNumeros.push(sorteio);
        }

        let respostaLista = document.querySelector('.listaNumerosSorteados');
        respostaLista.innerHTML = '';
        listaNumeros.forEach(numero => {
            let span = document.createElement('span');
            span.textContent = numero;
            respostaLista.appendChild(span);
        })

        calculaMedia(inputSorteio);
        maiorN(inputSorteio);
        menorN(inputSorteio);
        qntdParImpar(inputSorteio);

        exibeResultado();
    } else {
        let erro = document.querySelector('.error');
        erro.innerHTML = 'Digite um número entre 1 a 100';
    }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    document.querySelector('.btn').click();
  }
});

//Calculo da média
function calculaMedia(inputSorteio) {
    let media = 0;
    let soma = 0;

    for (let i = 0; i < inputSorteio; i++) {
        soma = soma + listaNumeros[i];
    }
    media = soma / inputSorteio;

    document.querySelector('.media').innerHTML = `Média aritimética: ${media.toFixed(2)}`;
}

//Informa o maior número da lista
function maiorN(inputSorteio) {
    let maiorNumero = listaNumeros[0];

    for (let i = 0; i < inputSorteio; i++) {
        if (maiorNumero < listaNumeros[i]) {
            maiorNumero = listaNumeros[i];
        }
    }

    document.querySelector('.maiorN').innerHTML = `Maior número: ${maiorNumero}`;
}

//Informa o menor número da lista
function menorN(inputSorteio) {
    let menorNumero = listaNumeros[0];

    for (let i = 0; i < inputSorteio; i++) {
        if (menorNumero > listaNumeros[i]) {
            menorNumero = listaNumeros[i];
        }
    }

    document.querySelector('.menorN').innerHTML = `Menor número: ${menorNumero}`;
}

//Conta a quantidade de números pares e ímpares
function qntdParImpar(inputSorteio) {
    let contPar = 0;
    let contImpar = 0;

    for (let i = 0; i < inputSorteio; i++) {
        if (listaNumeros[i] % 2 == 0) {
            contPar++;
        } else {
            contImpar++;
        }
    }

    document.querySelector('.contPar').innerHTML = `Quantidade de números pares: ${contPar}`;
    document.querySelector('.contImpar').innerHTML = `Quantidade de números ímpares: ${contImpar}`;
}

//Exibe o resultado
function exibeResultado() {
    document.querySelector('.resultado').style.display = 'block'; 
}

//Limpa o resultado
function limparResultados() {
    document.querySelector('.media').innerHTML = '';
    document.querySelector('.maiorN').innerHTML = '';
    document.querySelector('.menorN').innerHTML = '';
    document.querySelector('.contPar').innerHTML = 'Quantidade de números pares:';
    document.querySelector('.contImpar').innerHTML = 'Quantidade de números ímpares:';
    document.querySelector('.error').innerHTML = '';
    document.querySelector('.listaNumerosSorteados').innerHTML = '';
    document.querySelector('.resultado').style.display = 'none';

    document.querySelector('.inputField').addEventListener('input', () => {
        document.querySelector('.error').innerHTML = '';
    });
}