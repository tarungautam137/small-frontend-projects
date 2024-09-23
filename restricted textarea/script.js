var textarea=document.querySelector('textarea');
var content=document.querySelector('span');
var counter=0;

textarea.addEventListener('input', function(){
    counter=textarea.value.length;
    if(counter>=250){
        textarea.style.borderColor='red';
        textarea.value=textarea.value.substring(0,250);
        counter=250;
    }
    content.textContent=counter;
})