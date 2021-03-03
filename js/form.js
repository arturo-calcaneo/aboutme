
document.getElementsByClassName('form-data-contact')[0].addEventListener('submit', function(event){
    event.preventDefault();

    var input= sanitizeSerialize($(this).serialize());
    
    if(input.nombre.length > 0 && input.mensaje.length > 0){
        var texto= "¡Hola! Soy "+input.nombre+" y ";
        texto+= "me gustaría que te pusieras en contácto conmigo.\n";
        texto+= "*Correo Electrónico:* "+input.email+"\n";
        texto+= "*Mensaje:*\n";
        texto+= input.mensaje;

        sendToWhatsapp(encodeURIComponent(texto));
    }else{
        swal.fire({
            icon: 'error',
            title: 'Información incompleta'
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

function sendToWhatsapp(text){
    var whatsappApi= 'https://api.whatsapp.com/send/?phone=522292098172&text='+text;

    return window.open(whatsappApi);
}