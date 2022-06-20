# Exam02

## ▶︎ SQL 연산자

### 01) 교수테이블에서 급여가 300~400만원 사이인 교수의 이름과 급여를 BETWEEN 연산자를 사용하여 조회하시오.

```sql
select name, sal from professor where sal between 300 and 400;
```

### 02) 교수테이블에서 직급이 조교수 또는 전임강사인 교수의 번호, 이름, 직급, 학과번호를 IN 연산자로 조회하시오.

```sql
select profno, name, position, deptno from professor
where position in ('조교수', '전임강사');
```

### 03) 학과 이름에 ‘공학'이라는 단어가 포함된 모든 학과의 학과번호, 이름, 위치를 조회하시오.

```sql
select deptno, dname, loc from department where dname like '%공학%';
```

### 04) 학생 테이블에는 해당 학생의 담당교수가 결정된 경우 교수번호가 함께 저장되어 있다.<br/>담당 교수가 결정된 학생의 학번, 이름, 학년, 담당 교수 번호를 조회하시오.

```sql
select studno, name, grade, profno from student where profno is not null;
```

### 05) 102번 학과의 학생 중에서 4학년 학생이거나, 소속된 학과에 상관없이 1학년 학생들의 이름, 학년, 학과 번호를 출력하여라.

```sql
select name, grade, deptno from student where deptno=102 and grade=4 or grade=1;
```