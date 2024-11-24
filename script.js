// Função pura que realiza a conversão de moeda
// Não depende de variáveis externas e retorna sempre o mesmo resultado para os mesmos parâmetros
function converterMoedaPura(valor, taxa) {
    return parseFloat((valor * taxa).toFixed(2)); // Retorna o valor convertido com duas casas decimais
}

// Função pura de validação para garantir que o valor é um número positivo
// Retorna um valor booleano (true ou false)
function validarEntrada(valor) {
    return !isNaN(valor) && valor > 0; // Valida se o valor é um número e positivo
}

// Função de ordem superior que utiliza o `map` para validar múltiplos valores (ex: valores de campos do formulário)
function validarCampos(inputs) {
    return inputs.map(input => validarEntrada(input)); // Retorna um array de resultados de validação
}

// Função que prepara os dados do formulário, valida a entrada e chama a função de conversão
function processarFormulario(event) {
    event.preventDefault(); // Impede o envio do formulário

    const valor = parseFloat(document.getElementById("valor").value);
    const moedaOrigem = document.getElementById("moedaOrigem").value;
    const moedaDestino = document.getElementById("moedaDestino").value;
    const taxa = parseFloat(document.getElementById("taxa").value);

    // Usando `filter` para verificar se todos os campos têm entradas válidas
    const entradasValidas = validarCampos([valor, taxa]);

    if (!entradasValidas.every(valido => valido)) { // Verifica se todas as entradas são válidas
        alert("Por favor, insira valores numéricos válidos e positivos.");
        return;
    }

    if (moedaOrigem === moedaDestino) { // Valida se as moedas são diferentes
        alert("As moedas de origem e destino devem ser diferentes.");
        return;
    }

    // Usando a função pura para converter o valor
    const valorConvertido = converterMoedaPura(valor, taxa);

    // Exibe o resultado no DOM
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.textContent = `${valor} ${moedaOrigem} equivale a ${valorConvertido} ${moedaDestino} (Taxa de conversão: ${taxa})`;
}

// Adiciona o ouvinte de evento para o formulário
document.getElementById("form-conversao").addEventListener("submit", processarFormulario);
