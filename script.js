// console.log("Merhaba");
// console.log(1234);
// console.log(true);

// Değişken Tanımlama Kuralları

// var name;


// var 2name;
// var 3name;
// //Sayısal ifade ile başlayamaz.

// var for;
// var if;
// //Komut isimleri ile tanımlama yapılamaz.

// var name surname;
// //Birden fazla kelimeli tanımlama yapılamaz.

//Değişkenler

//var let const

// var x;
// x = 'Gamze';
// x = "Gamze";
// console.log(x);

// let fullname = 'Gamze Kural';
// console.log(fullname);

// const email='gamzekural@gmail.com';
// console.log(email);
// email='gamzekural2@gmail.com'
// console.log(email);

//Değişken Türleri

//Primitive Types

//undefined
// var x;
// console.log(typeof x);


// //null
// var y=null;
// console.log(typeof y);

// //string
// var name='Gamze';
// console.log(typeof name);

// //number
// var age=24;
// console.log(typeof age);

// //boolean
// var online=true;
// console.log(typeof online);

// //Reference Types - objects

// //Array

// var cars=['Volvo', 'Bmw', 'Mercedes']
// console.log(typeof cars);

// //Objects

// var person={
//     name:'Gamze',
//     age:24
// }
// console.log(typeof person);

// //function

// var isAlive=function(){
//     return 0;
// }
// console.log(typeof isAlive);

//Operatörler

// var sonuc;
// const x=60;
// const y=12;
// let z=7;
// let t;
// //Aritmetik Operatörler
// sonuc=x+y;
// sonuc=x-y;
// sonuc=x/y;
// sonuc=x*y;
// sonuc=x%y;
// sonuc=x%z;

// sonuc = z++; //sayıyı 1 arttırdı ancak hafızada 8 olarak tuttu.
// sonuc = ++z; //sayıyı 1 artırdı. ekranada yazdırdı.
// sonuc=z--; //8 olarak hafızada tuttu.
// sonuc=--z; //7 yazdırdı.

// //Atama operatörleri

// sonuc=x; //60 değeri sonuca aktarılır.
// sonuc +=x; //sonuc = sonuc+x
// sonuc -= x;
// sonuc *=x;
// sonuc /=x;
// sonuc %=x;

// //Karşılaştırma operatörleri
// z=9;
// t=9;
// sonuc = z == t; //doğru ise true yanlış ise false

// sonuc = z === t; //type of kontrol ediliyor.

// sonuc = x!=y // 60 12 ye eşit olmadığı için true

// sonuc= z!=t //9=9 olduğundan false

// sonuc = z>t;
//  z=5;
// sonuc = z<t;
// sonuc = z >= t;
// sonuc = z <= t;

// //Mantıksal operatörler

// // && (And ve)

// sonuc = (z > t) && (x > y);


// // || (Or veya)

// sonuc = (z > t) || (x > y);

// // ! (Not değil)

// sonuc = !(z > t);

// console.log(sonuc);


// //Date Object

// var d =new Date();

// console.log(d);


// //set methods

// d.setFullYear(1996);
// d.setMonth(10);
// d.setDate(25);

// //get methods

// console.log(d.getFullYear());
// console.log(d.getMonth()); //2. indis mart ayına denk geliyor

// console.log(d.getDate());
// console.log(d.getHours());
// console.log(d.getMinutes());
// console.log(d.getSeconds());
// console.log(d.getMilliseconds());
// console.log(d.getDay()); //pazar günü 0. indis kabul edilir.


// //String Metotları
// const ad ='Gamze';
// const soyad = 'Kural';

// var x = ad + ' ' + soyad;

// //string concat 
// x = ad.concat(' ',soyad);

//string length
// x = ad.length;
// x = soyad.length;

// //string uppercase
// x = ad.toUpperCase();
// x = soyad.toUpperCase();

// x = ad.toLowerCase();
// x = soyad.toLowerCase();


//string indexof
// x = x.indexOf('r');
// x = x.indexOf('Kural');


//string substring
// x = x.substring(0,5);
// x = x.slice(8);


//string replace
// x = x.replace('Gamze', 'Elif');


// console.log(x);
// console.log(typeof x);



// //Number metotları 
// var x = 10;
// x = '10';

