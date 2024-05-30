"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado:

1)
Obtener cada uno de los botones
y asignarle el evento de mouse "click"

Cuando un botón es presionado, se debe agregar la clase
"fuego" al botón (deberá cambiar de color)

*/ const boton1 = document.querySelector(".boton1");

   boton1.addEventListener("click" , function () {
    console.log("boton1");
    button1.classList.add("fuego")
    boton1.style.cssText = "color: red" 
   });

    boton2.addEventListener("click" , function () {
    console.log("boton2");
    button2.classList.add("fuego");
    boton2.style.cssText = "color: red"
   });
    boton3.addEventListener("click" , function () {
    console.log("boton3");
    button3.classList.add("fuego");
    boton3.style.cssText = "color: red"
   });