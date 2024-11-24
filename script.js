function converterMoedaPura(valor, taxa) {
    return parseFloat((valor * taxa).toFixed(2)); 
}

function validarEntrada(valor) {
    return !isNaN(valor) && valor > 0;
}

function validarCampos(inputs) {
    return inputs.map(input => validarEntrada(input));
}

document.getElementById('conversao-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const valor = parseFloat(document.getElementById('valor').value);
    const taxaCambio = parseFloat(document.getElementById('taxa-cambio').value);

    const entradasValidas = validarCampos([valor, taxaCambio]);
    
    if (!entradasValidas.every(valido => valido)) {
        alert("Por favor, insira valores numéricos válidos e positivos.");
        return;
    }

    const valorConvertido = converterMoedaPura(valor, taxaCambio);

    document.getElementById('resultado').style.display = 'block';
    document.getElementById('resultado-texto').innerText = `O valor convertido é: ${valorConvertido}`;
});
