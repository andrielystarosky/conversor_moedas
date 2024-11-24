function converterMoeda() {
    const valor = document.getElementById("valor").value;
    const moedaOrigem = document.getElementById("moedaOrigem").value;
    const moedaDestino = document.getElementById("moedaDestino").value;
    const taxa = document.getElementById("taxa").value;

    if (valor === "" || isNaN(valor) || valor <= 0) {
        alert("Por favor, insira um valor válido.");
        return;
    }

    if (taxa === "" || isNaN(taxa) || taxa <= 0) {
        alert("Por favor, insira uma taxa de conversão válida.");
        return;
    }

    if (moedaOrigem === moedaDestino) {
        alert("As moedas de origem e destino devem ser diferentes.");
        return;
    }

    const valorConvertido = (valor * taxa).toFixed(2);

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.textContent = `${valor} ${moedaOrigem} equivale a ${valorConvertido} ${moedaDestino} (Taxa de conversão: ${taxa})`;
}
