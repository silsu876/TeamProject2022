<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>방탈출 게임</title>
    <script src="https://kit.fontawesome.com/2371ef8b46.js" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <link rel="stylesheet" href="../resources/css/style.css">
</head>

<body>
    <div class="wrapper">
        <!--헤더 섹션-->
        <header class="position-absolute w-100" style="top: 0; left: 0;">
            <div class="container  h-100 w-100">
                <div class="row d-flex align-items-center h-100 w-100 m-0 justify-content-between">
                    <div class="logo_box col-md-auto m-0">
                         <a href="./index.jsp" class="text-white">
                        <img class="logoStart" src="images/#" alt="LOGO" />
                    </a>
                    </div>
                    <nav class="col-md-auto m-0">
                        <ul class="menu d-flex justify-content-end align-items-center m-0">
                            <li class="p-2">
                                <a href="./login.jsp" class="text-white">
                                Login
                                <i class="fa fa-sign-in"></i>
                                </a>
                            </li>
                            <li class="p-2">
                                <span class="d-flex justify-content-center align-items-center ">|</span>
                            </li>
                            <li class="p-2">
                                <a href="./rank.jsp" class="text-white">
                                Rank
                                <i class="fa fa-crown"></i>
                            </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <hr />
        </header>
        <section id="join" class="w-100">
            <div class="d-flex align-items-center justify-content-center w-100 h-100">
                <form action="./login.jsp" method="post">
                    <div class="container join_container mt-5">
                        <h1 class="mb-4 text-center"><b>회원가입</b></h1>
                        <div class="mb-3 row">
                            <label for="id" class="col-sm-2 col-form-label">ID</label>
                            <div class="col-sm-10 position-relative">
                                <input type="text" class="form-control border border-light bg-black text-white" placeholder="아이디"
                                name="id" id="id">
                                <div class="position-absolute" style="top: 0; right:-95px;">
                                    <input type="button" class="btn border border-light text-white" value="중복 확인">
                                </div>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="pw" class="col-sm-2 col-form-label">PW</label>
                            <div class="col-sm-10">
                                <input type="password" class="form-control border border-light bg-black text-white" placeholder="비밀번호"
                                    name="pw" id="pw">
                            </div>
                        </div>
                        <div class="row" style="margin-bottom: 35px;">
                            <label for="pwCheck" class="col-sm-2 col-form-label">PW 확인</label>
                            <div class="col-sm-10">
                                <input type="password" class="form-control border border-light bg-black text-white" placeholder="비밀번호 확인"
                                    name="pwCheck" id="pwCheck">
                            </div>
                        </div>
                        <div class="m-0 d-flex align-items-center justify-content-center w-100 ">
                            <input type="submit" class="btn btn-light mx-1" value="확인" style="width: 130px;">
                        </div>
                    </div>
                </form>
            </div>
        </section>
  </div>
</body>

</html>