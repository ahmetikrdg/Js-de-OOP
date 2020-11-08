/*const obj ={
    test1:function(){
        console.log("test 1");
    },
    test2:function(){
        console.log("test 2");
    }
}

console.log(obj);

const emp=Object.create(obj);//bu işlem şunu yaptı
//bize bir obje oluşturdu ve proto özelliği obj objemi gösteriyor.
emp.name="Mustafa";
emp.age=25;
console.log(emp);//test1 ve 2 artık {} içinde proto altında 
*/

function Person(){//ctor

}

Person.prototype.test1=function(){
    console.log("Test 1");
}
Person.prototype.test2=function(){
    console.log("Test 2");
}

function Employee(name,age){
    this.name=name;
    this.age=age;
}

Employee.prototype=Object.create(Person.prototype);

const emp=new Employee("Mustafa",25);
emp.test1();
console.log(emp);