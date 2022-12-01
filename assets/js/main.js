// desafio 1
function borderImage(){
    let imagen = document.querySelector("#imagen_desafio1")
    let bordeimagen= imagen.style.border
    if (bordeimagen == "0px none rgb(0, 0, 0)"){
        imagen.style.border = "solid 2px red"
    }
    else
    {
        imagen.style.border = "0px none rgb(0, 0, 0)"
    }
}

//desafio2
function validarCompra(){
    let numstiker1 = document.querySelector("#stiker1")
    let numstiker2 = document.querySelector("#stiker2")
    let numstiker3 = document.querySelector("#stiker3")
    let validacion = document.querySelector("#validacion")
    let suma = Number(numstiker1.value) + Number(numstiker2.value) + Number(numstiker3.value)
    if(suma <= 10){
        validacion.innerHTML = "llevas " + suma + " stikers"
    }else{
        validacion.innerHTML = "llevas demasiados stikers"
    }
}

//desafio3
function ingresar(){
    let num1 = document.querySelector("#num1")
    let num2 = document.querySelector("#num2")
    let num3 = document.querySelector("#num3")
    let resp = document.querySelector("#resp_psw")
    let concat = num1.value + num2.value + num3.value
    if(concat == 911){
        resp.innerHTML = "password1 correcta"
    }else if(concat == 714){
        resp.innerHTML = "password2 correcta"
    }else{
        resp.innerHTML = "password incorrecto"
    }
}