
document.getElementsByClassName('form-data-contact')[0].addEventListener('submit', function(event){
    event.preventDefault();

    var input= sanitizeSerialize($(this).serialize());


    if(input.nombre.length > 0 && input.email.length > 0 && input.telefono.length > 0 && input.mensaje.length > 0){
        
    }else{
        
    }

    /*Email.send({
        Host: "smtp.gmail.com", 
        Username: "arthurogoldenon@gmail.com", 
        Password: "calcaneo935", 
        To: 'receiver@email_address.com', 
        From: "sender@email_address.com", 
        Subject: "Sending Email using javascript", 
        Body: "Well that was easy!!"
    }).then(function(response){
        console.log(response);
    })*/
});

function sanitizeSerialize(serialize){
    var values= serialize.split('&');
    var aux;
    var newValues= {};

    for(var j=0; j < values.length; j++){
        aux= values[j].split('=');
        newValues[aux[0]]= aux[1].trim();
    }

    return newValues;
}