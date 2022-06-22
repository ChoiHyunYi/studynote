# Exam03

## 함수

### 01) 학생의 이름과 가운데 글자를 ‘*’로 변경한 이름을 조회하시오.<br/>단, 이름은 3글자로만 구성된다고 가정합니다.

```sql
select name, concat(left(name, 1), '*', right(name, 1)) from student;
```

### 02) 학생의 이름과 주민번호를 조회하시오.<br/>단, 주민번호의 뒤 자리 7글자는 ‘*’로 표시하시오.

```sql
select name, concat(left(idnum, 6), '*******') from student;
```

### 03) 1980년도 이후에 출생한 학생의 이름과 생년월일을 조회하시오.

```sql
select name, birthdate from student where date_format(birthdate, '%Y') > 1980;
```

### 04) 101번 학과 학생들 중에서 최대 키와 최소 키를 출력하시오.

```sql
select max(height), min(height) from student where deptno=101;
```