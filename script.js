const form = document.querySelector('form')

 


function drawNumbers(){
    // Pegar a quantidade de números
    const amount = Number(document.getElementById('amount').value)

    // Pegar menor valor
    const lowestValue = Number(document.getElementById('from').value)

    // Pegar o maior valor
    const highestValue = Number(document.getElementById('to').value)
       // Limpar o html existente
       const resultValue = document.querySelector('.result')
       resultValue.innerText = ''

    for(let i = 0; i < amount; i++){
        // Gerar o núemro aleatório
    const result = Math.floor(Math.random() * (highestValue - lowestValue + 1)) + lowestValue

    // Gerar um elemento HTML do resultado
    const resultElement = document.createElement('span')
    resultElement.classList.add('result-value')
    resultElement.innerText = result

    // Adicionar o elemento no html
    resultValue.append(resultElement)
    }
}

form.onsubmit = (event) => {
    event.preventDefault()
}