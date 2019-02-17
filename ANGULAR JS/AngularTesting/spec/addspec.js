describe("add test suite",function(){
    it("should add 2 positive numbers",function(){
        var result=add(100,200);
        expect(result).toBe(300);
    });
    it("should add 2 negative numbers",function(){
        var result=add(-100,-200);
        expect(result).toBe(-300);
    });
    it("should add 1 positive and 1 negative numbers",function(){
        var result=add(100,-200);
        expect(result).toBe(-100);
    });
});