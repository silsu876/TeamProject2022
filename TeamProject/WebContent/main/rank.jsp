<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>방탈출 게임</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.0/css/all.min.css"
        integrity="sha512-10/jx2EXwxxWqCLX/hHth/vu2KY3jCF70dCQB8TSgNjbCVAC/8vai53GfMDrO2Emgwccf2pJqxct9ehpzG+MTw=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <link rel="stylesheet" href="<%= request.getContextPath()%>/resources/css/style.css">
</head>

<body>
    <div class="wrapper">
        <!--헤더 섹션-->
        <header class="position-absolute w-100" style="top: 0; left: 0;">
            <div class="container  h-100 w-100">
                <div class="row d-flex align-items-center h-100 w-100 m-0 justify-content-between">
                    <div class="logo_box col-md-auto m-0">
                    <a href="<%= request.getContextPath()%>/main/index.jsp" class="text-white">
                        <img class="logoStart" src="images/#" alt="LOGO" />
                    </a>
                    </div>
                    <nav class="col-md-auto m-0">
                        <ul class="menu d-flex justify-content-end align-items-center m-0">
                            <li class="p-2">
                                <a href="<%= request.getContextPath()%>/main/login.jsp" class="text-white">
                                    Login
                               <i class="fa-solid fa-arrow-right-to-bracket"></i>
                                </a>
                            </li>
                            <li class="p-2">
                                <span class="d-flex justify-content-center align-items-center ">|</span>
                            </li>
                            <li class="p-2">
                                <a href="<%= request.getContextPath()%>/main/rank.jsp" class="text-white">
                                    Rank
                                    <i class="fa-solid fa-crown"></i>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <hr />
        </header>
              <!--랭킹-->
        <section id="rank">
            <div class="d-flex align-items-center justify-content-center w-100 h-100">
                <div class="ranking_container container mt-5">
                    <h1 class="text-center mb-5"><b>랭킹</b></h1>
                    <div style="width:100%; height:300px; overflow:auto" class="table_scroll">
                        <table class="table" width="100%" cellspacing="0" cellpadding="0">
                            <thead>
                            <th scope="col">랭킹</th>
                            <th scope="col">ID</th>
                            <th scope="col">플레이 시간</th>
                        </thead>
                        <tbody>
                       <%--데이터 베이스 만들어줘 Rank 기본 유저 테이블 하고 연결좀 --%>
                       <% 
                       for (int i=1; i<11; i++) { %>
                       		<tr>
                       			<td scope="row">
                       				<div><%= i %></div>
                       			</td>
                       			<td>id</td>
                       			<td>date</td>
                       		</tr>
                       <% } %>
                    </tbody>
                </table>                      
            </div>
                </div>
            </div>
        </section>
    </div>
</body>

</html>