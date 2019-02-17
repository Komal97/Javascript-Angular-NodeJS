app.factory("initfactory",()=>{      
    console.log("factory");
    var object={
           hra(salary){
               return salary*0.30;
           },
           da(salary){
                return salary*0.20;
           },
           ta(salary){
            return salary*0.10;
           },
           pf(salary){
             return salary*0.50;  
           },
           tax(salary){
            return salary*0.10;
           },
           gs(salary){
             return parseInt(salary)+this.hra(salary)+this.da(salary)+this.ta(salary) -this.pf(salary);
           },
           ns(salary){
            return this.gs(salary)-this.tax(salary);
        }
    }
    console.log("factory returned..");
    return object;
});