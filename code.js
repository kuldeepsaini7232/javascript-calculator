let uservalue=document.getElementById("uservalue");//create a global varriable which store user input value//
function insert(i){
    uservalue.value+=i;
}

function answer(){
    uservalue.value=eval(uservalue.value);//eval function return the value of js mathematic expression
}