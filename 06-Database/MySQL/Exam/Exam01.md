# Exam01_MySQL

### 01) 학생 테이블에서 학생 이름과 학생 번호를 조회하시오.

```sql
select name, studno from student;
```

### 02) 교수테이블에서 직급의 종류를 조회하시오.
→ 직급의 종류는 저장된 직급 데이터들의 중복을 제거하면 알 수 있다.

```sql
select distinct position from professor;
```

### 03) 학과테이블을 사용하여 deptno를 부서, dname을 부서명, loc를 위치로 별명을 설정하여 출력하시오.

```sql
select deptno `부서`, dname `부서명`, loc `위치` from department;
```

### 04) 학생 테이블에서 학생 이름과 각 학생에 대한 표준 체중을 조회하시오.
→ 단, 표준 체중은 (키(height)-110)*0.9로 구하시오.

```sql
select name, (height-110)*0.9 from student;
```

### 05) 학생 테이블에서 학과번호가 101번인 학생들의 학번, 이름, 학년을 출력하시오.

```sql
select studno, name, grade from student where deptno = 101;
```

### 06) 교수 테이블에서 학과번호가 101번인 교수들의 교수번호, 이름, 급여를 출력하시오.

```sql
select profno, name, sal from professor where deptno = 101;
```

### 07) 학생 테이블에서 키가 170 이상인 학생의 학번, 이름, 학년, 학과번호, 키를 출력하시오.

```sql
select studno, name, grade, deptno, height from student where height >= 170;
```

### 08) 학생 테이블에서 1학년 이거나 몸무게가 70kg 이상인 학생만 검색하여 이름, 학번, 학년, 몸무게, 학과 번호를 출력하시오.

```sql
select name, studno, grade, weight, deptno from student
where grade = 1 or weight >= 70;
```