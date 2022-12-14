/**
 * isNaN(value)
 * 파라미터로 전달된 값이 NaN일 경우 true, 그렇지 않을 경우 false를 반환한다.
 * -> 숫자가 아니면 true, 숫자가 맞다면 false
 * -> 숫자로 변환 가능한 형식일 경우 false
 * 
 * JavaScript의 다른 모든 값과 달리, NaN은 같음 연산(==, ===)을 사용해 판별할 수 없다.
 * 그래서 NaN 여부를 판별하는 함수가 필요하다.
 */

// 숫자로 변환할 수 없다고 판단하는 경우
console.log(isNaN(NaN));       // true
console.log(isNaN(undefined));       // true
console.log(isNaN({}));       // true
console.log(isNaN('blabla'));       // true
console.log(isNaN('123ABC'));       // true

// 숫자로 변환할 수 있다고 판단하는 경우
console.log(isNaN(true));       // false --> 1
console.log(isNaN(null));       // false --> 0
console.log(isNaN(37));       // false
console.log(isNaN('37'));       // false : "37"은 NaN이 아닌 숫자 37로 변환됨
console.log(isNaN('37.37'));       // false : "37.37"은 NaN이 아닌 숫자 37.37로 변환됨
console.log(isNaN(''));       // false : 빈 문자열은 NaN이 아닌 0으로 변환됨
console.log(isNaN(' '));       // false : 공백만으로 구성된 문자열은 NaN이 아닌 0으로 변환됨