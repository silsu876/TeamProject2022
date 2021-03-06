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
   <div class="wrapper position-relative" style="height: 100vh; width: 100vw; overflow: hidden; background-color: rgb(114, 114, 114);">
        <!-- 배경 -->
        <img src="" class="back_img position-absolute" alt="">
         <!-- 이벤트 -->
        <div class="event_box">
            <div class="event1 border-black position-absolute event" style="width: 200px; height: 200px; top:30%; left:10%"></div>
            <div class="event2 border-black position-absolute event" style="width: 200px; height: 200px; top:30%; left:40%"></div>
            <div class="event3 border-black position-absolute event" style="width: 200px; height: 200px; top:30%; left:80%"></div>
        </div>
	    <div class="small_event position-absolute small_event1" style="width: 200px; height: 200px; top:30%; left:10%"></div>
	    <div class="small_event position-absolute small_event2" style="width: 200px; height: 200px; top:30%; left:40%"></div>
	    <div class="small_event position-absolute small_event3" style="width: 200px; height: 200px; top:30%; left:80%"></div>
        <!-- 템창 -->
        <div class="items position-absolute" style="top: 0; left: 0;">
            <div class="check mx-1">
                <img src="" alt="">
            </div>
        </div>
        <!-- 말상자 -->
        <div class="text_box position-absolute">
            <div class="w-100 h-100 d-flex align-items-center justify-content-center">
                <h2 class="m-0 text-white">안은 생각보다 깨끗한데?</h2>
                <div class="answer_box">
                    <div class="d-flex align-items-center justify-content-center " style="width: 500px;">
                        <input type="text" name="" id="text" placeholder="여기에 정답을 써주세요"
                            class="form-control answer mx-1" maxlength="6"  autocomplete='off'>
                        <button class="btn btn-dark mx-1 answer_btn" style="white-space: nowrap;">작성 완료</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- 선택지 -->
        <div class="choice_box">
            <div class="choice choice1 border rounded border-black position-absolute d-flex align-items-center justify-content-center" style="top: 20%; left: 32%;">
                <h2>선택지1</h2>
            </div>
            <div class="choice choice2 border rounded border-black position-absolute d-flex align-items-center justify-content-center" style="top: 40%; left: 32%;">
                <h2>선택지2</h2>
            </div>
            <div class="choice choice3 border rounded border-black position-absolute d-flex align-items-center justify-content-center" style="top: 60%; left: 32%;">
                <h2>선택지3</h2>
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