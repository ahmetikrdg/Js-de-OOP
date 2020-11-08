//C# java da onlarda obje oluşturuyoruz tamam ama o diller bizim clas tabanlı dillerimiz onlarda önce clas sonra obje üretiyoruz.
//Js' böyle değil js prototpye tabanlı bir tip. Js'de class yapımız yok.
//Yani biz class yazsak bile arkada prototype dönüşür.
//Js^de prototype mantığı her bir objemizin bir prototype özelliği var onun içindede en temel objemiz olan
//object tipinden bir tane prototype bulunuyo bu sayedede kalıtım gerçekleştiriyoruz
function Employee(name,age){
    this.name=name;
    this.age=age;
    this.showInfos=function(){
        console.log("Bilgiler Gösteriliyor...");
    }
}

const emp1=new Employee("Ahmet",21);
console.log(emp1);
