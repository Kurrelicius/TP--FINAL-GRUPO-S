addEventListener("DOMContentLoaded", () =>{
    const btn_menu = document.querySelector(".btn_menu");
    if (btn_menu){
        btn_menu.addEventListener("click", () =>{
            const navItems = document.querySelector(".nav-items");
            navItems.classList.toggle("show")
        })
    }
});


let ingreso2 = document.getElementById("2cuotas");
let ingreso3 = document.getElementById("3cuotas");
let boton2 = document.getElementById("boton2");
let boton3 = document.getElementById("boton3");
let total2 = document.getElementById("2cuotasFinal");
let total3 = document.getElementById("3cuotasFinal");
let entrega2 = document.getElementById("2cuotasEntrega");
let entrega3 = document.getElementById("3cuotasEntrega");
let cuotas2 = document.getElementById("2cuotasFinalFinal");
let cuotas3 = document.getElementById("3cuotasFinalFinal");

boton2.addEventListener("click", function(e){
    e.preventDefault();
    console.log("holaaaaaaaa");
})

boton3.addEventListener("click", function(e){
    e.preventDefault();
    console.log("holaaaaaaaa");
})

function calcular2() {
    console.log("holaaaaa");
}

function calcular3() {
    console.log("holaaaaaaaa");
}


console.log("adasdasdasdas23213131231")

// prueba api clima


async function obtenerDatos() {
    //Consultamos la API
    const response = await fetch('https://ws.smn.gob.ar/map_items/weather');
    //Detectams el tipo de dato y lo guardamos en datosApi
    const datosApi = await response.json();
    //Aqui dentro utilizamos la información de la API   
    const ciudadCorrientes = datosApi.find(ciudad => ciudad.name == "Corrientes")
    console.log(ciudadCorrientes)
}

obtenerDatos();

// prueba api clima
