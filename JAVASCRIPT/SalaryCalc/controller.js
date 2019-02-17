window.addEventListener("load" , bindEvents);
function bindEvents(){
   // var salary=parseInt(document.getElementById("salary").value); 
   // var salary=parseInt(document.querySelector("#salary").value);
   document.querySelector("#salary").addEventListener("change",compute);
}

function compute(){
    var salary=this.value;
  //  document.querySelector("hra").innerHTML=salaryCalculator.hra(salary);
     computeanddisplay("hra",salary);
     computeanddisplay("da",salary);
     computeanddisplay("ta",salary);
     computeanddisplay("pf",salary);
     computeanddisplay("gs",salary);
     computeanddisplay("tax",salary);
     computeanddisplay("ns",salary);
    console.log("salary is"+salary);
}

function computeanddisplay(id,salary){
    document.querySelector("#"+ id).innerHTML=salaryCalculator["hra"](salary);
}