<!-- page의 지시문 -->
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!-- page의 지시문 끝 -->
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>First Jsp</title>
<style type="text/css">

</style>
</head>
<body>

<h1>Hello My First Jsp File ! </h1>
<p>이 페이지는 샘플입니다.</p>
<!-- Java 코드를 넣고 실행하는 부분이면서 20라인에 결과가 나타난다 -->
<p><%= java.util.Calendar.getInstance().getTime() %></p>

</body>
</html>