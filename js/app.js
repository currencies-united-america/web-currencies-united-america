'use strict';
document.addEventListener('DOMContentLoaded', loadResults);

function calculate() {
    const exchangeRate = 3.74;
    const selectedCurrency = document.getElementById('letter').value;
    const amount = parseFloat(document.getElementById('quantity').value);

    if (isNaN(amount)) {
        document.getElementById('result').innerText = 'Por favor, ingresa una cantidad válida.';
        return;
    }

    let result, resultText;
    if (selectedCurrency == '3.74') {
        // Convertir de dólares a soles
        result = amount * exchangeRate;
        resultText = `${amount} dólares son ${result.toFixed(2)} soles.`;
    } else {
        // Convertir de soles a dólares
        result = amount / exchangeRate;
        resultText = `${amount} soles son ${result.toFixed(2)} dólares.`;
    }

    document.getElementById('result').innerText = resultText;

    // Guardar el resultado en localStorage
    saveResult(resultText);

    // Agregar el resultado a la lista de registros
    addResultToList(resultText);
}

function saveResult(resultText) {
    let results = JSON.parse(localStorage.getItem('results')) || [];
    results.push(resultText);
    localStorage.setItem('results', JSON.stringify(results));
}

function loadResults() {
    let results = JSON.parse(localStorage.getItem('results')) || [];
    results.forEach(resultText => addResultToList(resultText));
}

function addResultToList(resultText) {
    const resultList = document.getElementById('resultList');
    const listItem = document.createElement('li');
    listItem.innerText = resultText;
    resultList.appendChild(listItem);
}