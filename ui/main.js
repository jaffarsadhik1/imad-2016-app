//code for counter button
var button = document.getElementById("counter");

button.onclick = function () {
  
    //create a request
    var request = new XMLHttpRequest();
    
    //capture the request and store it as avariable
    request.onreadystatechange = function () {
      if(request.readystate === XMLHttpRequest.DONE) {
          //take some action
          if (request.status === 200) {
               var counter = request.responseText;
               var span = document.getElementById("count");
               span.innerHTML = counter.toString();
    
          }
      }  
    //not done yet
    };
  //make a request
  request.open('GET','http://jaffarsadhik1.imad.hasura-app.io/counter', true);
  request.send(null);
  
};
//Submit name

var submit = document.getElementById('submit_btn');
submit.onclick = function()
{
  //make a request and send the name
   //create a request
    var request = new XMLHttpRequest();
    
    //capture the request and store it as avariable
    request.onreadystatechange = function () {
      if(request.readystate === XMLHttpRequest.DONE) {
          //take some action
          if (request.status === 200) {
               //capture the list of names and render it as a list
  var names = request.responseText;
  names =JSON.parse(names);
  var list ='';
  for(var i=0;i<names.length;i++)
  {
      list += '<li>' + names[i] + '</li>';
  }
  var ul = document.getElementById('namelist');
  ul.innerHTML = list;
          }
      }  
    //not done yet
    };
  //make a request
  var nameInput = document.getElementById('name');
  var name = nameInput.value;
  request.open('GET','http://jaffarsadhik1.imad.hasura-app.io/submit-name?name =' + name, true);
  request.send(null);
 
  
};