// x = Number('10');
// x = isNaN('10x');


// //parseInt parseFloat

// var sayi = 24.21346987;

// // sayi =parseInt(sayi);

// // sayi = parseFloat(sayi);

// //precision fixed
// // sayi = sayi.toPrecision(5);
// // sayi = sayi.toFixed(3); //virgülden sonrasını atar yada yazdığın sayı kadarını alır.

// //Math metotları

// var y = 64;

// sayi = Math.PI;
// sayi = Math.round(2.8);
// sayi = Math.round(2.3);
// sayi = Math.ceil(3.8); //yakınlık farketmeksizin hep bir üst basamağa yuvarlar.
// sayi = Math.ceil(3.1);
// sayi = Math.floor(4.9); //yakınlık farketmeksizin hep bir alt basamağa yuvarlar.
// sayi = Math.floor(4.1);
// sayi = Math.sqrt(y);
// sayi = Math.sqrt(36); //karekök
// sayi = Math.pow(2,4); //üs
// sayi = Math.abs(-150); //mutlak değer

// sayi = Math.min(32,54,12,74,3,8,13,43);
// sayi = Math.max(32,54,12,74,3,8,13,43);
// sayi = Math.random(); //0,1 arası rastgele sayı üretir.
// sayi = Math.random()*100; //0,100 arası sayı üretir.
// sayi = Math.round(Math.random()*100);



// console.log(sayi);
// console.log(typeof sayi);



// //Arrays

// var country = ['Türkiye','Bulgaristan','Yunanistan','Gürcistan'];

// var numbers = [15,25,35,29,24];

// var cn = ['Türkiye',15,null,undefined,['Gamze',24]];

// //get arrays
// console.log(country[0]);
// console.log(country[1]);
// console.log(cn[1]);

// //set arrays 
// country[0] = 'Usa';
// country[4] = 'İstanbul';

// country[country.length] = 'Brezilya';

// //add arrays item
// country.push(19);
// country.push('İtalya'); //sona ekler.

// country.unshift(23); //başa ekler.

// //remove arrays item
// country.pop(); //sondan siler
// country.shift();

// //reverse
// country.reverse();

// //sort 
// country.push(15);
// country.sort(); //küçükten büyüğe ve alfabeye göre sıralar.

// //concat
// var x = country.concat(numbers);
// x.sort();




// console.log(x);
// console.log(typeof x);
// console.log(x.length);


// //koşul ifadeleri
// //if else ifadeleri

// var name = 'Gamze';
// var age = 24;
// var drivingLicence=true;

// // if(name == 'Gamze')
// // {
// //     console.log('Benim adım Gamze');
// // }

// // if(age == 24)
// // {
// //     console.log('24 yaşındayım.');
// // }

// // if(drivingLicence == true)
// // {
// //     console.log('Araç kullanabilirsiniz.')
// // }
// // else
// // {
// //     console.log('Araç kullanamazsınız.')
// // }


// age=19;
// drivingLicence=false;
// if(age > 18)
// {
//     if(drivingLicence == true)
//     {
//     console.log('Araç kullanabilirsiniz.');
//     }
//     else
//     {
//         console.log('Ehliyetiniz olmadığı için araç kullanamazsınız.')
//     }
// }
// else
// {
//     console.log('Yaşınız 18 den küçük olduğu için araç kullanamazsınız.');
// }


//switch statements

// let category = 'milk';

// switch(category){
//     case 'coffee' :
//         console.log('Sade kahveniz hazırlanıyor.');
//         break;

//     case 'coffemilk' :
//         console.log('Sütlü kahveniz hazırlanıyor.');
//         break;

//     default :
//     console.log('Hatalı kategori seçtiniz.');
// }

// let day;

// switch(new Date().getDay()){
//     case 0:
//         day = 'pazar';
//         console.log('Bugün günlerden '+ day);
//     break;
//     case 1:
//         day = 'pazartesi';
//         console.log('Bugün günlerden '+ day); 
//         break;

//     case 2:
//         day = 'salı';
//         console.log('Bugün günlerden '+ day); 
//         break;

//     case 3:
//         day = 'çarşamba';
//         console.log('Bugün günlerden '+ day); 
//         break;

//     case 4:
//         day = 'perşembe';
//         console.log('Bugün günlerden '+ day); 
//         break;

