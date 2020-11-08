function Person(name,age){
    this.name=name;
    this.age=age;
}

Person.prototype.showInfos=function(){
    console.log("İsim: "+this.name+" Yaş: "+this.age);
}

// const person=new Person("Mustafa",25);
// console.log(person);

function Employee(name,age,salary){
//   this.name=name;
//   this.age=age;
  Person.call(this,name,age);//bu buradaki ismi ve yaşı persona ekle.gönder.
  this.salary=salary;
}//bu employe persondan miras alsın

Employee.prototype=Object.create(Person.prototype);//kalıtım işlemi gerçekleşmiş oluyo.Personun tüm metotlarını miras aldık

const emp=new Employee("Mustafa",25,5500);
// console.log(emp);
//kalıtım olduğuna göre artık showInfosu kullanabiliriz.

// emp.showInfos();
// console.log(emp.toString());//objemin içindeki tostring ne yaptı employe baktı protuna baktı yok aynı persona baktı sonra en üstleri olan objecte baktı onun tostringini kullandı.
//şimdi ben bunu değiştirebilim ToStingi ben employeede yazayım objecte çıkmadan benimkini görsün
Employee.prototype.toString=function(){
    console.log("Employee");
}

emp.toString();

//personda ad Yaş employeede ad,Yaş,salary var.Biz kalıtımla showınfosu kullanıyoruz ancak onda salary özelliği yok o zaman override işlemini kullanarak bu sonunu çözelim.
Employee.prototype.showInfos=function(){
 console.log("İsim: "+this.name+" Yaş: "+this.age+" Maaş: "+this.salary)
};
emp.showInfos();
