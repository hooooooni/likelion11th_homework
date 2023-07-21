// toString
// 배열 안에 있는 모든 문자열을 쉼표(,)를 기준으로 하나의 문자열로 바꿔주는 함수
var fruits = ["Banana", "Orange", "Apple"];
console.log(fruits.toString());
// 결과 : Banana,Orange,Apple




// join
// 배열 안에 있는 모든 문자열을 특정 기호를 기준으로 하나의 문자열로 바꿔주는 함수
var fruits = ["Banana", "Orange", "Apple"];
console.log(fruits.join(" * "))
// 결과 :Banana * Orange * Apple
console.log(fruits.join(" , "))
// 결과 : Banana , Orange , Apple




// pop
// 배열의 가장 마지막 element를 제거해주는 함수
var fruits = ["Banana", "Orange", "Apple"];
var str = fruits.pop();
console.log(fruits);
// 결과 : ["Banana", "Orange"]
//배열의 가장 마지막 element인 Apple이 제거된다.
console.log(str);
// 결과 : Apple
// 배열에서 제거된 마지막 element값을 리턴해서 받을 수 있다.​




// push
// 배열의 마지막에 새로운 element를 추가해주는 함수
var fruits = ["Banana", "Orange"];
fruits.push("Kiwi");
console.log(fruits); 
// 결과 : ["Banana", "Orange", "Kiwi"]​




// shift
// 배열의 첫 번째 element를 제거하는 함수
var fruits = ["Banana", "Orange", "Kiwi"];
var str = fruits.shift();
console.log(fruits);
// 결과 : ["Orange", "Kiwi"]
//배열의 가장 첫번째 element인 Banana가 제거된다.
console.log(str);
// 결과 : Banana
//배열에서 제거된 마지막 element값을 리턴해서 받을 수 있다.​




// unshift
// 배열의 첫 번째에 새로운 element를 추가하는 함수
var fruits = ["Orange", "Kiwi"];
fruits.unshift("Lemon");
console.log(fruits);
// 결과 : ["Lemon", "Orange", "Kiwi"]




// 인덱싱으로 element바꾸기
// 첫 번째 element를 Banana로 바꾸고 싶은 경우 
var fruits = ["Lemon", "Orange", "Kiwi"];
fruits[0] = "Banana";
console.log(fruits);
// 결과 : ["Banana", "Orange", "Kiwi"]


// 마지막 element를 Lemon으로 바꾸고 싶은 경우 
var fruits = ["Banana", "Orange", "Kiwi"];
fruits[fruits.length-1] = "Lemon"; 
console.log(fruits);
// 결과 : ["Banana", "Orange", "Lemon"]
// 여기서 'fruits.length-1'은 '2'이므로, 배열의 마지막 element를 의미한다.




// splice
// 배열의 중간에 element를 추가하거나 삭제할 경우에 사용하는 함수
var fruits = ["Banana", "Orange", "Apple"];
fruits.splice(1, 0, "Lemon", "Kiwi");
console.log(fruits);
// 결과 : ["Banana", "Lemon", "Kiwi", "Orange", "Apple"] 

// splice( ) 함수의 첫 번째 파라미터는 시작점을 의미하며,
// 두 번째 파라미터는 삭제할 element의 개수를 의미하고,
// 세 번째 이후의 파라미터들은 추가할 element를 의미한다.

// 배열의 인덱스 번호가 1인 element는 Orange이므로 
// Orange앞에 Lemon과 Kiwi가 추가되는 것이다.


var fruits = ["Banana", "Orange", "Apple"];
fruits.splice(1, 1, "Lemon", "Kiwi");
console.log(fruits);
// 결과 : ["Banana", "Lemon", "Kiwi", "Apple"]

// 시작점이 배열의 인덱스 번호가 1인 element이므로 
// Orange가 시작점이 되고 element 1개를 삭제 후,
// Lemon과 Kiwi를 배열에 추가한다는 의미이다.


var fruits = ["Banana", "Orange", "Apple"];
fruits.splice(1, 1);       
console.log(fruits);
// 결과 : ["Banana", "Apple"]
// 위와 동일한 원리




// concat
// 배열의 element를 합쳐주는 함수
var BasketballPlayers = ["Harden","Janmes"];
var BaseballPlayers = ["Ohtani", "Trout"];
var SportPlayers = BasketballPlayers.concat(BaseballPlayers);
console.log(SportPlayers);
// 결과 : ["Harden", "Janmes", "Ohtani", "Trout"]​




// slice
// 배열에서 element의 일부를 가져오는 함수
var fruits = ["Banana", "Lemon", "Kiwi", "Orange", "Apple"];
var fruits2 = fruits.slice(1,2); 
console.log(fruits2);   
// 결과 : ["Lemon"]