//     case 5:
//         day = 'cuma';
//         console.log('Bugün günlerden '+ day); 
//         break;

//     case 6:
//         day = 'cumartesi';
//         console.log('Bugün günlerden '+ day); 
//         break;

//  }

// //loops
// //while loops
// let i=0;
// while(i<10){
//     console.log(i);
//     i++;
// }

// let i=0;
// do{
//     console.log(i);
//     i++;
// }
// while(i<10){
//     console.log("Döngü bitti.")
// }

// for(let i=0;i<10;i++){
//     console.log(i);
// }

// for(let i=0;i<10;i++){
//     if(i==2){
//         console.log('iki = ' +i);
//         continue;
//     }

//     if(i==5){
//         console.log('beş = '+i);
//         break;
//     }
//     console.log(i);
// }

// //iç içe for döngüleri
// for(let i=10;i>0;i--){
//     console.log('i ='+i);
//     for(let j=0;j<5;j++){
//         console.log('j ='+j);
//     }
// }


// //template literals
// const fullName = 'Gamze Kural';
// const city = 'İstanbul';
// const yearOfBirth = 1998;

// let val = 'Benim adım ' + fullName + city + 'da yaşıyorum.' + (2022-yearOfBirth) + ' yaşındayım.'

// val= `Benim adım ${fullName}. ${city}'da yaşıyorum. ${2022-yearOfBirth} yaşındayım.`;

// val= `Benim adım ${fullName}. ${city}'da yaşıyorum. ${2022-yearOfBirth<=18 ? '18 in altındayım' : '18 in üstündeyim.'} `;


// console.log(val);

//OBJECT LİTERALS

// let firstName='Gamze';
// let lastName='Kural';

// let firstName1='Elif';
// let lastName2='Kural';
//Böyle yapmak uğraştırıcı.

// let Gamze = ['Gamze','Kural',24];
// let Elif = ['Elif','Kural',24]; //bu yöntem de sıkıntılı

// let person = {
//     firstName :'Gamze',
//     lastName : 'Kural',
//     age : 24,
//     hobbies : ['Müzik', 'Film'],
//     adress : {
//         city : 'İstanbul',
//         country : 'Türkiye'
//     },
//     getBirthYear :function(){
//         // return 2022-24;
//         return 2022-this.age;
//     }
// }

// val=person;
// val = person.firstName;
// val=person.lastName;
// val=person.age;
// val=person.hobbies;
// val=person.hobbies[1];
// val=person.adress;
// val=person.adress.city;
// val=person.getBirthYear();

// let people =[{
//     firstName:'Gamze',
//     lastName:'Kural'
// },
// {
//     firstName1:'Elif',
//     lastName1:'Kural'
// }]

// val=people;
// console.log(val);

// let cars=['Bmw','Mercedes','Audi'];
//  let people=[
//      {firstName:'Gamze', lastName:'Kural'},
//      {firstName:'Elif', lastName:'Kural'}
//  ]

// console.log(people);

// for(let i=0;i<cars.length;i++){
//     console.log(cars[i]);
// }


// for(let i=0;i<people.length;i++){
//     console.log(people[i].firstName);
// }

//Array
//for-in

// for(let i in cars){
//     console.log(`index : ${i} , value : ${cars[i]}`);
// }

// for(let i in people){
//     console.log(`index : ${i} , value : ${people[i].firstName}`);
// }

// console.log(typeof cars);

//object
//forEach
// cars.forEach(function(item){
//     console.log(item);
// })


// people.forEach(function(item){
//     console.log(item.firstName);
// })

//Functions

// function karesiniAl(sayi){
//     return sayi*sayi;
// }

// let a = karesiniAl(2);
// let b = karesiniAl(4);

// console.log(a);
// console.log(b);


// function toplam(sayi1,sayi2){
//     function karesiniAl(x){
//         return x*x;
//     }
//     return karesiniAl(sayi1) + karesiniAl(sayi2);
// }

// let sonuc=toplam(3,5);
// console.log(sonuc);


//function declaration

// function sum(a,b){
//     var c=a+b;
//     return c;
// }
// console.log(sum(3,5));

//function expression

// const sum=function(a,b){
//     var c=a+b;
//     return c;
// }
// console.log(sum(10,20));
// console.log(sum(10)); //NaN döner.

