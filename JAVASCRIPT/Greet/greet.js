
window.addEventListener("load",bindEvents);

function bindEvents(){
  document.getElementById("btngreet").addEventListener("click",function(){
    var f=document.getElementById("firstname").value;
    var l=document.getElementById("lastname").value;
    var fullname=f+l;
    document.getElementById("result").innerHTML=fullname;
  });
}
// function sayhello(){
//     var f=document.getElementById("firstname").value;
//     var l=document.getElementById("lastname").value;
//     var fullname=f+l;
//     document.getElementById("result").innerHTML=fullname;
// }