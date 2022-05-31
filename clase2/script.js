//pedir ususario un numero
let numero = prompt('Escriba un número!')
// valor pasarlo a numero
numero = parseInt(numero)
//verificar si numero es par e impar, meediante if else

if (numero%2 ==0){
    alert('has escogido un numero par')
}
else {
    alert('tu numero es impar')
}


// ejercicio 2 
/*En este ejercicio, crearás un programa que le indique a las mujeres si están en edad, o no, de jubilarse.
Importante: En Chile, las mujeres pueden jubilarse a los 60 años.
Parte 2:
En este ejercicio, modificarás tu programa para informar, tanto a las mujeres como
a los hombres, si están en edad de jubilarse.
Importante: En Chile, los hombres pueden jubilarse a los 65 años.*/

const edad_jub_muj = 60
const edad_jub_hom = 65
//pedir ususario su edad
let edad = prompt('Escribanos su edad!')
let sexo = prompt('¿escribanos si es de sexo femenino o masculino')
// valor pasarlo a numero
edad = parseInt(edad)
sexo = sexo.toUpperCase()
//console.log(sexo)

//verificar si numero es par e impar, meediante if else
/*if( sexo === "FEMENINO" && edad < edad_jub_muj){
    alert('Aun tienes edad antes de jubilar') 
}
else if( sexo === "MASCULINO" && edad < edad_jub_hom) {
    alert('Hombre! aun eres muy joven para jubilar')
}
else{
    alert('Aps, apresurate ya tienes que jubilar!!!')
}*/



? sexo === "FEMENINO" && edad <= edad_jub_muj ? sexo === "MASCULINO" && edad <= edad_jub_hom : alert('Aps, apresurate ya tienes que jubilar!!!')