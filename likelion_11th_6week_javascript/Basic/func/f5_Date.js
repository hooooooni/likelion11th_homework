// 기본 개념
// Date 객체 : 현재의 날짜와 시간을 알려주는 객체
var d = new Date();
console.log(d);
// 결과 : Mon Sep 20 2021 07:49:52 GMT+0900
//GMT+0900은 utc 0을 기준으로 우리나라가 타임존이 9시간 빠르다는 것을 의미한다.


// Date 객체를 사용하면 사용자가 원하는 날짜와 시간을 나타낼 수 있다.
var d = new Date(2021, 3, 27, 11, 14, 23) //년 월 일 시간 분 초
console.log(d);
// 결과 : Tue Apr 27 2021 11:14:23 GMT+0900
// 단, 자바스크립트에서 월은 0부터 시작하며, (ex 3 : 4월, 0 : 1월)
// 날짜는 1부터 시작한다. (ex 1 : 1일, 14 : 14일)




// 내장함수
var d = new Date();


// getFullYear - 연도를 가져오는 함수
var year = d.getFullYear();
console.log("year", year);
// 결과 : 2023


// getMonth - 월을 가져오는 함수
var month = d.getMonth();
console.log("month", month);
// 결과 : 2
// 여기서 2는 3월을 의미 (0은 1월)


// getDate - 일을 가져오는 함수
var date = d.getDate();
console.log("date", date);
// 결과 : 20


// getDay - 요일을 가져오는 함수
var day = d.getDay();
console.log("day", day);
// 결과 : 1
// 일요일 0, 월요일 1, 화요일 2, 수요일 3, 목요일 4, 금요일 5, 토요일 6


var hour = d.getHours();
var minute = d.getMinutes();
var second = d.getSeconds();
//getHours, getMinutes, getSeconds 함수의 결과 값은
//사용자의 컴퓨터에 저장된 시간, 분, 초를 결과 값으로 준다.


//[참고사항]
//타임존 : 글로벌 서비스를 제공할 때 필요하다.
//데이터베이스에는 무조건 GMT+0 기준으로 년월일시간분초를 저장해야 한다.
//클라이언트 사이드에서 접속한 지역에 따라 알맞는 시간을 보여줘야 한다.(시차계산 필요)
//예를 들면, 한국에서 접속 시 GMT + 9, 중국에서 접속 시 GMT + 8을 
//데이터베이스에 저장된 시간(GMT+0)에 적용하여 시차가 계산된 시간을 보여줘야 한다.




//기타 내장함수
//타임존을 불러오는 함수
var d = new Date();
console.log("timezone", d.getTimezoneOffset());

// 결과 : -540
//-540은 분단위로 표현된 것이다.
//즉, -9시간을 의미하며, -9시간을 해야만 GMT+0의 시간이 될 수 있다는 것을 의미한다.


//utc 0 기준으로 년월일시간분초를 가져오는 함수
var utcYear = d.getUTCFullYear();
var utcMonth = d.getUTCMonth();
var utcdate = d.getUTCDate();
var utchour = d.getUTCHours();
var utcminute = d.getUTCMinutes();


// 년월일시간분초를 강제로 세팅하는 함수
var d = new Date();
d.setFullYear(2020);		//2020년으로 연도를 강제 세팅
var year = d.getFullYear();     
console.log(year);
// 결과 : 2020
// 월일시간분초도 동일하게 강제 세팅 할 수 있다.