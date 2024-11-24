Aqui está um exemplo de **README.md** para o seu projeto de conversor de moedas, com uma explicação clara sobre o funcionamento da aplicação e como os conceitos de **programação funcional** foram aplicados.

---

# Conversor de Moeda - Programação Funcional

Este é um projeto de conversor de moedas desenvolvido com conceitos de **programação funcional**. Ele permite que o usuário insira um valor, selecione duas moedas (origem e destino), forneça a taxa de câmbio e, em seguida, veja o valor convertido.

## Funcionalidades

- O usuário pode inserir o valor que deseja converter.
- O usuário seleciona a moeda de origem e a moeda de destino a partir de uma lista de opções.
- O programa aplica a taxa de câmbio fornecida e converte o valor inserido.
- O valor convertido é exibido para o usuário de forma clara e precisa.

## Tecnologias Utilizadas

- **HTML** para a estrutura da página.
- **CSS** para estilização (utilizando o Bootstrap para uma interface responsiva).
- **JavaScript** para a lógica de conversão de moedas e implementação dos conceitos de **programação funcional**.

## Como Funciona a Aplicação

A aplicação solicita ao usuário os seguintes dados:

1. **Valor**: O valor a ser convertido.
2. **Moeda de Origem**: A moeda original (ex: Dólar, Euro).
3. **Moeda de Destino**: A moeda para a qual o valor será convertido (ex: Real).
4. **Taxa de Câmbio**: O valor que indica quanto vale a unidade de uma moeda em relação à outra.

O cálculo de conversão é feito diretamente no navegador (front-end) usando **JavaScript**, e o resultado é exibido para o usuário. O cálculo é realizado usando uma **função pura** que recebe o valor e a taxa de câmbio como parâmetros e retorna o valor convertido.

## Como Rodar a Aplicação

### Passo 1: Clonar o Repositório
Clone este repositório para sua máquina local:

```bash
git clone https://github.com/seu-usuario/conversor-moeda.git
```

### Passo 2: Abrir no Navegador
1. Navegue até a pasta do projeto.
2. Abra o arquivo `index.html` em um navegador de sua escolha.

### Passo 3: Usar a Aplicação
1. Insira o valor a ser convertido.
2. Selecione a moeda de origem e a moeda de destino.
3. Digite a taxa de câmbio entre as duas moedas.
4. Clique no botão "Converter" para ver o valor convertido.

## Explicação dos Conceitos de Programação Funcional Aplicados

### Funções Puras

- **Função `converterMoedaPura`**:
    - A função **converterMoedaPura** realiza o cálculo da conversão de moeda, sem alterar qualquer variável externa ou dependente de estados internos. Ela recebe os parâmetros `valor` e `taxa` e retorna o valor convertido.
    - Como é uma função pura, ela sempre retorna o mesmo resultado para os mesmos parâmetros de entrada e não causa efeitos colaterais.

```javascript
function converterMoedaPura(valor, taxa) {
    return parseFloat((valor * taxa).toFixed(2));
}
```

- **Função `validarEntrada`**:
    - A função **validarEntrada** garante que o valor inserido seja numérico e positivo. Essa validação é feita sem modificar qualquer estado global ou variável fora da função.
    - Como é uma função pura, ela não altera o valor de entrada; apenas retorna um valor booleano indicando se a entrada é válida ou não.

```javascript
function validarEntrada(valor) {
    return !isNaN(valor) && valor > 0;
}
```

### Funções de Ordem Superior

- **Função `validarCampos`**:
    - A função **validarCampos** utiliza a função de ordem superior `map` para validar múltiplos valores de uma vez. Ela recebe um array de entradas (como o valor inserido, a taxa de câmbio) e aplica a validação a cada item da lista.
    - Como `map` retorna um novo array e não altera os dados originais, isso ajuda a manter a imutabilidade no código.

```javascript
function validarCampos(inputs) {
    return inputs.map(input => validarEntrada(input));
}
```

- **Função `every`**:
    - Dentro da função `processarFormulario`, utilizamos a função de ordem superior `every` para garantir que todas as entradas sejam válidas antes de prosseguir com a conversão.

```javascript
if (!entradasValidas.every(valido => valido)) {
    alert("Por favor, insira valores numéricos válidos e positivos.");
    return;
}
```

### Imutabilidade

- **Imutabilidade dos dados**: 
    - Nenhuma variável global é modificada. As funções de conversão e validação retornam novos valores sem alterar os valores originais. Isso mantém os dados imutáveis durante o processamento.
  
- **Exemplo de imutabilidade**:
    - O valor original inserido pelo usuário (`valor`) não é alterado. Em vez disso, um novo valor convertido é calculado e retornado, o que garante que o valor original se mantenha intacto.

### Validação Funcional

A validação de entradas é feita de forma funcional, utilizando as funções **`validarEntrada`** e **`validarCampos`**. Essas funções são puras e não alteram os dados de entrada, apenas retornam o resultado da validação. A validação é aplicada de maneira simples e funcional, evitando o uso de estados globais ou variáveis de controle.

## Conclusão

Este projeto demonstra a aplicação dos conceitos de **programação funcional** no desenvolvimento de uma aplicação web simples, mas funcional, que converte valores entre moedas. A implementação segue os princípios de **funções puras**, **imutabilidade**, e **funções de ordem superior**, garantindo que o código seja modular, reutilizável e fácil de entender.