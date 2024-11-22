const mycount = document.getElementById("count");
const mycount2 = document.getElementById("eveOdd");
let c=0;
function incr(){
    c++;
    
    mycount.textContent=c;
    if(c%2==0){
        mycount2.textContent="Current counter is Even"; 
    }else{
        mycount2.textContent="Current counter is Odd";
    }
    
}
function decr(){
if(c>0){
    c--;
}else{
    alert("You can't decrease if Number is 0");
}
    

    mycount.textContent=c;
    if(c%2==0){
        mycount2.textContent="Current counter is Even"; 
    }else{
        mycount2.textContent="Current counter is Odd";
    }
}
function reset(){
    c=0;
    mycount.textContent=c;
}