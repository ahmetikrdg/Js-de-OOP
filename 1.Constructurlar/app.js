/*
function Employee(name,age,salary){//yapıcı fonksyion ctor yani
    this.name=name;//this bu ctorun içi demek c# da ben this koymayınca çalışıyordu.
    this.age=age;// çünkü tek bir serviceden _home birde ctor içinde home yapıyoduk _home=home; yapıyoduk.
    this.salary=salary;//js bunu içeride this yazınca ctor içi dışarıdan gelense normal olarak algılar.

    console.log(this);//Bize bu objemizi vericek
}*/

function Employee(name,age,salary){//yapıcı fonksyion ctor yani
    this.name=name;//this bu ctorun içi demek c# da ben this koymayınca çalışıyordu.
    this.age=age;// çünkü tek bir serviceden _home birde ctor içinde home yapıyoduk _home=home; yapıyoduk.
    this.salary=salary;//js bunu içeride this yazınca ctor içi dışarıdan gelense normal olarak algılar.

    this.ShowInfos=function(){
        console.log(this.name,this.age,this.salary);
    }
}

const emp1=new Employee("Ahmet",21,5500);
const emp2=new Employee("Mustafa",27,9500);

emp1.ShowInfos();
emp2.ShowInfos();
