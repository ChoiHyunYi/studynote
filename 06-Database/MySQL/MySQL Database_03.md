# 01. SQL 연산자

## ▶︎ BETWEEN 연산자

### * 조회 조건값의 범위를 설정하는 BETWEEN 연산자

- 특정 컬럼의 데이터 값이 하한값 `A`와 상한값 `B` 사이에 포함되는 행을 검색하기 위한 연산자

```sql
select * | 컬럼이름 from <테이블 이름> where 컬럼이름 between A and B;
```

- 두 개의 비교식을 **AND 연산자**로 묶은 것과 동일한 결과를 얻을 수 있음

```sql
select * | 컬럼이름 from <테이블 이름> where 컬럼이름 >= A and 컬럼이름 <= B;
```

```sql
ex)
BETWEEN 연산자를 사용하여 몸무게가 50kg에서 70kg 사이인 학생의 학번, 이름, 몸무게를 출력
-> select studno, name, weight from student where weight between 50 and 70;

비교연산자와 AND 연산자를 사용하여 몸무게가 50kg에서 70kg사이인 학생의 학번, 이름, 몸무게를 출력
-> select studno, name, weight from student where weight >= 50 and weight <= 70;
```

<br/>

## ▶︎ IN 연산자

### * 여러 개의 값 중에서 하나라도 일치하면 참이 되는 연산자

- 특정 컬럼의 데이터 값이 A, B, …, Z 값 중 하나라도 일치하면 ‘참’이 되는 연산자

```sql
select * | 컬럼이름 from <테이블 이름> where 컬럼이름 in (A, B, ..., Z);
```

- 여러 개의 비교식을 **OR 연산자**로 묶은 것과 동일한 결과를 얻을 수 있음

```sql
select * | 컬럼이름 from <테이블 이름> where 컬럼이름=A or 컬럼이름=B or ... or 컬럼이름=Z;
```

```sql
ex)
IN 연산자를 사용하여 102번 학과와 201번 학과 학생의 이름, 학년, 학과번호 출력
-> select name, grade, deptno from student where deptno in (102, 201);

비교 연산자와 OR 연산자를 사용하여 102번 학과와 201번 학과 학생의 이름, 학년, 학과번호 출력
-> select name, grade, deptno from student where deptno=102 or deptno=201;
```
<br/>

## ▶︎ LIKE 연산자

### * 특정 키워드가 포함된 데이터를 검색

- 컬럼에 저장된 문자열이 LIKE 연산자에서 지정한 문자패턴과 부분적으로 일치하면 참이 되는 연산자

```sql
select * | 컬럼이름 from <테이블 이름> where 컬럼이름 like '%검색어%';
```

- 아래와 같은 특수문자를 이용
    - **`‘%’`** : 임의의 길이인 문자열(길이가 0인 경우도 포함)에 대한 특수문자로 윈도우에서의 ‘*’와 동일한 의미를 갖음
        
        
        | 특수문자 | 설명 |
        | --- | --- |
        | ‘%김’ | ‘김’으로 끝나는 모든 내용 |
        | ‘김%’ | ‘김’으로 시작하는 모든 내용 |
        | ‘%김%’ | 앞 뒤 구분 없이 ‘김’을 포함하는 모든 내용 |

```sql
ex)
학생 테이블에서 성이 '김'씨인 학생의 이름, 학년, 학과번호를 출력
-> select name, grade, deptno from student where name like '김%';
```
<br/>

## ▶︎ IS NULL, IS NOT NULL 연산자

### * NULL 값의 의미

- null은 **미확인 값** 혹은 **아직 결정되지 않은 값**을 의미
- null은 숫자 0 이나 공백과는 다른 값
    - ex) 학생 몸무게가 null인 경우는 학생 몸무게가 0이 아니라, 현재 시점에서 그 학생의 몸무게를 모른다는 의미
- 대부분의 프로그래밍 구현에서 **미필수 항목에 대하여 사용자가 입력하지 않은 경우를 NULL로 처리**함

```sql
ex)
교수 테이블에서 이름, 직급, 보직수당을 출력 -> Null 데이터 확인
-> select name, position, comm from professor;
=> 이 테이블에서의 Null 데이터는 보직수당이 결정되지 않았음을 의미함
```
<br/>

- 특정 컬럼에 저장된 데이터에 대한 Null 여부 검사

```sql
select * | 컬럼이름 from <테이블 이름> where 컬럼이름 is [not] null;
```

| 값 | 설명 |
| --- | --- |
| IS NULL | 컬럼 값 중에서 NULL을 포함하는 행을 검색하기 위해 사용 |
| IS NOT NULL | NULL을 포함하지 않는 행을 검색하기 위해 사용 |

