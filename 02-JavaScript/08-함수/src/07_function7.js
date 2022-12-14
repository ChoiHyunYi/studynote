/** 실행중단 */

function returnBreak(x, y) { 
    // if문 조건에 맞을 경우 리턴값이 반환됨
    if (x < 10) {
        return -1;
    }

    if (y < 10) {
        return -2;
    }

    return x + y;
}

// 첫번째 if문에 의해 처리가 중단되고 -1이 반환됨
console.log(returnBreak(1, 100));

// 두번째 if문에 의해 처리가 중단되고 -2이 반환됨
console.log(returnBreak(100, 1));

// 정상 실행 됨
console.log(returnBreak(100, 20));