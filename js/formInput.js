/*
var inputElement;
var inputPlaceholder= [];

var count=0;

for(const input of document.getElementsByClassName('form-input')){
    input.addEventListener('focus', function(event){
        inputElement= event.target;

        inputPlaceholder[count]= inputElement.placeholder;

        inputElement.placeholder= '';

        // Cuando se seleccione el input, mostrar identificador
        inputElement.parentElement.children[0].classList.add('show');
    });

    input.addEventListener('blur', function(event){
        inputElement= event.target;

        // Reactivar el placeholder
        inputElement.placeholder= inputPlaceholder[count];

        inputProperties(inputElement);
    });

    count++;
}

(function(){
    for(const input of document.getElementsByClassName('form-input')){
        inputProperties(input);
    }
})();

function inputProperties(element){
    // Si hay texto en el input..
    if(element.value.length > 0){
        element.style.fontWeight= 'lighter';
        element.parentElement.children[0].classList.add('show');
    }else{
        element.style.removeProperty('font-weight');
        element.parentElement.children[0].classList.remove('show');
    }
}*/