package common;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import oracle.jdbc.proxy.annotation.Pre;

public class JDBCUtil {
	public static Connection getConnection() {
		Connection conn = null;
		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
			conn = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:orcl","hr","hr");
			
		} catch (Exception e) {
			System.out.println("DB 연결 실패");
			e.printStackTrace();
		}
		return conn;
	}
	
	public static void close(Connection conn,PreparedStatement pstmt) {
		if (pstmt != null) {
			try {
				pstmt.close();
			} catch (SQLException e) {
				// TODO: handle exception
				System.out.println("pstmt.close() 실패");
				e.printStackTrace();
			}
		}
		if(conn != null) {
			try {
				conn.close();
			} catch (SQLException e) {
				// TODO: handle exception
				System.out.println("conn.close() 실패");
				e.printStackTrace();
			}
			
		}
	
	}
	public static void close(Connection conn, PreparedStatement pstmt, ResultSet rs) {
		if(rs != null) {
			try {
				rs.close();
			} catch (SQLException e) {
				// TODO: handle exception
				System.out.println("rs.close() 실패");
				e.printStackTrace();
				
			}
		}
		close(conn, pstmt);
	}
}
