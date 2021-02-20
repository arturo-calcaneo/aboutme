
document.getElementsByClassName('form-data-contact')[0].addEventListener('submit', function(event){
    event.preventDefault();

    var input= sanitizeSerialize($(this).serialize());

    if(input.nombre.length < 1 && input.telefono.length < 1 && input.mensaje.length < 1){
        Swal.fire({
            icon: 'error',
            title: 'Ingrese todos los datos necesarios!..',
            confirmButtonText: 'Continuar'
        });
    }
});

function sanitizeSerialize(serialize){
    var values= serialize.split('&');
    var aux;
    var newValues= {};

    for(var j=0; j < values.length; j++){
        aux= values[j].split('=');
        newValues[aux[0]]= decodeURIComponent(aux[1]).trim();
    }

    return newValues;
}