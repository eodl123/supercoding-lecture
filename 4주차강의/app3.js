//this
//모든 실행 컨텍스트에 만들어지는 특별한 함수
//this는 static 하지 않다. 함수가 호출될 때만 값이 할당
// console.log(this);

//메서드를 호출하는 오브젝트 (this를 쓸려면 이런식으로 함수 선언식을 사용해주는것이 좋다.)
// const calcAge = function (birthYear) {
//   console.log(this);
// };
// calcAge(1995);

const calcAgeArrow = (birthYear) => {
  console.log(this);
};

// calcAgeArrow(1992);

const profile = {
  firstName: "KIM",
  year: 1995,
  calcAge: function () {
    // console.log(this);

    const isMillenial = () => {
      console.log(this);
    };
    isMillenial();

    return 2033 - this.year;
  },
  greet: () => console.log(`안녕 ${this.firstName}야`), //객체안에서 this로 연살할때는 화살표함수를 쓰지말자
  greet2: function () {
    console.log(`안녕 ${this.firstName}야`);
  },
};

// profile.greet2();
profile.calcAge();

const anotherProfile = {
  firstName: "Sara",
  year: 1986,
};

anotherProfile.calcAge = profile.calcAge;
//console.log(anotherProfile.calcAge());

const foo = profile.calcAge;
console.log(foo());

//
