// 선언방식
// 불리언을 선언하는 방법은 크게 두 가지가 있다.

// 방법 1
var x = true;
var y = false;

// 방법 2
var z = new Boolean(true);

//위의 두 방식 모두 불리언을 선언하는 방법이지만, 둘 사이에는 차이점이 존재한다.
// 방법 1
var x = true;
console.log(typeof x);
// 결과 : Boolean 타입
var y = false;
console.log(typeof y);
// 결과 : Boolean 타입

// 방법 2
var z = new Boolean(true);
console.log(typeof z);
// 결과 :Object 타입(이 경우 오브젝트의 특성을 가짐)
//즉, 선언방식에 따라 해당 변수의 데이터 타입이 달라진다.
            
console.log(x == z);        
// 결과 : true(값만 비교하기 때문)

console.log(x === z);
// 결과 : false(값과 타입도 함께 비교하기 때문)
//이러한 결과는 숫자, 문자열, 불리언 등 모든 데이터 타입에서 동일하게 나타난다.


//문자열 예시
var x ="abc";
console.log(typeof x);
// 결과 : String 타입

var y = new String("abc");
console.log(typeof y);
// 결과 : Object 타입