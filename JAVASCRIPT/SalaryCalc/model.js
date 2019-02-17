
const salaryCalculator={                                //here object is created containing all functions
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
    gs(salary){
        return parseInt(salary)+this.hra(salary)+this.da(salary)+this.ta(salary) -this.pf(salary);
    },
    tax(salary){
        return this.gs(salary)*0.10;
    },
    ns(salary){
        return this.gs(salary)-this.tax(salary);
    }
}