
var inputElement;
var inputPlaceholder= [];

var count=0;

for(const input of document.getElementsByClassName('form-input')){
    input.addEventListener('focus', function(event){
        inputElement= event.target;

        inputPlaceholder[count]= inputElement.placeholder;

        inputElement.placeholder= '';
    });

    input.addEventListener('blur', function(event){
        inputElement= event.target;

        // Reactivar el placeholder
        inputElement.placeholder= inputPlaceholder[count];

        // Si hay texto en el input..
        if(inputElement.value.length > 0){
            inputElement.style.fontWeight= 'lighter';
        }else{
            inputElement.style.removeProperty('font-weight');
        }
    });

    count++;
}