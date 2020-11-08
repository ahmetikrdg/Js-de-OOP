const obj1={
    number1:10,
    number2:20
};

const obj2={
    number1:30,
    number2:40
};

function addNumbers(number3,number4){
    console.log(this.number1+ this.number2+ number3+number4);
}

// addNumbers(100,200);
/*
addNumbers.call(obj1,100,200);//yani burada diyorumki obj1 e göre kullan ve 100,200 gönderdim. n1,n2 10,20 n3,n4 100,200
addNumbers.call(obj2,100,200);
*/
//call ve aple farklı apply array olarak gider.
/*
addNumbers.apply(obj1,[100,200]);
addNumbers.apply(obj2,[100,200]);
*/

//bind yapı itibariyle farklı bir fonksşyonu yine bir objeye bağlıyoruz.
function getNumbersTotal(number3,number4){
    return this.number1+this.number2+number3+number4;
}
//bind fonksiyonu getNumbersTotal fonksiyonundan kopya fonk üretir.
//bindin genel kullanım yeri eventler.
//call aply bize ekstra fonksiyon üretmiyo ama bind üretiyor

const copyFunc1=getNumbersTotal.bind(obj1);//kopya fonk oluştu;
console.log(copyFunc1);
const copyFunc2=getNumbersTotal.bind(obj2);//kopya fonk oluştu;
console.log(copyFunc2);

console.log(copyFunc1(100,200));
console.log(copyFunc2(100,200));





