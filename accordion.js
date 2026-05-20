function visibility(ques)
{
        var answer = ques.nextElementSibling;

        if(answer.style.display === "block"){
            answer.style.display = "none";
        }
        else{
            answer.style.display = "block"
        }
   
}