```sql
ex)
교수테이블에서 보직수당이 없는 교수의 이름, 직급, 보직수당을 출력
-> select name, position, comm from professor where comm is null;

교수테이블에서 보직수당을 받고 있는 교수의 이름과 급여, 보직수당을 출력
-> select name, sal, comm from professor where comm is not null;
```
<br/>

## ▶︎ 연산자 우선 순위

- where절의 조건을 분석하는 우선 순위
    - AND가 OR보다 우선!

| 순위 | 연산자 |
| --- | --- |
| 1 | 괄호로 묶인 부분 |
| 2 | 비교연산자(=, !=, >, >=, <, <=)<br/>SQL 연산자(BETWEEN, IN, LIKE, IS [NOT] NULL) |
| 3 | NOT |
| 4 | AND |
| 5 | OR |

```sql
ex)
102번 학과의 학생중에서 1학년 또는 4학년 학생의 이름, 학년, 학과 번호를 출력
-> select name, grade, deptno from student where deptno=102 and (grade=1 or grade=4);
```
<br/><br/>

# 02. 정렬, 부분조회

## ▶︎ 데이터 정렬하기

### * ORDER BY절

- 컬럼이나 표현식을 기준으로 출력 결과를 정렬할 때 사용

```sql
select [distinct] {* | 컬럼이름 [as 별칭]...} from <테이블 이름> [where 검색조건] [order by 컬럼이름 [정렬옵션]];
```

- 정렬 옵션
    - ASC : 오름차순으로 정렬하는 경우에 사용하며 기본값임 → 순차 정렬
    - DESC : 내림차순으로 정렬하는 경우에 사용하며 생략 불가능 → 역순 정렬
- 기본적인 정렬 방법(ASC의 경우)
    - 문자값 : 알파벳순 출력, 한글은 가나다 순으로 출력
    - 숫자값 : 가장 작은 값부터 먼저 출력
    - 날짜값 : 과거의 날짜부터 출력

```sql
ex)
학생 테이블에서 이름을 가나다 순으로 정렬하여 이름, 학년, 전화번호를 출력
-> select name, grade, tel from student order by name;
```
<br/>

### * 다중 컬럼 정렬

- 2차, 3차 정렬 조건 부여하기
    - ORDER BY 절에서 지정한 첫번째 컬럼을 기준으로 1차 정렬한 후, 동일한 값이 있는 경우 두번째 컬럼을 기준으로 정렬
    - 각 컬럼별로 정렬 옵션이 따로 설정됨
    
    ```sql
    select [distinct] {* | 컬럼이름 [as 별칭]...} from <테이블 이름> [where 검색조건]
    [order by 컬럼이름1 [정렬 옵션], 컬럼이름2 [정렬 옵션], ..., 컬럼이름n [정렬 옵션]];
    ```
    

```sql
ex)
모든 학생에 대해 학과번호를 오름차순으로 먼저 정렬하고,
같은 학과 학생들은 학년이 높은 순으로 다시 정렬하여 학번, 이름, 학년, 학과번호, 사용자 아이디를 출력
-> select studno, name, grade, deptno, userid from student order by deptno ASC, grade DESC;
```
<br/>

## ▶︎ 데이터 부분 조회

### * LIMIT 절

- 전체 조회 결과의 x번째 위치에서 부터 y개를 조회
- x값은 0부터 시작

```sql
select [distinct] {* | 컬럼이름 [as 별칭] ...} from <테이블 이름> [where 검색 조건]
[order by 컬럼이름1 [정렬 옵션], 컬럼이름2 [정렬 옵션], ..., 컬럼이름n [정렬 옵션]]
[limit x, y]
```

- 참고!
    - 부분 조회 기능은 프로그램에서 페이지 번호 구현과 관련 있음
    - Limit 절의 경우 MySQL에서만 지원되는 구문이며, 같은 기능을 MSSQL에서는 TOP절의 형식으로,<br/>Oracle의 경우는 Rawnum이라는 기능으로 제공

```sql
ex)
교수테이블에서 급여가 높은 상위 3명의 이름, 직급, 급여를 조회(0번째 위치부터 3건의 데이터 추출하기)
-> select name, position, sal from professor order by sal DESC limit 0, 3;
```

- 3건씩 나누어 부분 조회
    - limit 0, 3 / limit 3, 3 / limit 6, 3 / limit 9, 3
        
        → 마지막 페이지에서 지정된 수(3)보다 남아 있는 데이터가 적은 경우 존재하는 만큼만 조회됨<br/>
        (데이터는 총 10개가 있고, x값은 0부터 시작하므로 limit 9, 3은 1개만 조회됨)