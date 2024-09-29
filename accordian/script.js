var questions=document.querySelectorAll(".question");
var answers=document.querySelectorAll(".answer");

for(var i=0;i<answers.length;i++) {
    answers[i].style.display="none";
}


// IMPORTANT VERY IMPORTANT DIFFERNCE BETWEEN LET AND VAR IN OUTER LOOP ..
for( let i=0;i<questions.length;i++) {
    questions[i].addEventListener("click",()=>{ 
        for(var j=0;j<answers.length;j++) {
            if(j===i) answers[j].style.display="block";
            else {
                console.log(i);
                answers[j].style.display="none";
            }
        }
    })
}