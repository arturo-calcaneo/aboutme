window.onload= function(){
    // Mostrar la edad en el <span></span>
    document.getElementById('mi-edad').innerText= obtenerEdad();
};

function obtenerEdad(){
    var fullYear= new Date().getFullYear().toString().split('');
    var edad= parseInt(fullYear[2]+""+fullYear[3]);
        edad--;

    return edad;
}