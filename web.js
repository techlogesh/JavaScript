let b=Math.floor(Math.random()*100);
let count=1;
function checkbtn(){
   let a=document.getElementById("input"); 
if(a.value==b&&count<=10){
   window.location.href="./win.html";   
}
else  if(a.value>=b&&count<=10){
   document.getElementById("repeat").innerHTML=count;
       document.getElementById("clue").innerHTML="The guess is lower value";
       count++;
    }
else  if(a.value<=b&& count<=10){
    document.getElementById("repeat").innerHTML=count;
        document.getElementById("clue").innerHTML="The guess is greater value"; 
        count++;
     }
else {
   window.location.href="./LOSS.html";
}
   }
function resetbtn()
{
   location.reload();
}