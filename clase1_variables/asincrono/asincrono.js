
const year= 365
const edad=prompt('¿Cual es tu edad?');
//console.log(edad)
const edad_en_dias= parseInt(edad)*year

alert('llevas '+ edad_en_dias + ' días de vida')


// parte 2
const edad_max = 86
const ramitas = 300
const ramitas_diarias= 2
const restantes= edad_max - parseInt(edad)
console.log(restantes) //años que quedan por vivir

let saldo = (restantes*year) // dias por vivir
console.log(saldo + ' días por vivir') 

const snacks= saldo*ramitas_diarias
console.log(snacks + ' paquetes de ramitas') // q de ramitas que comeré entes de morir

saldo = (ramitas*ramitas_diarias)*saldo
console.log(saldo + ' es el total de dinero que necesitaras')  // dinero que gastare en ramitas hasta ultimo día

alert('Necesitarás ' + snacks + ' ramitas para que te alcancen hasta los ' + edad_max + ' años.')
document.write('Necesitarás ' + snacks + ' ramitas para que te alcancen hasta los ' + edad_max + ' años.')

//cuanto comes al año ej 3*56

//const premio= 100000
//const saldo= prompt('ingresa tu saldo actual')
//const nuevo_saldo= premio + parseInt(saldo)

//console.log(nuevo_saldo)