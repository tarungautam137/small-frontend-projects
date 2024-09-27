var div=document.querySelector("#second");
var accept=document.querySelector("#accept");
var decline=document.querySelector("#decline");
document.addEventListener("DOMContentLoaded",function() {
    if(!localStorage.getItem("accept")) div.style.display="block";
});

accept.addEventListener("click", function(){
    div.style.display="none";
    localStorage.setItem("accept","cookie");
});

decline.addEventListener("click", function(){
    div.style.display="none";
});