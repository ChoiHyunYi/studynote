# 01. 데이터 조회하기

## ▶︎ 데이터 기본 조회 구문

### * 전체 데이터 조회하기

1. 테이블의 모든 데이터 조회하기
    - 조회 속도가 상대적으로 느림
    
    ```sql
    mysql> select * from <테이블 이름>;
    
    ex) department 테이블의 모든 데이터 조회
    select * from department;
    ```
    
2. 컬럼명을 명시하여 테이블의 모든 데이터 조회하기
    - ‘*’을 사용하는 것 보다 조회 속도가 상대적으로 빠르므로 주로 사용
    
    ```sql
    mysql> select 컬럼1, 컬럼2, …, 컬럼n from <테이블 이름>;
    
    ex) 컬럼명을 명시하여 department 테이블의 모든 데이터 조회
    select deptno, dname, loc from department;
    ```
    

### * 원하는 데이터만 조회하기

- 컬럼명을 명시할 경우 조회를 원하는 컬럼만 명시할 수 있음
- 컬럼 나열 순서를 필요에 따라 변경할 수 있음

```sql
mysql> select 컬럼1, 컬럼2 from <테이블 이름>;

ex) 학과 테이블(department)에서 위치(loc)와 학과이름(dname)을 조회
select loc, dname from department;
```
<br/>

## ▶︎ 검색 결과 중복 제거

- select 구문에서 **distinct 키워드**를 사용하면 중복 행이 제거됨
- 단일 컬럼 조회, 복수 컬럼 조회 모두 중복 행 제거 가능

```sql
mysql> select distinct * | 컬럼1, 컬럼2, ..., 컬럼n from <테이블 이름>;

* 단일 컬럼 조회*
ex) 학생 테이블의 학과번호를 조회하되, 중복 행 제거
select distinct deptno from student;

* 복수 컬럼 조회*
ex) 학생 테이블에서 학과 번호와 학년을 출력하되, 중복 행 제거
select distinct deptno, grade from student;
```
<br/>

## ▶︎ 컬럼에 대한 별칭 부여

### * 컬럼 이름 뒤에 공백으로 구분하는 경우

```sql
mysql> select 컬럼1 `별칭1`, 컬럼2 `별칭2`, ..., 컬럼n `별칭n` from <테이블 이름>;

ex) 학과 테이블에서 dname 컬럼의 별명은 '학과이름', deptno 컬럼의 별명은 '학과번호'로 부여하여 출력
select dname `학과이름`, deptno `학과번호` from department;
```

### * 컬럼 이름 뒤에 AS 키워드를 사용하는 경우

```sql
mysql> select 컬럼1 as `별칭1`, 컬럼2 as `별칭2`, ..., 컬럼n as `별칭n` from <테이블 이름>;

ex) 학과테이블에서 학과이름 컬럼의 별명은 Department_Name, 학과 번호 컬럼의 별명은 Department_Number로 부여하여 출력
select dname as `Department_Name`, deptno as `Department_Number` from department;
```
<br/>

## ▶︎ 산술 연산자의 사용

### * select 절에서의 산술 연산자 사용

- 컬럼이름에 산술 연산을 적용하면 조회 결과에 적용되어 출력됨
- 원본 데이터는 변하지 않으며, 값을 가공하여 출력할 수 있음

```sql
ex) 교수테이블에서 교수이름(dname), 급여(sal), 보너스를 포함한 연봉을 출력
단, 보너스를 포함한 연봉은 급여*12를 한 결과에 보너스 100을 더한 값으로 계산
select name, sal, sal*12+100 from professor;
```
<br/>

## ▶︎ 검색 조건 지정하기

### * where절을 사용한 검색 조건 지정

- 검색조건에는 비교연산자와 논리 연산자를 사용할 수 있음

```sql
mysql> select [distinct] { * | 컬럼이름 [as `별칭`] ...} from <테이블 이름> [where 검색 조건];
```

- 비교 연산자의 종류

| 연산자 | 설명 |
| --- | --- |
| = | 같다 |
| > | 크다(초과) |
| < | 작다(미만) |
| != | 다르다 |
| >= | 크거나 같다(이상) |
| <= | 작거나 같다(이하) |
- 논리 연산자의 종류

| 연산자 | 종류 |
| --- | --- |
| AND | 모든 조건이 참일 때 참을 반환 |
| OR | 모든 조건이 거짓일 때 거짓을 반환 |
| NOT | 조건과 반대되는 결과를 반환 |

```sql
* 비교 연산자*
ex) 학생 테이블에서 1학년 학생만 검색하여 학번, 이름, 학과번호를 출력
select studno, name, deptno from student where grade = 1;

* 비교 연산자*
ex) 학생 테이블에서 몸무게가 70kg 이하인 학생만 검색하여 학번, 이름, 학년, 학과번호, 몸무게를 출력
select studno, name, grade, deptno, weight from student where weight <= 70;

* 논리 연산자*
ex) 학생 테이블에서 1학년이면서 몸무게가 70kg 이상인 학생만 검색하여 이름, 학번, 학년, 몸무게, 학과번호를 출력
select name, studno, grade, weight, deptno from student where grade = 1 and weight >= 70;
```