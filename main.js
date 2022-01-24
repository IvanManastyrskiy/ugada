'use strict'
function one() {
    return function two(hiddenNumber) {
        
        let userNumber = +prompt('Введите число')
        console.log(hiddenNumber)

        if (userNumber == false) {
            return
        } else if (isNaN(userNumber)) {
            alert('Введите число')
            two(hiddenNumber)

        }
        
        if (userNumber > hiddenNumber) {
            alert('Число больше заданного')
            two(hiddenNumber) 

        } else if (userNumber < hiddenNumber) {
            alert('Число меньше заданного')
            two(hiddenNumber)

        } else {
            alert('Победа')
        }


        
    }
    

}
let number = one()
number(Math.floor(Math.random() * 101))
console.log(number)