//배열의 첫 번째 파라미터는 시작점을 의미하며,
//두 번째 파라미터는 끝점을 의미하고, 시작점 부터 끝점의 바로 앞 까지 element를 가져온다.


var fruits = ["Banana", "Lemon", "Kiwi", "Orange", "Apple"];
var fruits2 = fruits.slice(1,3);
console.log(fruits2);
// 결과 : ["Lemon", "Kiwi"]


var fruits = ["Banana", "Lemon", "Kiwi", "Orange", "Apple"];
var fruits2 = fruits.slice(1);
console.log(fruits2);   
// 결과 : ["Lemon", "Kiwi", "Orange", "Apple"]
//만약 함수의 두 번째 파라미터가 없으면, 시작점 이후에 있는 모든 element를 가져온다.​




// sort
// 문자열은 알파벳 순으로, 숫자는 문자로 바꿔서 해당 숫자의 맨 앞글자 순서대로 정렬시키는 함수
var fruits = ["Banana", "Lemon", "Kiwi", "Orange", "Apple"];
console.log(fruits.sort());
// 결과 : ["Apple", "Banana", "Kiwi", "Lemon", "Orange"]

var points = [40, 100, 70, 21, 99];
console.log(points.sort());
// 결과 : [100, 21, 40, 70, 99]
//숫자의 맨 앞글자만 보면 100은 1, 21은 2, 40은 4, 70은 7, 99는 9이므로
//[100, 21, 40, 70, 99]는 맨 앞글자가 작은 순서대로 정렬시킨 결과이다.

// sort를 활용한 숫자 오름차순 정렬
var points = [40, 100, 70, 21, 99];
points.sort(function(a, b){
	return a-b;		//복잡한 if문을 한 줄의 코드로 대체 가능
 })
console.log(points);
// 결과 : [21, 40, 70, 99, 100]




// reverse
// 배열의 element 순서를 반대로 뒤집는 함수
var points = [40, 100, 70, 21, 99];
points.sort(function(a, b){
	return b-a;             
})
console.log(points);
// 결과 : [100, 99, 70, 40, 21]

points.reverse();
console.log(points);
// 결과 : [21, 40, 70, 99, 100]




// filter
// 배열의 많은 element 중 조건에 맞는 element만을 걸러내서 보여주는 함수
var persons = [
	{name: "AAA", point:78, city:"서울"},
	{name: "BBB", point:98, city:"서울"},
	{name: "CCC", point:84, city:"제주"},
	{name: "DDD", point:42, city:"서울"},
];

var pass = persons.filter(function(person){
	return person.point > 80;
});
console.log(pass);
// 결과 :
// 0: {name: "BBB", point: 98, city: "서울"}
// 1: {name: "CCC", point: 84, city: "제주"}

// 점수가 80점 이상인 element만을 결과 값으로 보여준다.
        
        
var jeju = persons.filter(function(person){
	return person.city == "제주";
});
console.log(jeju);
// 결과 : 0: {name: "CCC", point: 84, city: "제주"}
// city가 제주인 element만을 결과 값으로 보여준다.


// 만약 filter( ) 함수를 사용하지 않고, for문으로 코드를 작성하는 경우
var persons = [
	{name: "AAA", point:78, city:"서울"},
	{name: "BBB", point:98, city:"서울"},
	{name: "CCC", point:84, city:"제주"},
	{name: "DDD", point:42, city:"서울"},
];
var jeju = [];
for(var i=0 ; i <persons.length ; i++){
	if(persons[i].city == "제주"){
	jeju.push(persons[i]);
 }
}
console.log(jeju);
// 결과 : 0: {name: "CCC", point: 84, city: "제주"}
// 이처럼 for문 보다 filter( ) 함수를 사용하면 더욱 간결한 코드를 작성할 수 있다.




// map
// 배열의 구성을 새롭게 만들어주는 함수
var userList = [
	{firstName:"재석", lastName:"유", email:"yu@gmail.com"},
	{firstName:"종국", lastName:"김", email:"kim@gmail.com"},
	{firstName:"세찬", lastName:"양", email:"yang@gmail.com"},
	{firstName:"지효", lastName:"송", email:"song@gmail.com"},
];
var userList2 = userList.map(function(user){
  return {fullName:user.lastName + user.firstName,firstName:user.firstName, lastName:user.lastName, email:user.email}
});
console.log(userList2);

// 결과(4개의 오브젝트 중 한 개의 결과)
// 0:
// email: "yu@gmail.com"
// firstName: "재석"
// fullName: "유재석"       : 배열내의 오브젝트안에 풀네임을 추가함(배열의 구성 변화)
// lastName: "유
// map( ) 함수를 사용하면 서버에서 받은 배열의 정보를 모두 사용하는 것이 아닌,
// 필요한 정보만을 가지고 새롭게 배열을 구성할 수 있다.​