# Requerimientos del Sofware

## Enfoque

Cuando haces una transacción o envías dinero al extranjero, se produce un cambio de divisa y tu dinero se convierte de una moneda local a otra. Con las transferencias internacionales a través de tu banco o servicios de transferencia, puedes convertir dólares a soles en base al tipo de cambio del mercado de divisas.

## Alcance

+ Realiza:

    + Esta aplicación proporciona información a los usurios de lo que podrían hacer en ella.
    
    + Los usuarios podrán visualizar una claculadora y podrán elegir el tipo de cambio aplicable antes de completar la transacción con tu banco o empresa de transferencias.

    + Los Usuarios podrán registrarse y acceder a promociones flash activadas para bancos específicos con un tipo de cambio exclusivos.

    + Los usuarios podrán ingresar un cupon de descuento antes de realizar el cambio.

+ No realiza:

    + Mi página web no tendrá una app para IOS O Android.
 
### Elaboración Mínima Viable

  - Calculadora de monedas y el valor de la moneda.

  - Botón para iniciar la operación.

  - Registro de la operación.

### Logros Adicionales

+ Crear un proceso de checkout.
+ Crear un proceso de registro de usuarios.

## Requerimientos funcionales

1. ```js
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
    const newListItem = document.createElement('il');
    newListItem.innerText = 'Resultados: ' + result.toFixed(2);
    resultList.appendChild(newListItem);
    } 
    ```
2.
