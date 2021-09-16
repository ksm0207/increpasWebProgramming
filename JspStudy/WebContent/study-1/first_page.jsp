<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<h1>Sapme jsp</h1>

<p>이 페이지는 샘플입니다.</p>
<p> 아래는 현재 시간을 나타내는 자바 코드를 넣었습니다. </p>
<p><%= java.util.Calendar.getInstance().getTime() %></p>
</body>
</html>