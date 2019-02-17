const userOperation={
    userList:[],
    add(userObject){
     this.userList.push(userObject);
     return "Record added!!";
    },
    search(userObject){
      return this.userList.filter(userObj=>userObj.userid==userObject.userid && userObj.password==userObject.password).length>0?true:false;
    }
}

module.exports=userOperation;