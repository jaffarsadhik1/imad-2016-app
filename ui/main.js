console.log('Loaded!');

//change the text of main-text
var element=document.getElementById('main-text')
;

element.innerHTML='new value';

//code to move image
var image =document.getElementById('madi');
 var marginLeft = 0;
function moveRight()
{
    marginLeft =  marginLeft + 5;
    madi.style.marginLeft = marginLeft + 'px';
}
madi.onclick=function(){
    var interval = setInterval(moveRight, 50);
};