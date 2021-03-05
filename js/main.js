window.onload= function(){
    // Escribir mi nombre con typed.js
    new Typed('.nombre-tpd', {
        stringsElement: '.content-name',
        typeSpeed: 67,
        backSpeed: 65,
        showCursor: false
    });
    // Mostrar la edad en el <span></span>
    document.getElementById('mi-edad').innerText= obtenerEdad();
};

function obtenerEdad(){
    var fullYear= new Date().getFullYear().toString().split('');
    var edad= parseInt(fullYear[2]+""+fullYear[3]);
        edad--;

    return edad;
}