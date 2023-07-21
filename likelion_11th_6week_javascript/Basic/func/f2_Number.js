// toString
// 숫자를 문자열로 변환해주는 함수
var x = 123;
console.log(x.toString()); 
// 결과 : 123     (10진수)

console.log(x.toString(2));
// 결과 : 1111011 (2진수)​




// toFixed
// 지정된 소수점 자릿수까지 반올림으로 표기해주는 함수
var x = 12349.56859493;
console.log(x.toFixed(2));
// 결과 : 12349.57
// 소수점 이하 두 자릿수까지 반올림하여 보여준다.




// toPrecision
// 정수까지 포함한 전체 자릿수를 조정할 때 사용하는 함수
var x = 9.694;
console.log(x. toPrecision(2));
// 결과 : 9.7
// 정수자리와 소수자리까지 포함하여 전체 자릿수를 두 자릿수로 만든다.
// 단, 소수 부분은 반올림 된다.




// parseInt
// 문자열의 소수점 이하는 버리고 정수인 숫자로 변환해주는 함수
console.log(parseInt("3"));
// 결과 : 3 

console.log(parseInt("3.14"));
// 결과 : 3

console.log(parseInt("3.9"));
// 결과 : 3

console.log(parseInt("10 33"));
// 결과 : 10
// 앞에 숫자만 읽고 뒤에 공백이 시작되는 부분부터 버린다.
// 숫자가 아닌 경우 이러한 방식으로 처리된다.

console.log(parseInt("12 years"));
// 결과 : 12
// 앞에 숫자만 읽고 뒤에 공백이 시작되는 부분부터 버린다.
// 숫자가 아닌 경우 이러한 방식으로 처리된다.

console.log(parseInt("years 12"));
// 결과 : NaN
// 이러한 경우(즉, 문자가 먼저 나오는 경우)에는 에러 발생




// parseFloat
// 문자열의 정수와 소수점을 모두 숫자로 변환해주는 함수
console.log(parseFloat("10"));
// 결과 : 10

console.log(parseFloat("13.9"));
// 결과 : 13.9

console.log(parseFloat("13.9 aa"));
// 결과 : 13.9
//앞에 숫자만 읽고(소수점 포함) 뒤에 공백이 시작되는 부분부터 버린다.
//숫자가 아닌 경우 이러한 방식으로 처리된다.




// Number()
var x = Number("10");
console.log(x);
// 결과 : 10
//문자열 10을 숫자 10으로 바꿔준다.


var x = Number(true);       
console.log(x);
// 결과 : 1
//불리언 true값을 1로 바꿔준다.


var x = Number(false);       
console.log(x);
// 결과 : 0
//불리언 false값을 0으로 바꿔준다.


console.log(Number("    10     "));
// 결과 : 10
//공백을 모두 지우고 문자열을 숫자로 변환해준다.


console.log(Number("    10"));
// 결과 : 10
//동일 원리


console.log(Number("    10.33     "));
// 결과 : 10.33
//동일 원리


console.log(Number("    10,33  "));
// 결과 : NaN
//Not a Number의 의미(숫자가 아니라서 변환 불가)


console.log(Number("John"));
// 결과 : NaN
//Not a Number의 의미(숫자가 아니라서 변환 불가)


console.log(Number("10 33"))
// 결과 : NaN
//Not a Number의 의미(숫자가 아니라서 변환 불가)