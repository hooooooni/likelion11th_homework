// round
// 반올림을 처리하는 함수
console.log(Math.round(4.9));
// 결과 : 5
console.log(Math.round(4.4));
// 결과 : 4
console.log(Math.round(-4.6));
// 결과 : -5




// ceil
// 소수점 이하 부분을 무조건 올림 처리하여, 정수를 만들어주는 함수
console.log(Math.ceil(6.2));
// 결과 : 7​




// floor
// 소수점 이하 부분을 무조건 내림 처리하여, 정수를 만들어주는 함수
console.log(Math.floor(9.9));
// 결과 : 9
console.log(Math.floor(-4.2));
// 결과 : -5




// trunc
// 무조건 정수 부분만 리턴해주는 함수
console.log(Math.trunc(9.9));
// 결과 : 9
console.log(Math.trunc(-4.2));
// 결과 : -4




// sign
// 특정 숫자가 음수인지 양수인지를 알려주는 함수
console.log(Math.sign(-7));
// 결과 : -1
console.log(Math.sign(13));
// 결과 : 1
console.log(Math.sign(0));
// 결과 : 0
//해당 숫자가 양수이면 1, 음수이면 -1, 0이면 0 값을 리턴해준다.




// pow
// 특정 숫자를 제곱해주는 함수
console.log(Math.pow(8,2));
// 결과 : 64




// sqrt
// 특정 숫자에 루트를 씌우는 함수
console.log(Math.sqrt(64));
// 결과 : 8




// abs
// 특정 숫자를 무조건 양수로 바꿔주는 함수
console.log(Math.abs(-4.7));
// 결과 : 4.7




// max
// 여러 숫자들 중 가장 큰 값을 찾아주는 함수
console.log(Math.max(0,150,24,53,52,88));
// 결과 : 150




// min
// 여러 숫자들 중 가장 작은 값을 찾아주는 함수
console.log(Math.min(0,150,24,53,52,88)); 
// 결과 : 0




// random
// 0부터 1 사이의 소수인 숫자를 무작위로 가져오는 함수
var x = Math.random();
console.log(x);
// 결과 : 0.4448140581790698...


var x = Math.random() * 10;
// 0보다 크고 10보다 작은 숫자가 랜덤으로 나온다.


var x = Math.floor(Math.random() * 10);
// 0,1,2,3,4,5,6,7,8,9의 숫자가 랜덤으로 나온다.
// 여기서 floor()함수를 사용하여 소수를 내림 처리하여 위와 같은 결과를 도출한다.


var x = Math.floor((Math.random() * 10) + 1);
// 1,2,3,4,5,6,7,8,9,10의 숫자가 랜덤으로 나온다.


var x = Math.floor((Math.random() * 100) + 1);
// 1부터 100까지의 숫자가 랜덤으로 나온다.

   
function getRndInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRndInteger(10,20));
// 결과 : 10부터 20까지의 숫자가 랜덤으로 나온다.

console.log(getRndInteger(10,90));
// 결과 : 10부터 90까지의 숫자가 랜덤으로 나온다.

console.log(getRndInteger(50,100));
// 결과 : 50부터 100까지의 숫자가 랜덤으로 나온다.
// min부터 max까지 랜덤으로 숫자를 뽑아주는 코드이다.
// [floor( ), math( ) 함수 활용]