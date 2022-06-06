<%@page import="dao.MemberDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%
		String id, pw, pwCheck;
		MemberDAO dao = new MemberDAO();
		int n = 0;
		id = request.getParameter("id");
		pw = request.getParameter("pw");
		pwCheck = request.getParameter("pwCheck");

		n = dao.insertMember(id, pw, pwCheck);

		if (n > 0) {
			response.sendRedirect(request.getContextPath() + "/main/login.jsp");

		} else {
			out.print("<script> alert('비밀번호가 맞지 않습니다'); history.back() </script>");
		}
	%>

</body>
</html>