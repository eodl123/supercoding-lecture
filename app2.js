//자바 스크립트 파트 1

// 1. Number
// console.log(10);
// let name = 12;
// console.log(name);
// console.log(typeof name); //typeof 변수의 타입을 알려면 타입오브를 앞에 적어 주면

//2.String
// console.log("Kevin");
// let name = "John";
// console.log(name);
// console.log(typeof name);

//template literal(ES6에서 추가된것) 문자열안에서 변수를 받을수 있는 방법
// let myName = "Kim";
// let templateLiteral = `hello ${myName}`; //$
// console.log(templateLiteral);

//3.Boolean(true,false 0,1 두가지로 판단할수 있는 데이터 타입)
// console.log(true);
// let isFun = true;
// console.log(isFun);
// console.log(typeof isFun);

//4.Undefined
// let apple;
// console.log(apple);
// console.log(typeof apple);

//5.Null
// let time = null;
// console.log(time);
// console.log(typeof time);

//6.Symbol(ES6 = ES2015)
// let symbol = Symbol();
// console.log("symbol");
// console.log(typeof symbol);

//7.BigInt(ES2020)
// let theBiggestInt = 90071992543434432n;
// console.log(theBiggestInt);
// console.log(typeof 123123);
// console.log(typeof theBiggestInt);

//자바스크립트의 동적 타이핑(dynamic typing)
//일반적인 언어는 변수를 선언할 때 타입을 선언해 주어야 한다.
//자바스크립트는 따로 선언해 줄 필요가 없고 변수의 값이 바뀜에 따라 타입이 자동적으로 바뀐다.

//자바스크립트의 값은 데이터 단위이고, 변수는 값을 저장하는 공간
//자바스크립트의 데이터 타입은 원시 타입과 객체 타입
//원시 타입의 종류는 7가지
//자바스크립트는 동적 타이핑을 지원

//자바스크립트 파트2.
//변수를 선언할때 let, const, var(가능하면 사용X) 중const를 사용하는것을 권장함

//let(ES6),block scope 변수를 선언할때
// let age = 30;
// age = 31;
// console.log(age);

//const(ES6) 상수(변하지 않는 값)을 선언할때
// const birthYear = 1990;
// const defaultBirthYear;

// //var (ES5), function scope
// var address = 'Seoul';
// address ='Busan';

//연산자 (종류는 다섯 가지)

//할당 연산자( Assignment Operators)
// const myAppleCount = 5;
// const yourAppleCount = 10;
// const totalAppleCount = myAppleCount + yourAppleCount;

// let appleCount = 4;
// appleCount += 10;
// console.log(appleCount);
// appleCount -= 5;
// console.log(appleCount);

//타입 변환과 타입 강제
//const birthYear = "1990";
//console.log(Number("hello") + 10);//NaN
//console.log(String(30), 30); //타입을 바꿔주는 것을 타입변환 스트링바로옆에 있는 30은 문자열로 바뀌고 밖에 있는 30은 숫자로
//console.log("나는" + 30 + "살입니다.");//나는 넘버인데 연산을 위해서 넘버가 아니고 스트링이여한다로 넘버 타입을 버리고 스트링 타입으로 바뀌는것
//console.log("20" - 5.5);

//비교 연산자(Comparison Operators)
//const stringThree = "3";
//const numberThree = 3;
//console.log(stringThree == numberThree); //== 값이 같은지에 집중 타입은 신경쓰지 않고 같이 같은지만 판단을 한다. 현업에서는Not Good
//console.log(stringThree === numberThree); //=== 이거는 값이랑 타입이 완벽하게 같아야지 === 세개를 사용한다. Good

// const stringIsTrue = "true";
// const booleanIsTrue = "true";
// const numberIsTrue = 1;

//console.log(booleanIsTrue == stringIsTrue);
//console.log(booleanIsTrue == numberIsTrue);

//산술 연산자(Arithmetic Operators)
// let num = 3;
// num++;
// num--;
// console.log(num);

//논리 연산자 (Logical Operators)
// const a1 = true && true; //true  왼쪽 같이 truthy 할 경우 오른쪽 같을 다른 타입일경우에
// const a2 = true && false; //false;
// const a3 = false && true; //false;
// const a4 = false && 3 == 4; //false;
// const a5 = "Cat" && "Dog"; //true&&'Dog' ->'Dog'
// const a6 = false && "Cat"; //false
// const a7 = "Cat" && false; //false

// const o1 = ture || true; //true 둘중에 하나가 true면 true가되는 형태이다 or연산
// const o2 = false || true; //true
// const o3 = true || false; //true
// const o4 = false || 3 == 4; //false||false -> false
// const o5 = "Cat" || "Dog"; //'Cat' 문자열일 경우에는 문자열을 리턴 양쪽다 트루시하면 앞에걸 따른다
// const o6 = false || "Cat"; //'Cat'
// const o7 = "Cat" || false; //"Cat"

// //삼항 연산자(Conditional Operators)
// const age = 17;
// const AdultCheck = age > 18 ? "성인" : "미성년";