// const sum=function(a=0,b=0){
//     // if(typeof a === 'undefined'){
//     //     a=0;
//     // }
//     // if(typeof b === 'undefined'){
//     //     b=0;
//     // }
//     var c=a+b;
//     return c;
// }

// console.log(sum(10,20));
// console.log(sum(10));

//window object

// let val;

// var a = 10;

// function b(){
//     return 0;
// }

// //alert
// alert('Merhaba'); //uyarı mesaj

// //prompt
// var c = prompt('Bir sayı giriniz.'); //soru cevabı alma
// console.log(c);

// //confirm
// var d=confirm('Emin misiniz?'); //tamam/iptal
// if(d==true){
//     console.log('tamam');
// }
// else{
//     console.log('iptal');
// }

// //location
// val=window.location;
// val=window.location.href;
// val=window.location.hostname;
// val=window.location.host;
// val=window.location.protocol;

// console.log(val);


//innerText , innerHtml
//->İçerik değiştirmeye yarar. Tek farkı innerHtml de <p></p> <b></b> gibi etiketler de kullanılabilir.


// //LOCAL STORAGE //sekme kapansa bile kayıtlı kalıyor.

// const name =localStorage.setItem('name','Gamze');

// console.log(localStorage);

// //SESSION STORAGE //sekme kapanınca gidiyor.

// const country = sessionStorage.setItem('country','Türkiye');

// console.log(sessionStorage);

//JS OOP


// let val;

// let person={
//     name:'Gamze',
//     yearOfBirth:1998
// };

// val=person;

// //array

// let numbers=[10,20,40,50];
// val = numbers;

// console.log(typeof val);
// console.log(val);


// function Person(name,yearOfBirth){
//     this.name=name;
//     this.yearOfBirth=yearOfBirth;
//     this.calculateAge=function(){
//         return 2022-this.yearOfBirth;
//     }
// }

// let Person=function(name,yearOfBirth){
//     this.name=name;
//      this.yearOfBirth=yearOfBirth;
//      this.calculateAge=function(){
//          return 2022-this.yearOfBirth;
//      }
// }

// let gamze=new Person('Gamze',1998);
// let mutlu=new Person('Mutlu',1997);

// console.log(gamze);
// console.log(mutlu);
// console.log(gamze.calculateAge());
// console.log(mutlu.calculateAge());

// //PROTOTYPE

//  let Person=function(name,yearOfBirth){
//      this.name=name;
      
//  }

// Person.prototype.calculateAge=function(){
//     return 2022-this.yearOfBirth;
// }

// Person.prototype.getYearOfBirth=function(){
//     return this.yearOfBirth;
// }

// let Gamze = new Person('Gamze',1998);

//  console.log(Gamze);

// //object create
// let person = {
//     calculateAge: function(){
//         return 2022-this.yearOfBirth;
//     }
// }

// // let gamze =Object.create(person);

// // gamze.name='Gamze';
// // gamze.yearOfBirth=1998;

// // console.log(gamze);
// // console.log(gamze.calculateAge());

// let elif=Object.create(person,{
//     name:{value:'Elif'},
//     yearOfBirth:{value:2001}
// });

// console.log(elif);
// console.log(elif.calculateAge());


// let Person=function(name,yearOfBirth){
//     this.name=name;
//     this.yearOfBirth=yearOfBirth;
// }

// Person.prototype.calculateAge=function(){
//     return 2022-this.yearOfBirth;
// }

// let Engineer = function(name,yearOfBirth,phoneNumber){
//     Person.call(this,name,yearOfBirth);
//     this.phoneNumber=phoneNumber;
// }

// Engineer.prototype=Object.create(Person.prototype);
// Engineer.prototype.constructor=Engineer;

// let gamze=new Engineer('Gamze',1998,21345756543);

// console.log(gamze);
// console.log(gamze.calculateAge());


//BUILT IN CONSTRUCTOR

//string

// var str1='gamze';
// var str2=new String('gamze');

// String.prototype.repeat=function(n){
//     return new Array(n+1).join(this)
// };

// console.log('gamze'.repeat(5));

// console.log(str1);
// console.log(str2);

// //number
// var num1=10;
// var num2=new Number(10);
// console.log(num1);
// console.log(num2);

