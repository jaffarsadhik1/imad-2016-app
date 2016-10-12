//code for counter button
var button = document.getElementById("counter");

button.onclick = function () {
  
    //create a request
    var request = new XMLHttpRequest();
    
    //capture the request and store it as avariable
    request.onreadystatechange = function () {
      if(request.readystate === XMLHttpRequest.DONE) {
          if(request.status === 200) {
               var counter = request.responseText;
               var span = document.getElementById("count");
               span.innerHTML=counter.toString();
    
          }
      }  
    //not done yet
    };
  //make a request
  request.open('GET','http://jaffarsadhik1.imad.hasura-app.io/counter', true);
  request.send(null);
  
};