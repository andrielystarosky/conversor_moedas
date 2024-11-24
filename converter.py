# Função pura para conversão de moedas
def converter_moeda(valor, taxa):
    return round(valor * taxa, 2)

# Função principal
def main():
    print("Bem-vindo ao Conversor de Moedas!")
    
    try:
        valor = float(input("Digite o valor a ser convertido: "))
        if valor <= 0:
            raise ValueError("O valor deve ser maior que zero.")

        origem = input("Digite a moeda de origem (ex: USD): ").upper()
        destino = input("Digite a moeda de destino (ex: EUR): ").upper()

        if origem == destino:
            print("As moedas de origem e destino devem ser diferentes.")
            return

        taxa = float(input("Digite a taxa de conversão: "))
        if taxa <= 0:
            raise ValueError("A taxa de conversão deve ser maior que zero.")

        resultado = converter_moeda(valor, taxa)
        print(f"{valor} {origem} equivale a {resultado} {destino} com a taxa de conversão {taxa}.")
    except ValueError as e:
        print(f"Erro: {e}")

# Executar o programa
if __name__ == "__main__":
    main()