// //boolean
// var bool1=false;
// var bool2=new Boolean(true);
// console.log(bool1);
// console.log(bool2);

// //object
// var obj1={
//     name:'gamze',
//     age:24
// };
// var obj2=new Object({
//     name:'gamze',
//     age:24
// });
// console.log(obj1);
// console.log(obj2);

// //array
// var arr1=['gamze',24];
// var arr2=new Array('gamze',24);
// console.log(arr1);
// console.log(arr2);

//error handling, try-catch

// var person = {
//     name: 'gamze'
// }


// try{
// console.log(newFunction());
// }
// catch(e){
//     console.log(e);
//     console.log(e.name);
// }

// try{
//     console.log(person.name);
//     if(!person.age){
//         throw new Error('person has no age');
//     }
//     console.log(newFunction());
//     }
//     catch(e){
//         console.log(e);
//         console.log(e.name);
//     }
//     finally{
//         console.log('finally block');
//     }


// //arrow functions

// //es5
// let Es5=function(){
//     console.log('Merhaba Es5');
// }
// Es5();

// //Es6
// let Es6=() => 
//     console.log('Merhaba Es6');

// Es6();


// //parameters

// //es5
// let paramEs5=function(a,b){
//     return a*b;
// }
// console.log(paramEs5(2,3));

// //es6
// // let parameEs6=(a,b) => {return a*b};
// let parameEs6 =(a,b) => a*b;
// console.log(parameEs6(3,4));


//this keyword
//es5

// let obj = {
//     category: 'person',
//     names: ['gamze','elif','mutlu'],
//     call: function(){
//         var obj2=this;
//         this.names.map(function(name){
//             console.log(`${obj2.category} ${name}`);
//         })
//     }
// }

// obj.call();


// //es6

// let obj = {
//     category: 'person',
//     names: ['gamze','elif','mutlu'],
//     call: function(){
//         this.names.map((name)=>{
//             console.log(`${this.category} ${name}`);
//         })
//     }
// }

// obj.call();


// //spread operatör
// function sum(a,b,c){
//     return a+b+c;
// }
// console.log(sum(10,15,20));
// let numbers=[10,15,20];

// //es5

// console.log(sum.apply(null,numbers));

// //es6

// console.log(sum(...numbers));

// let arr1=[11,12,13];
// let arr2=[10,14,15];
// let arr3=[...arr1,...arr2];
// console.log(arr3);



// //rest parameters
// function x(a,b,c){
//     return a*b*c;
// }

// console.log(x(1,2,3)); //çıktı 6
// console.log(x(1,2)); //çıktı NaN
// console.log(x(1,2,3,4,5)); //çıktı 6 son iki rakamı çarpma işlemine dahil etmedi.

// function y(...numbers){
//     return numbers.reduce((x,y)=>x*y);
// }

// console.log(y(1,2));
// console.log(y(1,2,3));
// console.log(y(1,2,3,4,5,6,7));


////destructuring arrays

// var x,y,other;

// [x,y]=[1,2];
// console.log(x);
// console.log(y);

// [x,y,...other]=[1,2,3,4,5,6];
// console.log(x);
// console.log(y);
// console.log(other);

// [x=2,y=3]=[1,2];
// console.log(x);
// console.log(y);


// var x=3, y=4;
// [x,y]=[y,x];
// console.log(x);
// console.log(y);

// function dizi(){
//     return [1,2,3];
// }

// var [a,b]=dizi();
// var [a]=dizi();
// console.log(a);
// console.log(b);


// //javascript map metodu

// let myMap=new Map();
// console.log(typeof myMap);

// let key1='Mustafa';
// let key2={a:2,b:3};
// let key3=()=>2;

// // myMap.set(key1,'X');
// // myMap.set(key2,'Y');
// // myMap.set(key3,'Z');

// // console.log(myMap.get(key1));
// // console.log(myMap.get(key2));
// // console.log(myMap.get(key3));

// // myMap.forEach(function(key,value){
// //     console.log(key,value);
// // });

// const arr=[[key1,'A'],[key2,'B'],[key3,'C']];
// arr.forEach(function(key,value){
//     console.log(key,value);
// })


//AJAX XHR objesi
//asynchronous Javascript And Xml