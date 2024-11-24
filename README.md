# Conversor de Moeda - Programação Funcional

Este é um projeto de conversor de moedas desenvolvido com conceitos de **programação funcional**. Ele permite que o usuário insira um valor, selecione duas moedas (origem e destino), forneça a taxa de câmbio e, em seguida, veja o valor convertido.

> @Andriely; @Wilson
---

## Funcionalidades

- O usuário pode inserir o valor que deseja converter.
- O usuário seleciona a moeda de origem e a moeda de destino a partir de uma lista de opções.
- O programa aplica a taxa de câmbio fornecida e converte o valor inserido.
- O valor convertido é exibido para o usuário de forma clara e precisa.
---

## Tecnologias Utilizadas

- **HTML** para a estrutura da página.
- **CSS** para estilização (utilizando o Bootstrap para uma interface responsiva).
- **JavaScript** para a lógica de conversão de moedas e implementação dos conceitos de **programação funcional**.
---

## Como Funciona a Aplicação

A aplicação solicita ao usuário os seguintes dados:

1. **Valor**: O valor a ser convertido.
2. **Moeda de Origem**: A moeda original (ex: Dólar, Euro).
3. **Moeda de Destino**: A moeda para a qual o valor será convertido (ex: Real).
4. **Taxa de Câmbio**: O valor que indica quanto vale a unidade de uma moeda em relação à outra.

O cálculo de conversão é feito diretamente no navegador (front-end) usando **JavaScript**, e o resultado é exibido para o usuário. O cálculo é realizado usando uma **função pura** que recebe o valor e a taxa de câmbio como parâmetros e retorna o valor convertido.
---

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
