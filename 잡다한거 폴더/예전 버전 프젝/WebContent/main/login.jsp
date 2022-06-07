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
              <!--로그인-->
        <section id="login" class="w-100">
            <div class="d-flex align-items-center justify-content-center w-100 h-100">
                <form action="<%= request.getContextPath()%>/main/index.jsp" method="post">
                    <div class="container login_container ">
                        <h1 class="mb-4 text-center"><b>로그인</b></h1>
                        <div class="mb-3 row">
                            <label for="id" class="col-sm-2 col-form-label">ID</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control border border-light bg-black text-white" placeholder="아이디"
                                    name="id" id="id">
                            </div>
                        </div>
                        <div class="row" style="margin-bottom: 35px;">
                            <label for="pw" class="col-sm-2 col-form-label">PW</label>
                            <div class="col-sm-10">
                                <input type="password" class="form-control border border-light bg-black text-white" placeholder="비밀번호"
                                    name="pw" id="pw">
                            </div>
                        </div>
                        <div class="m-0 d-flex align-items-center justify-content-center w-100 ">
                            <a href="<%= request.getContextPath()%>/main/join.jsp" class="btn border border-light text-white mx-1"
                                style="width: 110px;">회원가입</a>
                            <input type="submit" class="btn btn-light mx-1" value="확인" style="width: 110px;">
                        </div>
                    </div>
                </form>
            </div>
        </section>
  </div>
</body>

</html>