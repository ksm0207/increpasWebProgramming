<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% 
	request.setCharacterEncoding("utf-8");
	
	// getParameter() 메소드는 사용자가 입력한 데이터를 읽어올 수 있다
	// 지금은 ajax로 데이터를 읽는다.
	// 저장할 변수가 꼭 필요하다
	// 이 메소드는 get방식이다.
	String str = request.getParameter("v1");
	

%>    

값 : <%=str%>