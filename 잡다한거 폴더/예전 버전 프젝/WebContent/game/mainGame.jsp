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
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="<%= request.getContextPath()%>/resources/js/game.js"></script>
    <link rel="stylesheet" href="<%= request.getContextPath()%>/resources/css/style.css">
</head>
<body>
   <div class="wrapper">
        <!-- 배경 -->
        <img src="" alt="">
         <!-- 이벤트 -->
        <div class="event_box">
            <a href="" class="event1 border border-black position-absolute event" style="width: 200px; height: 200px; top:30%; left:10%"></a>
            <a href="" class="event2 border border-black position-absolute event" style="width: 200px; height: 200px; top:30%; left:40%"></a>
            <a href="" class="event3 border border-black position-absolute event" style="width: 200px; height: 200px; top:30%; left:80%"></a>
        </div>
	        <a href="small_event"></a>
        <!-- 템창 -->
        <div class="items position-absolute" style="top: 0; left: 0;">
            <div class="check mx-1">
                <img src="<%= request.getContextPath()%>/floor2/imgs/" alt="">
            </div>
            <div class="item mx-1">
                <img src="<%= request.getContextPath()%>/floor2/imgs/" alt="">
            </div>
            <div class="item mx-1">
                <img src="<%= request.getContextPath()%>/floor2/imgs/" alt="">
            </div>
            <div class="item mx-1">
                <img src="" alt="">
            </div>
        </div>
        <!-- 말상자 -->
        <div class="text_box position-absolute">
            <div class="w-100 h-100 d-flex align-items-center justify-content-center">
                <h2 class="m-0 text-white">여기에 글씨</h2>
            </div>
        </div>
        <!-- 화살표 -->
        <div class="arrow_left arrow">
            <i class="fa-solid fa-chevron-left"></i>
        </div>
        <div class="arrow_bottom arrow">
            <i class="fa-solid fa-chevron-down"></i>
        </div>
        <div class="arrow_right arrow">
            <i class="fa-solid fa-chevron-right"></i>
        </div>
    </div>
</body>
</html>