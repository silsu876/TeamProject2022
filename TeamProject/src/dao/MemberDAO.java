package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.sun.corba.se.spi.orbutil.fsm.Guard.Result;

import common.JDBCUtil;

public class MemberDAO {
	public ArrayList<String> getMemberList() {
		ArrayList<String> list = new ArrayList<>();

		Connection conn = null;
		PreparedStatement pstmt = null;

		ResultSet rs = null;
		String sql = "select id from users";

		conn = JDBCUtil.getConnection();
		try {
			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();
			while (rs.next()) {
				list.add(rs.getString("id"));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			JDBCUtil.close(conn, pstmt, rs);
		}
		return list;

	}


	public int insertMember(String id, String pw, String pwCheck) {
		int n = 0;
		if (pw.equals(pwCheck)) {

			Connection conn = null;
			PreparedStatement pstmt = null;
			String sql = "insert into users values(?,?)";

			conn = JDBCUtil.getConnection();
			try {
				pstmt = conn.prepareStatement(sql);
				pstmt.setString(1, id);
				pstmt.setString(2, pw);
				n = pstmt.executeUpdate();
			} catch (SQLException e) {
				// TODO: handle exception
				e.printStackTrace();
			} finally {
				JDBCUtil.close(conn, pstmt);

			}
		}
		return n;
	}

	public int updateMember(String id, String pw) {
		int n = 0;

		Connection conn = null;

		PreparedStatement pstmt = null;
		String sql = "update users set pw=? where id = ?";

		conn = JDBCUtil.getConnection();

		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, pw);
			pstmt.setString(2, id);
			n = pstmt.executeUpdate();
		} catch (SQLException e) {
			// TODO: handle exception
			e.printStackTrace();
		} finally {
			JDBCUtil.close(conn, pstmt);
		}
		return n;
	}

	public int deleteMember(String id) {
		int n = 0;

		Connection conn = null;
		PreparedStatement pstmt = null;
		String sql = "delete from users where id =?";

		conn = JDBCUtil.getConnection();

		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, id);
			n = pstmt.executeUpdate();
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		} finally {
			JDBCUtil.close(conn, pstmt);
		}
		return n;
		
	}public boolean getMemberPwd(String id, String pwd) {

		Connection conn = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		String sql = "select pw from users where id =?";
		boolean result = false;
		
		conn = JDBCUtil.getConnection();
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, id);
			rs= pstmt.executeQuery();
			
			if (rs.next()) {
				if (pwd.equals(rs.getString("pw"))) 
					result = true;
				
			}
		} catch (Exception e) {
			e.printStackTrace();
		}finally {
			JDBCUtil.close(conn, pstmt , rs);
		}
		return result;
		
	}
	public void selectRank(String id, String pwd) {
		Connection conn = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		String sql = "";
		
	}
}
