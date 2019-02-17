app.factory("myfactory",()=>{
    const object={
        buttons:[],
        updateButton(row,value){
            this.buttons[row].value=value;
        },
            prepareButtons(){
                for(let i=1;i<=9;i++){
                  this.buttons.push(new TicButton());
                }
                return this.buttons;
            }
    }
    return object;
})