 window.addEventListener("load",()=>{
 document.querySelector("#output").innerHTML=0+"k";
 document.querySelector("#price").value=0;
 document.querySelector("#add").addEventListener("click",addItem);
 document.querySelector("#deletebtn").addEventListener("click",deleteItem);
 document.querySelector("#update").addEventListener("click",updateItem);
 document.querySelector("#sortbyid").addEventListener("click",sortByID);
 document.querySelector("#sortbyname").addEventListener("click",sortByName);
 document.querySelector("#save").addEventListener("click",saveItem);
 document.querySelector("#load").addEventListener("click",loadItem);
 document.querySelector("#clear").addEventListener("click",clearAll);
 document.querySelector("#price").addEventListener("change",updatePrice); //on changing slidebar of price
});

var object;
var editFlag=false;
const updatePrice=()=>{
    document.querySelector("#output").innerHTML=`<b>${document.querySelector("#price").value}k</b>`;
}

const updateCount=()=>{
    document.querySelector("#total").innerHTML=itemOperations.itemList.length;
    document.querySelector("#markrecord").innerHTML=itemOperations.countMark();
    document.querySelector("#unmark").innerHTML=itemOperations.itemList.length - itemOperations.countMark();
  }
  
function createIcon(id,path,fn){
    var img= document.createElement("img");       //create image tag dynamically
    img.src=path;
    img.className="icon";                         //call icon class from css
    // img.id=id;                                   used as id="1002" means we are providing id values which confuses other developers 
	                                              //so we should create customised id
    img.setAttribute("img-id",id);                //creating seperate attribute img-id meaning customised id 
    img.addEventListener("click",fn);             //passes 'this' and event ie "click" into fn of img
    return img;
  }

// =================================  ADD ITEM =====================================================
function addItem(){ 
    var id=document.querySelector("#itemid").value;
    var name=document.querySelector("#name").value;
    var price=document.querySelector("#price").value;
    var color=document.querySelector("#color").value;
    var url=document.querySelector("#url").value;
    var date=document.querySelector("#date").value;
    var desc=document.querySelector("#description").value;

    var itemObject=new Item(id,name,price,url,color,date,desc);
    itemOperations.add(itemObject);
    printItem(itemObject);
    updateCount();
     clearAll();

}


// ==========================  DELETE ITEM ON DELETE BUTTON ==========================================
function deleteItem(){
  itemOperations.deleteItem();
  printItemTable();
  updateCount();
}

// ==================== PRINTS WHOLE TABLE AFTER DELETION,SORTING,UPDATION =====================================

function printItemTable(){
    var tbody=document.querySelector("#itemtable");  //gets whole tbody
    tbody.innerHTML=" ";                             //clears whole tbody

    //forEach is a function containing another funtion having only one obj or value
    itemOperations.itemList.forEach(printItem); //we are getting object each time from array we traverse
}

// ==================================== PRINTS ONLY ONE ROW =============================================

function printItem(itemObject){
  var itemTable=document.querySelector("#itemtable");
  var tr=itemTable.insertRow();
  //tr.insertCell(0).innerHTML=itemObject.id;
  //tr.insertCell(1).innerHTML=itemObject.id;
  let index=0;  

  //for-in loop to traverse array of objects

  for(let key in itemObject){                             //key means key name in key:value pair

     if(key=="markForDelete"){                           //this is done so dat markForDelete value will not print in operation
         continue;                                        //we have to skip this key
     }

     if(key=="url"){
         tr.insertCell(index).innerHTML=`<img class='url' src='${itemObject[key]}'/>`;
         index++;
        continue;
     }

     if(key=="color"){
        tr.insertCell(index).innerHTML=`<div class='box' style='border-radius:50%;width:60px;height:60px;background-color:${itemObject[key]}'></div>`;
        index++; 
        continue;
    }

      tr.insertCell(index).innerHTML=itemObject[key];     //itemobject[key] means value of that key
      index++;
  }
 
  //insertcell means we are inserting a td tag
  var operationTd=tr.insertCell(index);          //we get last cell and we have to insert two icons in a single cell so we save it in a variable
  var id=itemObject.id;                          //assigning id value of object to variable id

 //appendchild is written because we have to create img ag inside td tag
  operationTd.appendChild(createIcon(id,"images/delete.png",toggleMarkUnmark));    
  operationTd.appendChild(createIcon(id,"images/edit.png",edit));
}

// ======================  TOGGLING OF MARK RED OR UNMARK ON DELETE IMAGE ==================================

