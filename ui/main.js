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
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function()
{
  //make a request and send the name
  //capture the list of names and render it as a list
  var names = ['name1','name2','name3','name4'];
  var list ='';
  for(var i=0;i<names.length;i++)
  {
      list += '<li>' + names[i] + </li>;
  }
  var ul = document.getElementById('namelist');
  ul.innerHTML = list;
  
};
