
document.getElementsByClassName('form-data-contact')[0].addEventListener('submit', function(event){
    event.preventDefault();

    var inputValues= getValues($(this).serialize());

    console.log(inputValues);

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

function getValues(serialize){
    var values= serialize.split('&');
    var aux;
    var newValues= {};

    for(var j=0; j < values.length; j++){
        aux= values[j].split('=');
        newValues[aux[0]]= aux[1];
    }

    return newValues;
}