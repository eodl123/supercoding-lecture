// Alex의 정보
var alexHeight = 1.75; // 미터 단위
var alexWeight = 75; // 킬로그램 단위

// Brian의 정보
var brianHeight = 1.82; // 미터 단위
var brianWeight = 82; // 킬로그램 단위

// BMI 계산 함수
function calculateBMI(height, weight) {
  return weight / height ** 2;
}

// Alex와 Brian의 BMI 계산
var alexBMI = calculateBMI(alexHeight, alexWeight);
var brianBMI = calculateBMI(brianHeight, brianWeight);

// Alex의 BMI가 높은지 여부 확인
var alexBMIHigher = alexBMI > brianBMI;

// 결과 출력
console.log("Alex의 BMI:", alexBMI);
console.log("Brian의 BMI:", brianBMI);
console.log("Alex의 BMI가 높다면 true, 낮다면 false:", alexBMIHigher);
