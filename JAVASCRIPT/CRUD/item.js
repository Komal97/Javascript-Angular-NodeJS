class Item{
    constructor(id,name,price,url,color,date,desc){
        this.id=id;                    //Instance var = Local Var
        this.name=name;                    
        this.price=price;
        this.url=url;
        this.color=color;
        this.date=date;
        this.desc=desc;
        this.markForDelete=false;
    }

    //work is done on a single object and not on itemlist
    toggle(){
        this.markForDelete = !this.markForDelete;
    }
}
