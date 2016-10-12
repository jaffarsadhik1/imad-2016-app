//code for counter button
var button = document.getElementById('counter');
var counter =0;
button.onclick = function () {
  
    //make a request to counter
    
    //capture the request and store it as avariable
    
    //render the variable in correct span
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML=counter.toString();
    
};