function toggleMarkUnmark(event){
  var img=event.srcElement;
  console.log("get the source element",img);    //<img src="images/delete.png" class="icon" img-id="1001">
  var id=this.getAttribute("img-id");
  console.log("Delete is called...",id);
  //console.log("this is ",this);
  console.log("this is ",this.parentNode.parentNode);
  // var tr=this.parentNode.parentNode;               using this method and to check condition we have to put if-else

  var tr=img.parentNode.parentNode;             //using image source
  tr.classList.toggle("red");                   //toggle method is used instead of if-else and apply class red
                                                // classList get the list of all classes and then we choose "red" class among them
  itemOperations.toggleMarking(id);
  updateCount();

}

// ========================================= UPDATION =========================================

function edit(event){
    console.log("Edit is called...");
    var img=event.srcElement;
    
    var tr=img.parentNode.parentNode;
    tr.classList.toggle("blue");

    var id=this.getAttribute("img-id");
    object=itemOperations.searchById(id);

    document.querySelector("#itemid").value=object.id;
    document.querySelector("#name").value=object.name;
    document.querySelector("#price").value=object.price;
    updatePrice();
    document.querySelector("#color").value=object.color;
    document.querySelector("#url").value=object.url;
    document.querySelector("#date").value=object.date;
    document.querySelector("#description").value=object.desc;  
    window.scrollTo(0,window.scrollMaxY);

    var updationReq=document.querySelectorAll(".form-control");
   // Array.prototype.forEach.call(updationReq,anyChange);
    Array.prototype.forEach.call(updationReq,(input)=>input.addEventListener("change",trueorfalse));
}
     
function anyChange(){
     this.addEventListener("change",()=>{editFlag=true;});
    //this.addEventListener("change",trueorfalse);
}
    

//    function trueorfalse(){
//        editFlag=true;
//        console.log(editFlag);
//    }

function updateItem(){console.log(editFlag);
   
   if(editFlag){

        object.id=document.querySelector("#itemid").value;
        object.name=document.querySelector("#name").value;
        object.price=document.querySelector("#price").value;
        object.color=document.querySelector("#color").value;
        object.url=document.querySelector("#url").value;
        object.date=document.querySelector("#date").value;
        object.desc=document.querySelector("#description").value;
        printItemTable();
        updateCount();
        editFlag=false;
        clearAll();
        alert("Record Updated..");
    }

    else{
        alert("No new updations...");
    }
    
}


// ==========================================  SORT BY ID  =============================================

function sortByID(){
    itemOperations.sortbyid();
    printItemTable();
    updateCount();
}

// ==========================================  SORT BY NAME  =============================================

function sortByName(){
    itemOperations.sortbyname();
    printItemTable();
    updateCount();
}

// ===================================== SAVING TO LOCAL STORAGE ============================================

//data will be saved in the form of JSON format in the hard-disk so that data will remain preserved after 
//closing of chrome because on closing chrome, data in heap will lost

//JSON only saves data ,not functions 
//web services has a url and gives ur json data - programmer to programmer communication
//website - for end-user and webservice - for programmers

const saveItem=()=>{
      var json=JSON.stringify(itemOperations.itemList);  //object to string conversion 
      if(localStorage){                     //localstorage is an object which saves data to local storage
          localStorage.mydata=json;         //save data with key 'mydata'
          alert("Data Saved...")
      }
      else{
          alert("Your browser is outdated...");
      }
}

// =====================================  LOAD FROM LOCAL STORAGE =============================================

const loadItem=()=>{
    if(localStorage){
        if(localStorage.mydata){
            //itemOperations.itemList=JSON.parse(localStorage.mydata);

            //toggle function was not parsed so either make toggle func in itemlist or do as below..
            //we save data(which is loaded) in a new array in object type which do not contain any function because we save data not functions 
             var tempList=JSON.parse(localStorage.mydata);  //parsing JSON data into javascript objects
             tempList.forEach(itemObject=>{

             //here we make array of object to array of item ( item class contains contain all functions ie toggle) 
             let item=new Item(itemObject.id,itemObject.name,itemObject.price,itemObject.url,itemObject.color,itemObject.date,itemObject.desc);
             itemOperations.add(item);
            });
            printItemTable();
            updateCount();
        }
        else{
            alert("No data exists....")
        }
    }
}

// ==========================================  CLEAR ALL =============================================
function clearAll(){
    document.querySelector("#itemid").value="";
    document.querySelector("#name").value="";
    document.querySelector("#price").value=00;
    updatePrice();
    document.querySelector("#url").value="";
    document.querySelector("#color").value="#000000";
    document.querySelector("#date").value=null;
    document.querySelector("#description").value="";
}