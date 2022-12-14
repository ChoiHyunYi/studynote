/** 함수의 사용 */

/** 함수를 정의하고 호출하기 */

// 함수 정의하기
function sayHello() {
    // 두개의 출력 명령을 내장함
    console.log("Hello Javascript");
    console.log("안녕하세요 자바스크립트");
}

// 함수 호출하기
sayHello();   // sayHello 안에 있는 명령 모두 출력됨

// 정의된 함수는 여러번 재사용 가능함
for (let i=0; i<5; i++) {
    sayHello();     // 반복문 횟수만큼 출력됨 -> 5번 출력
}