//자바 스크립트 파트3
//함수 입력과 출력이 존재하는 로직의 단위 io개념 input output 개념
// 자신의 외부 코드가 호출할 수 있는 하위 프로그램

//함수,function 함수 선언식과 함수 표현식비교 정리하기!! 함수 표현식이 권장 된다!!
// function logger() {
//   console.log("logging...");
// }

// logger(); //logger라는 함수를 호출한다 라는 뜻임
// logger();
// logger();

// function buySomeFruits(bananaCount, lemonCount) {
//   const fruits = `바나나 ${bananaCount}개,레몬${lemonCount}개 를 샀다.`;
//   return fruits;
// }

// const bananaAndLemon = buySomeFruits(10, 5);
// console.log(bananaAndLemon);

//함수 선언식(Function Declaration)
//호이스팅이 되기 때문에 함수 선언식은 선언되기전에 호출해도 작동 된다.
// console.log(clcAge1(1990));

// function clcAge1(birthYear) {
//   return 2023 - birthYear;
// }

//함수 표현식 Function Expression 함수 표현식은 반드시 초기 선언이 되고 나서 밑에서 실행을 해줘야 한다.

// const calcAge2 = function (birthYear) {
//   return 2023 - birthYear;
// };
// console.log(calcAge2(1995));

//화살표 함수 Arrow Function
// const clacAge3 = (birthYear) => {
//   return 2023 - birthYear;
// };
// console.log(clacAge3(1995));

// //함수는 입력과 출력이 존재하는 로직의 단위이며 호출이 가능
// // 함수 표현식을 권장하고, 그중 화살표 함수의 사용을 권장

// //Array
// const fruit1 = "apple";
// const fruit2 = "banana";
// const fruit3 = "kiwi";
// const fruits = [fruit1, fruit2, fruit3];
// // console.log(fruits);

// // console.log(fruits[2]);
// // fruits[2] = "mango";
// // console.log(fruits);

// const birthYearArray = [1990, 1993, 1998];
// const agesArry = birthYearArray.map((birthYearValue) => 2023 - birthYearValue);
// // console.log(agesArry);

// //methods
// const cars = ["hyundai", "bmw", "audi"];
// //add element
// cars.push("toyota");
// cars.unshift("kia");

// //remove element
// cars.pop();

// cars.shift();

//get index
// console.log(cars.indexOf("bmw"));

// //is contain
// console.log(cars.includes("audi"));

//여러개의 배열 연결
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const combinedArray = [...array1, ...array2];
// console.log(combinedArray);

//Objects. key-value pair
// const profile = {
//   firstName: "Kevin",
//   lastName: "Kim",
//   age: 30,
//   job: "enfineer",
//   isMarried: false,
// };
// // console.log(profile.firstName);

// profile.age = 31;
// console.log(profile);

// //여러개의 오브젝트 연결
// const obj1 = {
//   name: "jongho",
//   age: "28",
// };

// const obj2 = {
//   address: "Seoul",
//   job: "pt",
// };

// const combinedObject = {
//   ...obj1,
//   ...obj2,
// };

// console.log(Object.keys(combinedObject).map((key) => combinedObject[key]));
//베열은 인덱스 기반의 자료구조이고, 순서를 고려한다.
//오브젝트 키 기반의 자료구조이고, 순서를 고려하지 않는다.

//자바 스크립트 언어의 특징 2023/12/07 day4

//2023/12/08
// -자바스크립트 엔진과 런타임
// -실행 컨텍스트
// -콜스택
//-실행 컨텍스트

//스코프  js파트7
//스포크체인
//호이스팅

//스코프 --어떤 변수가 선언된 공간 또는 환경(범위에 대한 개념)
//어떤 변수의 스코프는 해당 변수가 접근 될 수 있는 범위
("strict mode"); //(엄격한 모드라는 뜻 자바스크립트의 원칙대로 엄격하게     해주길 원하면 이코드를 작성하면 된다.)
// function calcAge(birthYear) {
//   const age = 2025 - birthYear;

//   function printAge() {
//     const output = `${firstName}님,당신은 ${age}살 입니다. 그리고 당신은 ${birthYear}살 입니다.`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;

//       const firstName = "Kevin";
//       const str = `${firstName},당신은 멜리니얼입니다.`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     // console.log(millenial);
//     // console.log(add(2, 3));
//   }
//   printAge();

//   return age;
// }

// const firstName = "jongho";
// calcAge(1995);

//호이스팅(끌어올리다.자바스크립트 스코프 안에서 변수를 최상단으로 선언한다. )
//자바스크립트 스코프 안에서 변수를 최상단에서 선언
//var,let,const 변수는 모두 선언 시 호이스팅 적용

// console.log(foo);
// var foo; //var는 변수 선언과 초기화 가 동시에 일어난다.->undefined 변수가

// console.log(bar);
// let bar; //변수언언은 이줄에서 호이스팅이 이뤄지지만 초기화가 다른시점에 일어난다.

//선언 초기화 할당 은 전부 다른 개념

// console.log(me);
// console.log(job);
var me = "jongho";
let job = "pt";
const year = "1995";

console.log(addArow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArow = (a, b) => a + b;
