function converter(real){
    const valorDol = parseFloat(document.getElementById('dolar').value);
    const cotacao = 5.81;
    if(!valorDol || valorDol <= 0){
        document.getElementById('resultado').textContent = "Valor null";
        return;
    }
    const valorReal = valorDol * cotacao;
    document.getElementById('resultado').textContent = `R$ ${valorReal.toFixed(2)} reais`;

}

async function getDataDolar() {
    const valorDolar = parseFloat(document.getElementById("dolar").value);
  
    if (isNaN(valorDolar) || valorDolar <= 0) {
      document.getElementById("resultado").textContent = "Digite um valor válido em dólar.";
      return;
    }
  
    try {
      const response = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL");
      const data = await response.json();
  
      const cotacao = parseFloat(data.USDBRL.bid);
      const valorConvertido = (valorDolar * cotacao).toFixed(2);
  
      document.getElementById("resultado").textContent = `💵 USD $${valorDolar} = R$${valorConvertido}`;
    } catch (error) {
      document.getElementById("resultado").textContent = "Erro ao obter a cotação.";
      console.error("Erro:", error);
    }
  }
  