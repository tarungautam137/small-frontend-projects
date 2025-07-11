var menu=document.querySelector("#dropdown");
var content=document.querySelector("#content");
var title=document.querySelector("#content h3");
var btn=document.querySelector("button");

const languagesurl="https://raw.githubusercontent.com/kamranahmedse/githunt/master/src/components/filters/language-filter/languages.json";

async function load(){
    const languagesdata=await fetch(languagesurl).then(raw=>raw.json());
    languagesdata.forEach(lang=>{
       var option =document.createElement("option");
       option.value=lang.value;
       option.textContent=lang.title;
       menu.appendChild(option); 
    });
}
load();

async function fetchrepos(lang){
    try{
        const repos=await fetch(`https://api.github.com/search/repositories?q=language:${lang}&sort=stars`).then(raw=>raw.json());
        if(repos.items&&repos.items.length>0){
            const randomrepo=repos.items[Math.floor(Math.random()*repos.items.length)];
            content.classList.remove("content");
            content.classList.add("newrepo");
            content.innerHTML=` <h4>${randomrepo.name}</h4>
                        <p>${randomrepo.description}</p>
                        <div class="repoinfo">
                         <a href="${randomrepo.html_url}" target="_blank">View Repository</a>
                        <p>Stars: ${randomrepo.stargazers_count}</p>
                        <p>Forks: ${randomrepo.forks_count}</p>
                        <p>Open Issues: ${randomrepo.open_issues_count}</p>
                        </div>`
            btn.style.display="block";
        }
        else{
            title.textContent="No repositories found for the selected language";
            content.innerHTML="";
            btn.style.display="block";
        }
    }
    catch (error){
        title.textContent="Error fetching repos";
        content.innerHTML="";
        btn.style.display="block";
    }
}
menu.addEventListener("change",()=>{
    var lang=menu.value;
    if(!lang) title.textContent="Please select a language first";
    else{
        title.textContent="Loading, please wait...";
        fetchrepos(lang);
    }
})
btn.addEventListener("click",()=>{
    if(menu.value) {
        content.innerHTML="";
        title.textContent="Loading, please wait...";
        fetchrepos(menu.value);
    }
})
    


