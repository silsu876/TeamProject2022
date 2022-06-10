package biz;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import dao.MemberDAO;

@WebServlet("/login")
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public LoginServlet() {
		super();
	}
	protected void doGet(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		response.setContentType("text/html; charset=UTF-8");
		
		String id,pw;
		boolean result = false;
		PrintWriter out = response.getWriter();
		
		id = request.getParameter("id");
		pw = request.getParameter("pw");
		
		MemberDAO dao = new MemberDAO();
		result = dao.getMemberPwd(id, pw);		
		
		if(result) {	
			HttpSession session = request.getSession();
			session.setAttribute("loginOK", id);
			out.println("<script>location.href ='"+request.getContextPath()+"/main/index.jsp',alert('로그인이 성공하였습니다.');</script>");
			System.out.println(id + "성공"); 

		}else {
		out.println("<script>alert('회원정보가 맞지 않습니다.'); history.back(); </script>");	
		}
	}
}
