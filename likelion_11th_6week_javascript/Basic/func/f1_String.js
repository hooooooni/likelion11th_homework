// length
// 문자열의 길이를 알려주는 함수
var txt = "ABCDEFGHIJKLMN";
console.log(txt.length);    	
// 결과 : 14




// indexOf
// 문자열 안에 원하는 키워드가 있다면 어디에 있는지를 인덱스 번호로 알려주는 함수
var str = "Please locate where 'locate'";
console.log(str.indexOf("locate"));	
// 결과 : 7
// 가장 먼저 발견된 locate가 시작되는 인덱스 번호를 알려주는 함수
// 단, 인덱스 번호는 0부터 시작

var str = "Please locate where 'locate'";
console.log(str.indexOf("John"));
// 결과 : -1
//-1은 찾고자 하는 키워드가 문자열에 없다는 것을 의미함




// lastIndexOf
// 문자열 안에 원하는 키워드가 있다면 가장 마지막에 발견된 위치를 인덱스 번호로 알려주는 함수
var str = "Please locate where 'locate'";
console.log(str.lastIndexOf("locate"));     
// 결과 : 21
// 마지막에 발견된 locate가 시작되는 인덱스 번호를 알려주는 함수
// 단, 인덱스 번호는 0부터 시작




// search
// indexOf함수와 동일한 기능 수행하는 함수
var str = "Please locate where 'locate'";
console.log(str.search("locate"));
// 결과 : 7​




// slice
// 문자열의 일부분을 잘라내서 보여주는 함수
var str = "Apple, Banana, Kiwi";
console.log(str.slice(7, 13));      
// 결과 : Banana
//7은 시작점을 의미하며, 13은 끝점을 의미한다.
//주의할 점은 끝점이 포함되지 않는다는 것이다.(끝점 바로 앞 글자까지 가져옴)

console.log(str.slice(7));  
// 결과 : Banana, Kiwi
//끝점을 지정하지 않으면, 시작점부터 이후 모든 글자를 가져온다.

console.log(str.slice(-12));   
// 결과 : Banana, Kiwi
//뒤에서부터 앞으로 12번째에 있는 글자(B)에서 시작하여, 
//그 이후에 있는 모든 글자를 가져온다.
//전달인자가 -값이 되면 뒤에서부터 문자열의 인덱스 번호를 센다.
//단, 뒤에서부터 세면 0이 아닌 -1부터 시작한다.

console.log(str.slice(-1));    
// 결과 : i
// 뒤에서부터 앞으로 1번째에 있는 글자(i)에서 시작하여,
// 그 이후에 있는 모든 글자를 가져온다.




// substring
// Slice 함수와 비슷한 기능을 하는 함수
var str = "Apple, Banana, Kiwi";
console.log(str.substring(7, 13));
// 결과 : Banana




// replace
// 문자열에서 특정 키워드를 다른 키워드로 바꾸고 싶을 때 사용하는 함수
var str = "Please visit here!";
var str2 = str.replace("here", "there");  
console.log(str2);
// 결과 : Please visit there!
// str.replace("here", "there");에서 앞의 파라미터는 바꾸고자 하는 키워드이고,
// 뒤의 파라미터는 앞의 파라미터를 대체할 키워드이다.




// uppercase
// 전체 대문자화 시키는 함수
var str = "Please visit here Here here!";
console.log(str.toUpperCase());
// 결과 : PLEASE VISIT HERE HERE HERE!




// loewrcase
// 전체 소문자화 시키는 함수
var str = "Please visit here Here here!";
console.log(str.toLowerCase());
// 결과 : please visit here Here here!




// trim
// 공백 제거 함수
var str = "        Hello world!         ";
console.log(str);      
// 결과 : "        Hello world!         " (공백 존재) 
console.log(str.trim()); 
// 결과 : Hello world! 	(공백 존재X)
// 데이터베이스에 정보를 조회할 경우, 공백 때문에 검색되지 않는 문제를 사전에 방지하고자
// 먼저 공백을 제거하기 위해 사용하는 함수이다.




// charAt
// 문자열에서 원하는 특정 글자 한개를 가져올 때 사용하는 함수
var str = "Hello world";
console.log(str.charAt(0));
// 결과 : H
console.log(str.charAt(2));
// 결과 : l​




// split
// 문자열을 특정 기호 혹은 글자 기준으로 분리하여 각각을 배열로 보여주는 함수
var tags = "키보드,기계식,블루투스";
var arr = tags.split(",");     	 //문자열을 분리하는 기준이 되는 기호
console.log(arr);
// 결과 :
//Array(3)
//0: "키보드"
//1: "기계식"
//2: "블루투스"
//length: 3
//[[Prototype]]: Array(0)

var birthday = "1997-06-14";
var arr2 = birthday.split("-");	 //문자열을 분리하는 기준이 되는 기호
console.log(arr2);
// 결과 :
//Array(3)
//0: "1997"
//1: "06"
//2: "14"
//length: 3
//[[Prototype]]: Array(0)