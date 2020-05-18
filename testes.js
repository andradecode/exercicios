var pega_salario = '1885.90'
var reajuste = '10'

var con_salario = Number(pega_salario).toFixed(2) 
var calculo_1 = Number(reajuste) / 100

var calculo_2 = Number(calculo_1 * con_salario).toFixed(2)
var sum = Number(calculo_2) + Number(con_salario)

var calculo_final = Number(sum).toFixed(2)

console.log('calculo1- ' + calculo_1)

console.log('calculo2- ' + con_salario)

console.log('calculo3- ' + calculo_2)

console.log('calculo4- ' + calculo_final)