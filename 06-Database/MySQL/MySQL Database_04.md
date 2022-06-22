# 01. 함수(1)

## ▶︎ SQL 함수란?

### * SQL 함수

- 저장되어 있는 데이터를 집계하거나 조회, 저장, 수정하는 과정에서 값을 가공하기 위하여 제공되는 모듈화된 기능
- 각 DBMS에 따라 차이를 보이지만, 기본적으로 많이 사용되는 함수들은 공통으로 포함하고 있음

### * 함수의 사용 방법

- 데이터 조회 시
    
    → 조회하고자 하는 컬럼의 값을 함수로 가공하거나 검색조건의 값을 지정할 때 사용
    
    ```sql
    select 함수이름(컬럼이름) from <테이블 이름> [where 함수가 적용된 검색조건];
    ```
    
<br/>

## ▶︎ 문자열 관련 함수

### * 문자열 관련 함수의 종류

- 아래의 표에서 값은 컬럼 이름으로도 지정 가능

| 함수 이름 | 설명 |
| --- | --- |
| left(값, 길이) | 주어진 값을 길이의 글자 수 만큼 왼쪽에서 잘라냄 |
| right(값, 길이) | 주어진 값을 길이의 글자 수 만큼 오른쪽에서 잘라냄 |
| substring(값, 시작위치, 길이(=개수)) | 주어진 값을 시작위치부터 길이만큼 잘라냄<br/>만약 길이가 주어지지 않은 경우 시작위치부터 끝까지 잘라냄 |
| replace(값, A, B) | 주어진 값에서 A를 찾아 B로 바꿈 |
| concat(값1, 값2, …, 값n) | 주어진 값들을 하나의 문자열로 연결 |
| trim(값) | 주어진 값의 앞뒤 공백을 제거 |
| ltrim(값) | 주어진 값의 왼쪽 공백을 제거 |
| rtrim(값) | 주어진 값의 오른쪽 공백을 제거 |
| md5(값) | 주어진 값을 암호화 |
| char_length(값) | 주어진 값의 글자수를 리턴 |
| instr(값, 찾을 내용) | 주어진 값에서 찾을 내용이 시작되는 위치를 리턴함<br/>찾지 못할 경우 0을 리턴 |
| upper(값) | 주어진 값을 대문자로 변경 |
| lower(값) | 주어진 값을 소문자로 변경 |

```sql
ex)
학생 테이블에서 학생의 이름과 성(이름의 첫글자)을 조회
-> select name, left(name, 1) from student;

학생 테이블에서 학생의 이름과 이름의 마지막 글자를 조회
-> select name, right(name, 1) from student;

학생 테이블에서 이름과 이름의 두 번째 글자를 조회
-> select name, substring(name, 2, 1) from student;

학생 이름과 이름에서 '이'를 'lee'로 변경한 값을 출력
-> select name, replace(name, '이', 'lee') from student;

학생 이름과 학년을 하나의 문장으로 합쳐 출력
-> select concat(name, grade) from student;

학생의 이름과 학년을 '전인하 4학년'의 형식으로 출력
-> select concat(name, ' ', grade, '학년') from student;

학생의 이름에서 앞뒤 공백을 제거한 값을 출력
-> select trim(name) from student;

학생 이름에서 왼쪽 공백을 제거한 값을 출력
-> select ltrim(name) from student;

학생의 이름에서 오른쪽 공백을 제거한 값을 출력
-> select rtrim(name) from student;

학생의 이름을 암호화한 결과를 출력
-> select md5(name) from student;

학생 이름의 글자수를 조회
-> select char_length(name) from student;

학생 이름에서 '이'라는 글자가 나타나는 위치와 이름을 조회
-> select instr(name, '이'), name from student;

학생의 아이디를 대문자로 변경하여 조회
-> select upper(userid) from student;

학생의 아이디를 소문자로 변경하여 조회
-> select lower(userid) from student;
```
<br/><br/>

# 02. 함수(2)

## ▶︎ 날짜 관련 함수

### * 날짜 관련 함수의 종류

