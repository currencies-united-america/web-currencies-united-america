'use strict';
function calculate() {
    // Obtener el valor de la letra seleccionada
    const letterValue = parseFloat(document.getElementById('letter').value);

    // Obtener la cantidad ingresada por el usuario
    const quantity = parseFloat(document.getElementById('quantity').value);

    // Calcular el resultado
    const result = letterValue * quantity;

    // Mostrar el resultado
    document.getElementById('result').innerText = 'Recibes: ' + result.toFixed(2);

    // Listado de Movimientos
    const resultList = document.getElementById('resultList');
    const newListItem = document.createElement('li');
    newListItem.innerText = '  Resultados: ' + result.toFixed(2);
    resultList.appendChild(newListItem);
}





