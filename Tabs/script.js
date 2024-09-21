var first=document.querySelector("#f");
var second=document.querySelector("#s");
var third=document.querySelector("#t");
var fourth=document.querySelector("#fo");

var tab1=document.querySelector("#c1");
var tab2=document.querySelector("#c2");
var tab3=document.querySelector("#c3");
var tab4=document.querySelector("#c4");

first.addEventListener("click",function(){
    tab1.style.display="block";
    tab2.style.display="none";
    tab3.style.display="none";
    tab4.style.display="none";
    first.style.borderBottom="4px solid black"
    second.style.borderBottom="none"
    third.style.borderBottom="none"
    fourth.style.borderBottom="none"
})
second.addEventListener("click",function(){
    tab2.style.display="block";
    tab1.style.display="none";
    tab3.style.display="none";
    tab4.style.display="none";
    second.style.borderBottom="4px solid black"
    first.style.borderBottom="none"
    third.style.borderBottom="none"
    fourth.style.borderBottom="none"
})
third.addEventListener("click",function(){
    tab3.style.display="block";
    tab2.style.display="none";
    tab1.style.display="none";
    tab4.style.display="none";
    third.style.borderBottom="4px solid black"
    second.style.borderBottom="none"
    first.style.borderBottom="none"
    fourth.style.borderBottom="none"
})
fourth.addEventListener("click",function(){
    tab4.style.display="block";
    tab2.style.display="none";
    tab3.style.display="none";
    tab1.style.display="none";
    fourth.style.borderBottom="4px solid black"
    second.style.borderBottom="none"
    third.style.borderBottom="none"
    first.style.borderBottom="none"
})