| 함수 이름 | 설명 |
| --- | --- |
| now() | 시스템의 현재 시각을 리턴 |
| date_add(시각, INTERVAL 값 단위) | 주어진 시각을 기준으로 날짜를 연산하여 리턴 |
| date_format(시각, 형식) | 주어진 시각을 형식에 맞춰 변경한 결과를 리턴 |
- date_add 함수에서 사용 가능한 단위
    - YEAR, MONTH, DAY, HOUR, MINITUE, SECOND
    - ex)
        - 1년 후 → date_add(now(), INTERVAL 1 YEAR)
        - 3개월 전 → date_add(now(), INTERVAL -3 MONTH)
        
<br/>

- date_add 함수를 사용하여 저장되어 있는 데이터를 기준으로 날짜 계산을 수행하는 경우
    - date_add(**컬럼이름**, INTERVAL 값 단위)
<br/>

### * date_format 함수에서 사용 가능한 키워드

| 기능 | 키워드 | 기능 | 키워드 |
| --- | --- | --- | --- |
| 달 이름 | %M | MM 형식의 월 | %m |
| 요일 이름 | %W | HH 형식의 시간(24시간제) | %H |
| YYYY 형식의 년도 | %Y | H 형식의 시간(24시간제) | %k |
| YY 형식의 년도 | %y | HH 형식의 시간(12시간제) | %h |
| 요일 이름의 약자 | %a | MM 형식의 분 | %i |
| DD 형식의 날짜 | %d | SS 형식의 초 | %s |
| D 형식의 날짜 | %e | AM/PM | %p |
- ex)
    - yy/mm/dd hh:mi:ss 형식의 날짜 얻기
        
        > select date_format(now(), ‘%y/%m/%d %H:%i:%s’);
        > 

```sql
ex)
시스템의 현재 시각 조회
-> select now();
=> 단순히 시스템의 현재 시각을 조회하는 경우 from 절을 명시하지 않음

현재 시점에서 100일 후 조회
-> select date_add(now(), interval 100 day);

현재 시점에서 7일 전 조회
-> select date_add(now(), interval -7 day);

현재 시각을 yyyymmddhhmiss 형식의 14자리로 표현
-> select date_format(now(), '%Y%m%d%H%i%s');
```
<br/>

## ▶︎ 그룹 함수(= 집계 함수)

### * 그룹 함수란?

- 테이블의 전체 행을, 하나 이상의 컬럼을 기준으로 컬럼 값에 따라 **그룹화하여 그룹별로 결과를 출력하는 함수**
    
    
    | 종류 | 설명 |
    | --- | --- |
    | COUNT | 행의 개수 출력 |
    | MAX | NULL을 제외한 모든 행에서 최대값 출력 |
    | MIN | NULL을 제외한 모든 행에서 최소값 출력 |
    | SUM | NULL을 제외한 모든 행의 합계 |
    | AVG | NULL을 제외한 모든 행의 평균값 |

```sql
ex)
3학년 학생은 총 몇 명인가?
-> select count(studno) from student where grade=3;

101번 학과에 소속된 교수들의 보직 수당 조회
-> select comm from professor where deptno = 101;
=> null 데이터 2건, 값이 결정된 데이터 2건 총 4건이 조회됨

101학과에 소속된 교수들 중에서 보직수당을 받는 교수의 수를 조회
-> select count(comm) from professor where deptno=101;
=> **count 함수**는 지정된 컬럼에서 **null 데이터는 제외하고 집계**하기 때문에,
   보직수당이 결정되지 않은 교수는 집계에서 제외됨

101 학과에 소속된 교수는 모두 몇 명인가?
-> select count(*) from professor where deptno=101;
=> 전체 데이터 수를 조회하기 위해서는 count 함수에 '*'을 지정하거나 null 데이터가 저장되어 있지 않은 컬럼을 지정
=> 전체 데이터 수를 조회할 경우 컬럼 이름을 지정하는 것보다 '*'을 지정하는 것이 처리속도가 더 빠름(MySQL에 한함)

급여를 가장 많이 받는 교수는 얼마를 받는가?
-> select max(sal) from professor;

급여를 가장 적게 받는 교수는 얼마를 받는가?
-> select min(sal) from professor;

한달에 지급되는 교수의 급여는 모두 얼마인가?
-> select sum(sal) from professor;

학생들의 평균 키는 얼마인가?
-> select avg(height) from student;

* 두 개 이상의 집계 함수 사용
101번 학과 학생들의 몸무게 평균과 합계를 출력
-> select avg(weight), sum(weight) from student where deptno=101;
```