
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	<% request.setCharacterEncoding("UTF-8"); %>
	<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>방탈출 게임</title>
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.0/css/all.min.css"
	integrity="sha512-10/jx2EXwxxWqCLX/hHth/vu2KY3jCF70dCQB8TSgNjbCVAC/8vai53GfMDrO2Emgwccf2pJqxct9ehpzG+MTw=="
	crossorigin="anonymous" referrerpolicy="no-referrer" />
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
	crossorigin="anonymous">
<script src="https://code.jquery.com/jquery-3.6.0.min.js"
	integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
	crossorigin="anonymous"></script>
<script src="<%= request.getContextPath()%>/resources/js/script.js"></script>
<link rel="stylesheet"
	href="<%= request.getContextPath()%>/resources/css/style.css">
<style type="text/css">
body::-webkit-scrollbar {
	display: none;
}
</style>
</head>

<body>
	<div class="wrapper">
		<!--헤더 섹션-->
		<header>
			<div class="container  h-100 w-100">
				<div
					class="row d-flex align-items-center h-100 w-100 m-0 justify-content-between">
					<div class="logo_box col-md-auto m-0">
						<a href="<%= request.getContextPath()%>/main/index.jsp"
							class="text-white"> <img class="logoStart" src="./imgs/logo.png" width="100"
							alt="LOGO" />
						</a>
					</div>
					<nav class="col-md-auto m-0">
						<ul class="menu d-flex justify-content-end align-items-center m-0">
							<li class="p-2">
								<%
                          	String id = (String)session.getAttribute("loginOK");
								
							System.out.print(id);
                          	if(id == null){
                         %> <a
								href="<%= request.getContextPath()%>/main/login.jsp"
								class="text-white"> Login</a> <i
								class="fa-solid fa-arrow-right-to-bracket"></i> <%
                          }
                          	else{
                          		
                          %> 
                          <a href="<%= request.getContextPath()%>/Logout" class="text-white">logout</a>
								<i class="fa-solid fa-arrow-right-to-bracket"></i> <% 
                          	}
                           	%>
							</li>
							<li class="p-2"><span
								class="d-flex justify-content-center align-items-center ">|</span>
							</li>
							<li class="p-2"><a
								href="<%= request.getContextPath()%>/main/rank.jsp"
								class="text-white"> Rank <i class="fa-solid fa-crown"></i>
							</a></li>
						</ul>
					</nav>
				</div>
			</div>
		</header>

		<!--비주얼 섹션-->
		<section id="visual">
			<div class="d-flex align-items-center w-100 h-100">
				<div
					class="visual_container container d-flex w-100 justify-content-between" >
					<div class="visual_content">
						<p class="small_title f-14">THE BANGTALCHUL GAME</p>
						<h2 class="title1">방탈출</h2>
						<h2 class="title2">게임</h2>
						<div class="short_line"></div>
						<p class="visual_text">
							이 게임은 학교 프로젝트로 단순한 방탈출 게임입니다. <br> 여러 이스터에그도 찾아보세요!
						</p>
					</div>
					<img class="blackWolf position-absolute" src="./imgs/blackWolf.jpg" alt="blackWolf" />
				</div>
			</div>
		</section>

		<!--서브비주얼 섹션-->
		<section id="serve_visual">
				<img class="sky position-absolute w-100" src="./imgs/sunnySky.jpg" />
			<div class="serve_visual_container container w-100 h-100">
				<div class="row w-100 h-100">
					<div
						class="col-12 d-flex align-items-center justify-content-end w-100 h-100 text-end">
						<div class="serve_visual_text">
							<h3 class="fw-bold">story</h3>
							<div class="short_line"></div>
							<i class="fa-solid fa-quote-left"></i>
							<p class="f-14">
								내 이름은 김아무개, 17살이지!<br /> 앗 눈부셔! 오늘도 화려한 햇빛이 나를 감싸<br /> 는구나!
								지저귀는 새소리도 너무 아름다워!<br>
							</p>
							<i class="fa-solid fa-quote-right"></i>
							<p class="f-14">김아무개씨는 아무것도 모른채 신나있다.</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!--스토리 섹션-->
		<section id="story">
			<div class="container story_container w-100 h-100">

				<div class="long_line m-auto"></div>
				<h2 class="text-center fw-bold">어라? 새소리? 지각이야!!!!!</h2>
				<div
					class="row d-flex align-items-center w-100 justify-content-between"
					style="height: 85vh;">
					<div class="left_story_container col-md-auto">
						<i class="fa-solid fa-quote-left"></i>
						<h2 class="fw-bold m-0">지고쿠! 지고쿠!</h2>
						<p class="f-14">
							젠장! 새학기 첫날부터 지각이라니!<br /> 나답지 못한 실수를 했군!<br />
						</p>
						<i class="fa-solid fa-quote-right"></i>
						<p class="f-14">김아무개씨는 첫날부터 지각할 위기에 놓이는데..</p>
					</div>
					<div
						class="right_story_container col-md-auto d-flex justify-content-end">
						<img class="images" src="./imgs/main1.png" />
					</div>
				</div>
				<div class="text-center bottom">

					<p class="m-0 f-14">하지만 면회할 기회는 있었고, 열심히 달린 김아무개씨</p>
					<h3 class="fw-bold" style="margin-bottom: 2%;">이 앞 코너만 돌면
						정문이다!!</h3>
					<div class="long_line m-auto"></div>
				</div>
			</div>
		</section>
		<!-- 메인 섹션 -->
		<section id="main">
			<div class="main_img position-relative" style="height: 100vh; overflow:hidden;">
				<img class="images position-absolute main2_img" src="./imgs/main2.png" />
				<img class="images position-absolute truck" src="./imgs/truck.png" />
				<img class="images position-absolute gigocu" src="./imgs/gigocu.png" />
			</div>
			<div class="main_container container" style="height: 30vh;">
				<div class="main_text text-center py-5 h-100">
					<p>으으... 여기가 어디지?</p>
					<p>트럭에 치인 후로 기억이 없어..</p>
					<p>설마?! 이세계 트럭???</p>
					<h3 class="fw-bold m-0">나도 드디어 이세카이로??</h3>
				</div>
			</div>
		</section>

		<!--사이드바디 섹션-->
		<section id="side_body">
			<div class="side_body_container position-relative" style="height: 100vh; overflow:hidden;">
				<img class="images position-absolute main3_img" src="./imgs/main3.gif" />
			</div>

			<div
				class="row d-flex align-items-center w-100 justify-content-between">
				<div class="left_side_body_container position-relative col-md-auto w-50"
					style="height: 70vh; overflow:hidden;">
					<img class="images position-absolute main4_img border border-black" src="./imgs/main4.png" />
				</div>
				<div class="right_side_body_container col-md-auto w-50">
					<div class="right_text text-end">
						<h3 class="fw-bold">라는 망상을 한 김아무개씨였다</h3>
						<p class="f-14">김아무개씨가 정신을 차린 곳은 백화점이였다.</p>
						<div class="short_line"></div>
						<i class="fa-solid fa-quote-left"></i>
						<p class="m-0">
							뭐야? 백화점이잖아? 일단 이 백화<br /> 점에서 탈출하고 생각하자!
						</p>
						<i class="fa-solid fa-quote-right"></i>
					</div>
				</div>
			</div>


		</section>

		<!--파이널바디 섹션-->
		<section id="final_body">
			<div class="final_body_container position-absolute w-100 h-100"
				style="left: 0; top: 0;">
				<div
					class=" d-flex justify-content-center align-items-center w-100 h-100">
					<a href="<%= request.getContextPath()%>/game/mainGame.jsp">Start!</a>
				</div>
			</div>
			<div class="final_img vh-100" >
				<img class="images" src="./imgs/main5.png" />
			</div>
		</section>

		<!--바닥글-->
		<footer>
			<div class="container w-100 h-100">
				<div
					class="row  d-flex align-items-center justify-content-between w-100 h-100">
					<div class="footer_text col-md-auto">
						<p class="fw-bold">양영디지털고등학교 2022 응용프로그램 실습 프로젝트</p>
						<p class="f-14 m-0">
							<i class="fa-solid fa-location-dot" style="margin-right: 10px;"></i>경기도
							성남시 분당구 불정로386번길 35
						</p>
						<p class="f-14 m-0">
							<i class="fa-solid fa-phone" style="margin-right: 10px;"></i>031-778-2300
						</p>
						<p class="f-14 m-0">Copyrightⓒ2022 All rights reserved.
							Software development department 2nd year 2nd class 2nd team.</p>
					</div>
					<a href="./index.jsp" class="text-white col-md-auto"> <img class="logoStart" src="./imgs/logo.png" width="100"
							alt="LOGO" />
					</a>
				</div>
			</div>
		</footer>
	</div>
</body>

</html>