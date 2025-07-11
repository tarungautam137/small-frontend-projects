var btn=document.querySelector("#add")
var modal=document.querySelector("#modal");
var modalcontent=document.querySelector("#modalcontent");
var addlanebtn=document.querySelector("#add-subreddit");
var input=document.querySelector("input");
var lanes=document.querySelector("#lanes");

btn.addEventListener("click",() =>{
    modal.style.display="flex";
    modal.classList.add("show");
});
modal.addEventListener('click', (e) => {
    if(e.target===modal)
    modal.style.display = "none";
});

function loadlocalstorage(){
    var subreddits=JSON.parse(localStorage.getItem("subreddits"))||[];
    subreddits.forEach((s)=>{
        fetchanddisplay(s);
    });
}
loadlocalstorage();
function saveInLocalStorage(subreddit) { 
    var subreddits=JSON.parse(localStorage.getItem("subreddits"))||[];
    subreddits.push(subreddit);
    localStorage.setItem("subreddits",JSON.stringify(subreddits));
}
addlanebtn.addEventListener("click",() =>{
    var subreddit=input.value.trim();
    if(subreddit){
        input.value="";
        modal.style.display="none";
        saveInLocalStorage(subreddit);
        fetchanddisplay(subreddit);
    }
});
async function fetchanddisplay(subreddit){
    var lane=document.createElement("div");
    lane.classList.add("lane");
    lane.innerHTML=`<div class="lane-header">
        <h2>/r/${subreddit}</h2>
        <div class="dots">
            <div class="options">
            <span>.</span>
            <span>.</span>
            <span>.</span>
            </div>
            <div class="menu hidden">
                <button class="refresh">Refresh</button>
                <button class="delete">Delete</button>
            </div>
        </div>
    </div>
    <div class="posts"></div>`
    lanes.appendChild(lane);
    var posts=lane.querySelector(".posts");
    /////////////////////////////////////////
    try{
        var data=await fetch(`https://www.reddit.com/r/${subreddit}.json`).then(raw=>raw.json());
        console.log(data);
        var postarray=data.data.children;
        console.log(postarray);
    
        postarray.forEach((p)=>{
            let postdata=p.data;
            
            let post=document.createElement("div");
            post.innerHTML=`<h2>
                     ${postdata.title}
                     </h2>
                    <div class="desc">
                    <div>Upvotes:${postdata.ups}</div>
                    <div>By:${postdata.author}</div>
                    </div>`
            post.classList.add("post");
            posts.appendChild(post);
            post.addEventListener("click",()=>{
                window.open('https://reddit.com' + postdata.permalink,"_blank");
            });
        })
    }
    catch(error){
        console.error(error);
        posts.innerHTML="Failed to fetch data";
    }
    ///////////////////////////////////////////////
    var opt=lane.querySelector(".options");
    var menu=lane.querySelector(".menu");
    opt.addEventListener("click",()=>{
        menu.classList.toggle("hidden");
    })
    var del=lane.querySelector(".delete");
    del.addEventListener("click",()=>{
        lane.remove();
        var subreddits=JSON.parse(localStorage.getItem("subreddits"))||[];
        subreddits=subreddits.filter(s=>s!=subreddit);
        localStorage.setItem("subreddits",JSON.stringify(subreddits));
    })
}



