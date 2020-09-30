//here all the work is done on itemList means whole list of objects

const itemOperations={
    itemList:[],
    add(itemObject){
       this.itemList.push(itemObject);
    },
                                
    searchById(id){

        //return an array of objects whose id gets matched with the id we want to search
        //filter func is func that return true or false
        //0th place because there is only one value which will save value at first place in new array
        //i.e we get one object at a time
        return this.itemList.filter((itemObject)=>itemObject.id==id)[0];  //filter always return an array
    },

    countMark(){

    // return this.itemList.filter(itemObject=>itemObject.markForDelete==true).length;  
      return this.itemList.filter((itemObject)=>itemObject.markForDelete).length;    //gives array whose markForDelete is true
    },

    toggleMarking(id){
        this.searchById(id).toggle();
       // var itemObject=this.searchById(id);
       // itemObject.markForDelete=!itemObject.markForDelete; 
       //itemObject.toggle();
    },

    deleteItem(){
       return this.itemList=this.itemList.filter((itemObject)=>!itemObject.markForDelete); //gives value which are not true
    },

    sortbyid(){
      return this.itemList.sort((a,b)=>a.id-b.id);
    },

    sortbyname(){
          this.itemList.sort((a,b)=>a.name.localeCompare(b.name));   
            console.log("Items are ",this.itemList);
            return this.itemList;   
        }
}