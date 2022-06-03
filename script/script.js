var valueX = window.document.querySelector('div.container input');
var table = window.document.querySelector('div.container div.table');
var enter = window.document.querySelector('div.container button');

    enter.addEventListener('click', () => {

        if(Number(valueX.value) < 1 || Number(valueX.value) > 120000) {
            table.innerHTML = 'Choice only values in the interval(1-120000)';
        }
        else {
            for(i = 1; i <= 12; i++) {
                var calc = String(i) + " x " + valueX.value + ' = ' + i * Number(valueX.value);
                var result = document.createElement("p");

                result.innerText =  calc;

                table.appendChild(result);
            }  
        }
    });