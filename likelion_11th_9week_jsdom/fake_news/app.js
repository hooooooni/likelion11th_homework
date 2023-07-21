const fakeDiv = document.querySelector(".third");
const fakeTitle = document.querySelector(".third_title");
const fakeBody = document.querySelector(".third_body");
const btn = document.querySelector("#btn")

const p1 = document.createElement('p');
p1.textContent = "수정완료";

// const parent = document.getElementById("final");

btn.addEventListener("click", ()=>{
    document.querySelector(".third").setAttribute('style', 'background-color:orange');
    document.querySelector(".third_title").textContent = "[심층보도] 슬기요미 사실 안귀여워";
    document.querySelector(".third_body").textContent = "아기사자들이 보는 눈이 정확하다고 밝혀져";
    document.querySelector("body").appendChild(p1)
})