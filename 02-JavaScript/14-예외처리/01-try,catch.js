/** 
 * 1. Syntax Error : 문법에러. 코딩상의 실수이므로 수정하지 않으면 프로그램이 동작하지 않음(오타났을 때 발생하는 에러라고 생각하면 됨)
 * 2. Runtime Error : 프로그램 작성 과정에서 논리상의 오류로 미처 대응하지 못한 상황이 발생하는 경우.(실행하다가 에러 뜸)
 *      -> 처리하지 않을 경우 프로그램이 중단된다.
 */


/** 기본적인 에러 핸들링 */
const data = [1, 2, 3];

console.log('배열 탐색 시작');

// 먼저, try {...} 안의 코드가 실행된다.
// 에러가 없다면, try 안의 마지막 줄까지 실행되고, catch 블록은 건너뛴다.
// 에러가 있다면, try 안 코드의 실행이 중단되고, catch(err) 블록으로 제어 흐름이 넘어간다. (에러 발생시 즉시 catch 실행)
// 변수 err(아무 이름이나 사용 가능)는 무슨 일이 일어났는지에 대한 설명이 담긴 에러 객체를 포함한다.
// finally는 없어도 됨, 있을 경우 마지막에 실행됨
try {
    for (let i=0; i<10; i++) {
        console.log(data[i].toFixed(2));
    }

    console.log("try 블록 실행 완료~!!");
} catch (err) {
    console.group('%s 에러발생', err.name);
    console.error(err.message);
    console.groupEnd();
    // 에러정보 전체 -> console.error(err);
    // 에러 이름 출력-> console.error(err.name);
    // 에러 내용 출력-> console.error(err.message);
} finally {
    // 에러의 발생 여부에 상관 없이 무조건 맨 마지막에 실행되는 블록
    // 필요하지 않은 경우 생략할 수 있다.
    console.log("배열 탐색이 종료되었습니다.");
}

// try~catch로 발생할 에러에 대비하면 에러가 발생하더라도 프로그램이 중단되지 않는다.
console.log('프로그램 종료');