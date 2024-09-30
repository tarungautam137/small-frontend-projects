var btn=document.querySelector("button");
var list=document.querySelector("ul");
var li=document.querySelectorAll("li");
var div=document.querySelectorAll(".dot");
var x=-1;
btn.addEventListener("click",() =>{
    list.style.display="block";
});

for(let i=0;i<li.length;i++){
    li[i].addEventListener("click",() =>{
        if(x!=-1) div[x].style.backgroundColor="white";
        x=i;
        div[x].style.backgroundColor="black";

        btn.textContent=li[i].textContent;

        setTimeout(() =>{list.style.display="none"},400);
    });
}
