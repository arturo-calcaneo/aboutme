
document.getElementsByClassName('form-data-contact')[0].addEventListener('submit', function(event){
    event.preventDefault();

    var input= sanitizeSerialize($(this).serialize());

    if(input.nombre.length > 0 && input.telefono.length > 0 && input.mensaje.length > 0){
        /**
         * arturo.a_calcaneo@mailjet.com
         * Calcaneo#935
         */
        Email.send({
            Host: "smtp.gmail.com", 
            Username: "arthurogoldenon@gmail.com", 
            Password: "calcaneo935", 
            To: 'arthurogoldenon@gmail.com', 
            From: input.email, 
            Subject: "Hola, Te habla "+input.nombre, 
            Body: input.mensaje+"\n\nMi Telefono es: "+input.telefono
        }).then(function(response){
            console.log(response);
        })
    }else{
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