document.addEventListener('DOMContentLoaded', function() {
    let firstnumber = document.getElementById('firstnumber');
    let secondnumber = document.getElementById('secondnumber');
    let Operation = document.getElementById('Operation')
    let submit = document.getElementById('submit');
    let result = document.getElementById('result');
    let operator = document.getElementById('operator')
    let toggleColor = document.getElementById('toggleColor')
    let random = "Random Color"

    let Colors = ['green','lime','blue','rgba(78,53,36)','purple']
    let randomColor = Math.floor(Math.random() * Colors.length)
    let randomInterval;


    
    operator.style.background = Colors[randomColor]





    
    function calculate() {

        let product;

        if (Operation.value == "substract") {
            product = Number.parseInt(firstnumber.value) - Number.parseInt(secondnumber.value)

            result.innerHTML = product

        }
        else if (Operation.value == "add") {
            product = Number.parseInt(firstnumber.value) + Number.parseInt(secondnumber.value)

            result.innerHTML = product
        }
        else if (Operation.value == "multiply") {
            product = Number.parseInt(firstnumber.value) * Number.parseInt(secondnumber.value)

            result.innerHTML = product
        }
    }

    function enter(event) {
        if (event.key == "Enter") {
            submit.click()
        }
    }

    function toggleColorRandomness() {
        if (random == 'Un-Random Color') {

            clearInterval(randomInterval)

            random = 'Random Color'
            toggleColor.innerHTML = random
        }
        else if (random == 'Random Color') {
            

             randomInterval = setInterval(() => {
                let Colors = ['green','lime','blue','brown']
                let randomColor = Math.floor(Math.random() * Colors.length)

                operator.style.background = Colors[randomColor]

            }, 1000);

            random = 'Un-Random Color'
            toggleColor.innerHTML = random

        }
        else {
            return;
        }
    }


    submit.addEventListener('click', calculate)
    document.addEventListener('keydown', enter)
    toggleColor.addEventListener('click', toggleColorRandomness)

})
