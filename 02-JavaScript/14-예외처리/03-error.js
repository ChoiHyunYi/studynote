/** 에러객체2 */

// 개발자가 발생시키는 에러에 대한 예외처리
let err = new Error("이상한 일이 벌어졌습니다.");

try {
    // throw구문은 그 자체를 에러로 인식하기 때문에 try~catch 처리가 가능하다.
    throw err;
} catch (err) {
    console.log(err.name);
    console.log(err.message);
}

console.log("프로그램 종료");