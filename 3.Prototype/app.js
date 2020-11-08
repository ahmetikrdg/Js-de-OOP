/*function Employee(name,age){
    this.name=name;
    this.age=age;
    this.showInfos=function(){
        console.log("İsim: "+this.name+" Yaş: "+this.age);
    }//şimdi bu burda olduğu için her metodda üretilecek ve belleğimizi gereksiz yere işgal edecek.metdun üstünde ne vardı.
    // Prototype. Şimdi bu metod basit bir metod ve hepsinde geçerli olduğu için buz bunu prtotype yazsak ne olur. Bir tanesini heryerde kullanmış oluruz.
    //Yani biz 1000 metodda oluştursak bir showInfos metodunu kullanacak.
    //o halde bunu burdan silip Prototype yazalım.
}*/

function Employee(name,age){
    this.name=name;
    this.age=age;
}

Employee.prototype.showInfoss=function(){
    console.log("İsim: "+this.name+" Yaş: "+this.age);
};//şimdi console ekranından bak cons.log(emp1); yazan yerin içinde showInfoss yok onun protosunda var

const emp1=new Employee("Ahmet",21);
emp1.showInfoss();
console.log(emp1);
const emp2=new Employee("Mustafa",27);