/** 메서드와 멤버변수를 갖는 클래스 */

class HelloWorld {
    /** 생성자 함수 */
    constructor() {
        // 생성자의 역할은 멤버변수를 정의
        // --> 선언만 하고 추구 할당 하기 위해 null로 초기화한다.
        this.message = null;
        // (추가작성) 같은 class 안에 있는 this는 내용(아래 작성된 내용)을 다 끌어다 쓸 수 있음
    }

    sayHello() {
        console.log(this.message);
    }

    setEng() {
        this.message = "Hello Javascript";
    }

    setKor() {
        this.message = "안녕하세요. 자바스크립트";
    }
};

const hello = new HelloWorld();

hello.setEng();
hello.sayHello();

hello.setKor();
hello.sayHello();