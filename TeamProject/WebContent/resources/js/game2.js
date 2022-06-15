$(() => {

    const EVENT1 = $('.event1'); //이벤트 1버튼
    const EVENT2 = $('.event2'); //이벤트 2버튼
    const EVENT3 = $('.event3'); //이벤트 3버튼
    const EVENT = $('.event'); //이벤트들
    const SMALL_EVENT = $('.small_event'); //이벤트 속 이벤트1
    const SMALL_EVENT1 = $('.small_event1'); //이벤트 속 이벤트1
    const SMALL_EVENT2 = $('.small_event2'); //이벤트 속 이벤트1
    const SMALL_EVENT3 = $('.small_event3'); //이벤트 속 이벤트1
    const BACK_IMG = $('.back_img'); //뒷배경
    const LEFT_ARROW = $('.arrow_left'); //왼쪽 화살표
    const RIGHT_ARROW = $('.arrow_right'); //오른쪽 화살표
    const DOWN_ARROW = $('.arrow_bottom'); //아래쪽 화살표
    const ARROWS = $('.arrow'); //화살표들
    const ITEMS = $('.items'); // 아이템창
    const CHOICE_BOX = $('.choice_box'); //선택지 박스
    const ANSWER_BOX = $('.answer_box'); // 정답 박스
    const ANSWER_BTN = $('.answer_btn'); //정답 버튼
    const CHOICE1 = $('.choice1'); //선택지1
    const CHOICE2 = $('.choice2'); //선택지2
    const CHOICE3 = $('.choice3'); //선택지3
    let floor = "floor2"; //기본 설정(층)
    let room = "clothingStore"; //기본 설정(방)
    let item = []; //아이템 
    let itemVal = []; //아이템 중복 제거 값
    let eventBool = false; //이벤트 중인지 방안인지 확인 용도
    let eventNum = 0; //몇번째 버튼 눌렀는지 확인 용도
    let smallEventNum = 0; //몇번째 작은버튼 눌렀는지 확인 용도
    let answerText = false; //정답박스 존재 여부
    let answer = "";// 유저가 쓴 정답
    let numberAnswer = 1; // 답 번호
    let numberChoice = 1; // 선택지 번호
    let g

    //클릭 이벤트1 이벤트
    EVENT1.click(function () {
        eventNum = 1;
        roomEvent();

    });
    //클릭 이벤트2 이벤트
    EVENT2.click(function () {
        eventNum = 2;
        roomEvent();
    });
    //클릭 이벤트3 이벤트
    EVENT3.click(function () {
        eventNum = 3;
        roomEvent();
    });
    SMALL_EVENT1.click(function () {
        smallEventNum = 1;
        roomEvent();
    });
    //클릭 이벤트2 이벤트
    SMALL_EVENT2.click(function () {
        smallEventNum = 2;
        roomEvent();
    });
    //클릭 이벤트3 이벤트
    SMALL_EVENT3.click(function () {
        smallEventNum = 3;
        roomEvent();
    });


    // 텍스트 박스 
    let firstChat = true; //첫번째 텍스트
    let text = []; // 텍스트 배열
    let bgimg = ""; //뒷배경
    const TEXTBOX = $(".text_box"); // 텍스트 박스
    //텍스트 박스 눌렀을때
    TEXTBOX.click(() => {
        if (!answerText) {
            nextChat();
        }
    });
    //텍스트 추가하기
    function textAdd(msg, type) {
        console.log(msg);
        if (!msg) {
            console.log("메세지 오류!");
            return;
        }
        if (firstChat) {
            TEXTBOX.show();
            $(".text_box h2").text(msg);
            firstChat = false;
        } else {
            if (type) {
                text.push({});
                text[text.length - 1][type] = msg;
            } else {
                text.push({ "msg": msg });
            }
        }
    }
    //다음 텍스트로 넘기기
    function nextChat() {
        if (!text.length) {
            TEXTBOX.hide();
            firstChat = true;
        } else {
            TEXTBOX.show();
            console.log(text[0].msg)
            if (Object.keys(text[0]) == "msg") {
                $(".text_box h2").text(text[0].msg);
                text.splice(0, 1);
            } else if (Object.keys(text[0]) == "event") {
                if (text[0].event == "choice") {
                    CHOICE_BOX.fadeIn(200);
                } else if (text[0].turnEvent == "bgimg") {
                    BACK_IMG.attr('src', `./imgs/${floor}/${bgimg}`);
                } else if (text[0].turnEvent == "bottom") {
                    BACK_IMG.css({ 'bottom': '0' });
                } else if (text[0].turnEvent == "show") {
                    DOWN_ARROW.show();
                } 
                text.splice(0, 1);
                nextChat();

            } else if (Object.keys(text[0]) == "turnEvent") {
                if (text[0].turnEvent == "answer") {
                    answerText = true;
                    ANSWER_BOX.show();
                    TEXTBOX.find('h2').hide();
                } 
                text.splice(0, 1);
            }
        }
    }


    //층과 방 구별 하고 여러 클릭 이벤트 들어있는 함수
    roomEvent();
    ANSWER_BOX.hide();
    function roomEvent() {

        //층 구별
        if (floor == "floor2") {
            //방 구별
            if (room == "clothingStore") {
                EVENT1.css({ 'left': '5%', 'top': '40%', 'width': '20%', 'height': '20%' });
                EVENT2.css({ 'left': '76%', 'top': '43%', 'width': '10%', 'height': '10%' });
                EVENT3.css({ 'left': '30%', 'top': '60%', 'width': '20%', 'height': '10%' });
                BACK_IMG.attr('src', './imgs/floor2/clothingStore1.jpg');
                ARROWS.hide();
                DOWN_ARROW.show();
                SMALL_EVENT.hide();

                if (eventNum == 1) { //이벤트1 클릭이벤트 /유성준
                    EVENT.hide();
                    SMALL_EVENT1.show();
                    SMALL_EVENT1.css({ 'left': '20%', 'top': '0', 'width': '40%', 'height': '80%' });
                    BACK_IMG.attr('src', './imgs/floor2/pettingRoom1.png');
                    if (smallEventNum == 1) {

                        if ($('.check > img').attr('alt') == '피팅룸열쇠') {
                            BACK_IMG.attr('src', './imgs/floor2/pettingRoom2.png');
                            itemAdd('유성준메이드');
                            SMALL_EVENT1.hide();
                            textAdd("오하요 오니짱~ 여고생 성준이 와요♥ ");
                            textAdd("유성준을 획득했다");
                        } else {
                            textAdd('피팅룸이 잠겨있다');
                        }
                        eventNum = 0;
                        smallEventNum = 0;
                    }
                    eventBool = true;
                } else if (eventNum == 2) { //이벤트2 클릭이벤트 /마네킹
                    SMALL_EVENT1.css({ 'left': '25%', 'top': '85%', 'width': '5%', 'height': '5%' });
                    EVENT.hide();
                    SMALL_EVENT1.show();
                    BACK_IMG.attr('src', './imgs/floor2/mannequin.png');
                    if (smallEventNum == 1) {
                        itemAdd('피팅룸열쇠');
                        SMALL_EVENT1.hide();
                        textAdd('피팅룸 열쇠를 획득했다')
                        eventNum = 0;
                        smallEventNum = 0;
                    }
                    eventBool = true;
                } else if (eventNum == 3) { //이벤트3 클릭이벤트 /옷
                    SMALL_EVENT1.css({ 'left': '20%', 'top': '0', 'width': '40%', 'height': '80%' });
                    EVENT.hide();
                    SMALL_EVENT1.show();
                    BACK_IMG.attr('src', './imgs/floor2/clothingStore2.jpg');
                    if (smallEventNum == 1) {
                        textAdd('히힛 속았징? 암것도 없지롱~')
                        SMALL_EVENT1.hide();
                        eventNum = 0;
                        smallEventNum = 0;
                    }
                    eventBool = true;
                }
            } else if (room == "toilet") {
                EVENT1.css({ 'left': '0', 'top': '0', 'width': '15%', 'height': '100%' });
                EVENT2.css({ 'left': '25%', 'top': '0', 'width': '6%', 'height': '60%' });
                BACK_IMG.attr('src', './imgs/floor2/bathroom1.png');
                ARROWS.hide();
                BACK_IMG.css({ 'bottom': '0' });
                EVENT.show();
                EVENT3.hide();
                DOWN_ARROW.show();
                SMALL_EVENT.hide();
                if (eventNum == 1) { //이벤트1 클릭이벤트 /궁예
                    DOWN_ARROW.hide();
                    BACK_IMG.css({ 'bottom': 'auto' });
                    textAdd('누가 똥소리를 내었는가?');
                    textAdd('나는 마음이 넓으니 휴지를 주겠다');
                    EVENT.hide();
                    SMALL_EVENT.show();
                    SMALL_EVENT1.css({ 'left': '29%', 'top': '50%', 'width': '5%', 'height': '13%' });
                    SMALL_EVENT2.css({ 'left': '57%', 'top': '55%', 'width': '6%', 'height': '13%' });
                    SMALL_EVENT3.css({ 'left': '80%', 'top': '47%', 'width': '20%', 'height': '50%' });
                    BACK_IMG.attr('src', './imgs/floor2/bathroom2.png');
                    if (smallEventNum == 1) { //파랑휴지
                        text.splice(0);
                        SMALL_EVENT.hide();
                        textAdd('이런 배응망덕한!!');
                        textAdd('파랑휴지를 고르다니!!');
                        textAdd('죽어라!!');
                        textAdd("bottom", "event");
                        ending('die');
                        eventNum = 0;
                        smallEventNum = 0;
                    }
                    else if (smallEventNum == 2) {//빨강휴지
                        text.splice(0);
                        SMALL_EVENT.hide();
                        textAdd('이런 배응망덕한!!');
                        textAdd('빨강휴지를 고르다니!!');
                        textAdd('죽어라!!');
                        textAdd("bottom", "event");
                        ending('die');
                        eventNum = 0;
                        smallEventNum = 0;
                    }
                    else if (smallEventNum == 3) {//흰휴지
                        text.splice(0);
                        SMALL_EVENT.hide();
                        textAdd('그럼그럼 역시 휴지는 흰휴지지');
                        textAdd('사실 이거 안줄거라네 ㅋ');
                        textAdd("bottom", "event");
                        textAdd('show', 'event');
                        eventNum = 0;
                        smallEventNum = 0;
                    }
                    eventBool = true;
                } else if (eventNum == 2) { //이벤트2 클릭이벤트 /  무야호
                    DOWN_ARROW.hide();
                    BACK_IMG.css({ 'bottom': 'auto' });
                    EVENT.hide();
                    SMALL_EVENT.show();
                    SMALL_EVENT3.hide();
                    eventBool = true;
                    textAdd('거기 지나가던 당신');
                    textAdd('어느 것이 당신의 것이지?');
                    SMALL_EVENT1.css({ 'left': '20%', 'top': '50%', 'width': '10%', 'height': '13%' });
                    SMALL_EVENT2.css({ 'left': '65%', 'top': '55%', 'width': '10%', 'height': '13%' });
                    BACK_IMG.attr('src', './imgs/floor2/bathroom3.png');
                    if (smallEventNum == 1) { // 금
                        text.splice(0);
                        SMALL_EVENT.hide();
                        textAdd('오! 그렇군');
                        textAdd('잘가시게나');
                        textAdd('도끼를 획득했다');
                        textAdd("bottom", "event");
                        textAdd("show", "event");
                        itemAdd('도끼');
                        eventNum = 0;
                        smallEventNum = 0;
                    }
                    else if (smallEventNum == 2) { //은
                        text.splice(0);
                        SMALL_EVENT.hide();
                        BACK_IMG.attr('src', './imgs/floor2/bathroom4.png');
                        textAdd('까꿍~~!!');
                        textAdd('또 왔어요~~~');
                        textAdd('도망가지 말아요~~');
                        textAdd("bottom", "event");
                        textAdd("show", "event");
                        eventNum = 0;
                        smallEventNum = 0;
                    }
                }
            } else if (room == "floor2Hall") {
                BACK_IMG.css({ 'bottom': '0', 'width': '100%', 'left': 'auto', 'transform': 'translate(0, 0)' });
                BACK_IMG.attr('src', './imgs/floor2/clothingStoreHallway.png');
                EVENT1.css({ 'left': '20%', 'top': '10%', 'width': '60%', 'height': '80%' });
                ARROWS.show();
                DOWN_ARROW.hide();
                EVENT.hide();
                EVENT1.show();
                SMALL_EVENT.hide();
                //이벤트1 클릭 이벤트
                if (eventNum == 1) {
                    EVENT1.css({ 'left': '5%', 'top': '40%', 'width': '20%', 'height': '20%' });
                    EVENT2.css({ 'left': '76%', 'top': '43%', 'width': '10%', 'height': '10%' });
                    EVENT3.css({ 'left': '30%', 'top': '60%', 'width': '20%', 'height': '10%' });
                    room = "clothingStore";
                    BACK_IMG.attr('src', './imgs/floor2/clothingStore1.jpg');
                    ARROWS.hide();
                    DOWN_ARROW.show();
                    SMALL_EVENT.hide();
                    EVENT.show();
                    eventNum = 0;
                }
            } else if (room == "floor2Hall2") {
                BACK_IMG.attr('src', './imgs/floor2/bathroomHallway.png');
                EVENT1.css({ 'left': '10%', 'top': '10%', 'width': '80%', 'height': '80%' });
                ARROWS.hide();
                LEFT_ARROW.show();
                EVENT.hide();
                EVENT1.show();
                SMALL_EVENT.hide();
                //이벤트1 클릭 이벤트
                if (eventNum == 1) {
                    if ($('.check > img').attr('alt') == '유성준메이드') {
                        textAdd('화장실이 열렸다')
                        room = "toilet";
                        BACK_IMG.attr('src', './imgs/floor2/bathroom1.png');
                        ARROWS.hide();
                        DOWN_ARROW.show();
                        SMALL_EVENT.hide();
                        EVENT.show();
                        EVENT3.hide();
                        EVENT1.css({ 'left': '0', 'top': '0', 'width': '15%', 'height': '100%' });
                        EVENT2.css({ 'left': '25%', 'top': '0', 'width': '6%', 'height': '60%' });
                    } else {
                        textAdd('화장실이 잠겨있다')
                    }
                    eventNum = 0;
                }
            } else if (room == "floor2Stair") {
                BACK_IMG.attr('src', './imgs/floor2/2fEscalator.jpg');
                EVENT1.css({ 'left': '50%', 'top': '25%', 'width': '15%', 'height': '60%' });
                BACK_IMG.css({ 'bottom': 'auto', 'width': '40%', 'left': '50%', 'transform': 'translate(-50%, 0)' });
                ARROWS.hide();
                RIGHT_ARROW.show();
                EVENT.hide();
                EVENT1.show();
                SMALL_EVENT.hide();
                //이벤트1 클릭 이벤트
                if (eventNum == 1) {
                    floor = "floor1";
                    room = "floor1Stair";
                    BACK_IMG.attr('src', './imgs/floor1/1fEscalator.jpg');
                    EVENT1.css({ 'left': '35%', 'top': '25%', 'width': '15%', 'height': '60%' });
                    EVENT2.css({ 'left': '50%', 'top': '25%', 'width': '15%', 'height': '60%' });
                    EVENT.hide();
                    EVENT1.show();
                    EVENT2.show();
                    SMALL_EVENT.hide();
                    eventNum = 0;

                }
            }

        } else if (floor == "floor1") {
            if (room == "floor1Stair") {
                BACK_IMG.css({ 'bottom': 'auto', 'width': '40%', 'left': '50%', 'transform': 'translate(-50%, 0)' });
                BACK_IMG.attr('src', './imgs/floor1/1fEscalator.jpg');
                EVENT1.css({ 'left': '35%', 'top': '25%', 'width': '15%', 'height': '60%' });
                EVENT2.css({ 'left': '50%', 'top': '25%', 'width': '15%', 'height': '60%' });
                ARROWS.hide();
                RIGHT_ARROW.show();
                EVENT.hide();
                EVENT1.show();
                EVENT2.show();
                SMALL_EVENT.hide();
                //이벤트1 클릭 이벤트 / 2층
                if (eventNum == 1) {
                    BACK_IMG.attr('src', './imgs/floor2/2fEscalator.jpg');
                    EVENT1.css({ 'left': '50%', 'top': '25%', 'width': '15%', 'height': '60%' });
                    floor = "floor2";
                    room = "floor2Stair";
                    EVENT.hide();
                    EVENT1.show();
                    eventNum = 0;
                } else if (eventNum == 2) { //이벤트2 클릭 이벤트 / B1층
                    BACK_IMG.attr('src', './imgs/B1/b1Escalator.jpg');
                    EVENT1.css({ 'left': '35%', 'top': '25%', 'width': '15%', 'height': '60%' });
                    floor = "B1";
                    room = "B1Stair";
                    EVENT.hide();
                    EVENT1.show();
                    eventNum = 0;
                }
            } else if (room == "floor1Hall") {
                BACK_IMG.css({ 'bottom': '0', 'width': '100%', 'left': 'auto', 'transform': 'translate(0, 0)' });
                BACK_IMG.attr('src', './imgs/floor1/bookStoreHallway.jpg');
                EVENT1.css({ 'left': '15%', 'top': '20%', 'width': '50%', 'height': '60%' });
                ARROWS.show();
                DOWN_ARROW.hide();
                EVENT.hide();
                EVENT1.show();
                SMALL_EVENT.hide();
                //이벤트1 클릭 이벤트 / 서점
                if (eventNum == 1) {
                    if ($('.check > img').attr('alt') == '도끼') {
                        textAdd('서점이 열렸다');
                        room = "bookStore";
                        BACK_IMG.attr('src', './imgs/floor1/bookStore1.png');
                        EVENT1.css({ 'left': '60%', 'top': '25%', 'width': '15%', 'height': '35%' });
                        EVENT2.css({ 'left': '0', 'top': '20%', 'width': '50%', 'height': '70%' });
                        SMALL_EVENT.hide();
                        EVENT.show();
                        EVENT3.hide();
                        ARROWS.hide();
                        DOWN_ARROW.show();
                    } else {
                        BACK_IMG.attr('src', './imgs/floor1/cloggedBookStore.png');
                        SMALL_EVENT.hide();
                        EVENT1.hide();
                        textAdd('서점이 잠겨있다');
                    }
                    eventNum = 0;
                }
            } else if (room == "floor1Hall2") {
                BACK_IMG.attr('src', './imgs/floor1/cinemaHallway.jpg');
                BACK_IMG.css({ 'top': 'auto' });
                EVENT1.css({ 'left': '30%', 'top': '20%', 'width': '50%', 'height': '60%' });
                ARROWS.hide();
                LEFT_ARROW.show();
                EVENT.hide();
                EVENT1.show();
                SMALL_EVENT.hide();
                //이벤트1 클릭 이벤트 / 영화관
                if (eventNum == 1) {
                    if ($('.check > img').attr('alt') == '영화관열쇠') {
                        textAdd('영화관이 열렸다');
                        room = "theater";
                        BACK_IMG.css({ 'top': '-30%' });
                        EVENT1.css({ 'left': '13%', 'top': '0', 'width': '70%', 'height': '60%' });
                        EVENT2.css({ 'left': '85%', 'top': '50%', 'width': '10%', 'height': '40%' });
                        BACK_IMG.attr('src', './imgs/floor1/cinema1.jpg');
                        ARROWS.hide();
                        DOWN_ARROW.show();
                        SMALL_EVENT.hide();
                        EVENT.show();
                        EVENT3.hide();
                    } else {
                        textAdd('영화관이 잠겨있다');
                    }
                    eventNum = 0;
                }
            } else if (room == "bookStore") {
                EVENT1.css({ 'left': '60%', 'top': '25%', 'width': '15%', 'height': '35%' });
                EVENT2.css({ 'left': '0', 'top': '20%', 'width': '50%', 'height': '70%' });
                BACK_IMG.attr('src', './imgs/floor1/bookStore1.png');
                EVENT.show();
                EVENT3.hide();
                ARROWS.hide();
                DOWN_ARROW.show();
                SMALL_EVENT.hide();
                if (eventNum == 1) { //이벤트1 클릭이벤트 /최서윤
                    EVENT.hide();
                    SMALL_EVENT1.hide();
                    BACK_IMG.attr('src', './imgs/floor1/bookStore2.png');
                    if (numberChoice >= 3) {
                        textAdd('왜?? 내가 그렇게 까지 보고 싶어?? 아잉~~');
                        DOWN_ARROW.show();
                    } else {
                        DOWN_ARROW.hide();
                        CHOICE1.find('h2').text('뺨 때리기');
                        CHOICE2.find('h2').text('내 아를 낳아도!!!!!');
                        CHOICE3.find('h2').text('나도 좋아!!!');
                        textAdd('책을 넘기면서 그윽하게 쳐다보는 최서윤이 보인다')
                        textAdd("이제야 여길 보는구나? 나의 작은 아기 고양이")
                        textAdd("계속 기다려왔다고!! 얼마만의 사람인지!!")
                        textAdd("choice", "event");
                    }
                    eventNum = 0;
                    eventBool = true;
                } else if (eventNum == 2) { //이벤트2 클릭이벤트 /스핑크스
                    BACK_IMG.css({ 'bottom': 'auto' });
                    EVENT.hide();
                    SMALL_EVENT1.hide();
                    BACK_IMG.attr('src', './imgs/floor1/maDongSeok1.png');
                    if (numberAnswer >= 4) {
                        textAdd('장사 더 안합니다');
                        BACK_IMG.css({ 'bottom': '0' });
                    } else {
                        DOWN_ARROW.hide();
                        textAdd('어리석군 인간이여')
                        textAdd('내가 어리석은 그대를 위해')
                        textAdd('문제를 준비했다네')
                        textAdd('첫번째는 쉽게 가겠어')
                        textAdd('왕이 넘어지면?')
                        textAdd("answer", "turnEvent");
                    }
                    eventNum = 0;
                    eventBool = true;
                }
            } else if (room == "theater") {
                BACK_IMG.css({ 'top': '-30%' });
                EVENT1.css({ 'left': '13%', 'top': '0', 'width': '70%', 'height': '60%' });
                EVENT2.css({ 'left': '85%', 'top': '50%', 'width': '10%', 'height': '40%' });
                BACK_IMG.attr('src', './imgs/floor1/cinema1.jpg');
                EVENT.show();
                EVENT3.hide();
                ARROWS.hide();
                DOWN_ARROW.show();
                SMALL_EVENT.hide();

                if (eventNum == 1) { //이벤트1 클릭이벤트 / 박건영 귀신
                    SMALL_EVENT1.css({ 'left': '40%', 'top': '0', 'width': '20%', 'height': '60%' });
                    BACK_IMG.css({ 'top': '-20%' });
                    DOWN_ARROW.hide();
                    EVENT.hide();
                    SMALL_EVENT1.show();
                    BACK_IMG.attr('src', './imgs/floor1/cinema2.png');
                    if (smallEventNum == 1) {
                        BACK_IMG.attr('src', './imgs/floor1/cinema3.png');
                        if ($('.check > img').attr('alt') == '포스터') {
                            itemAdd('마트열쇠');
                            SMALL_EVENT1.hide();
                            DOWN_ARROW.show();
                            textAdd('악 이게 뭐야')
                            textAdd('내 눈!!!!!!!')
                            textAdd('마트열쇠를 획득했다')
                        } else {
                            textAdd('나는 세상에서 제일 강한 귀신이지')
                            DOWN_ARROW.show();
                        }
                        eventNum = 0;
                    }
                    eventBool = true;
                } else if (eventNum == 2) { //이벤트2 클릭이벤트 / 엘사포스터
                    SMALL_EVENT1.css({ 'left': '53%', 'top': '0', 'width': '40%', 'height': '90%' });
                    EVENT.hide();
                    SMALL_EVENT1.show();
                    BACK_IMG.attr('src', './imgs/floor1/b.png');
                    DOWN_ARROW.show();
                    if (smallEventNum == 1) {
                        BACK_IMG.attr('src', './imgs/floor1/c.png');
                        itemAdd('포스터');
                        textAdd('포스터를 획득했다')
                        SMALL_EVENT1.hide();
                        eventNum = 0;
                    }
                    eventBool = true;
                }
            }


        } else if (floor == "B1") {
            if (room == "B1Stair") {
                BACK_IMG.css({ 'bottom': 'auto', 'width': '40%', 'left': '50%', 'transform': 'translate(-50%, 0)' });
                BACK_IMG.attr('src', './imgs/B1/b1Escalator.jpg');
                EVENT1.css({ 'left': '35%', 'top': '25%', 'width': '15%', 'height': '60%' });
                ARROWS.hide();
                RIGHT_ARROW.show();
                EVENT.hide();
                EVENT1.show();
                SMALL_EVENT.hide();
                //이벤트1 클릭 이벤트
                if (eventNum == 1) {
                    floor = "floor1";
                    room = "floor1Stair";
                    BACK_IMG.attr('src', './imgs/floor1/1fEscalator.jpg');
                    EVENT1.css({ 'left': '35%', 'top': '25%', 'width': '15%', 'height': '60%' });
                    EVENT2.css({ 'left': '50%', 'top': '25%', 'width': '15%', 'height': '60%' });
                    EVENT.hide();
                    EVENT1.show();
                    EVENT2.show();
                    eventNum = 0;
                }
            } else if (room == "B1Hall") {
                BACK_IMG.css({ 'bottom': '0', 'width': '100%', 'left': 'auto', 'transform': 'translate(0, 0)' });
                BACK_IMG.attr('src', './imgs/B1/martHallway.jpg');
                EVENT1.css({ 'left': '35%', 'top': '25%', 'width': '50%', 'height': '60%' });
                ARROWS.show();
                DOWN_ARROW.hide();
                EVENT.hide();
                EVENT1.show();
                SMALL_EVENT.hide();
                //이벤트1 클릭 이벤트
                if (eventNum == 1) {
                    room = "mart";
                    BACK_IMG.attr('src', './imgs/B1/mart1.jpg');
                    SMALL_EVENT.hide();
                    EVENT.show();
                    EVENT3.hide();
                    ARROWS.hide();
                    DOWN_ARROW.show();
                    eventNum = 0;
                }
            } else if (room == "B1Hall2") {
                BACK_IMG.attr('src', './imgs/B1/escapeDoor1.png');
                // EVENT1.css({ 'left': 0, 'top': 0 });
                ARROWS.show();
                RIGHT_ARROW.hide();
                DOWN_ARROW.hide();
                EVENT.hide();
                EVENT1.show();
                SMALL_EVENT.hide();
                //이벤트1 클릭 이벤트
                if (eventNum == 1) {
                    BACK_IMG.attr('src', './imgs/B1/escapeDoor2.png');
                    if ($('.check > img').attr('alt') == '이모') {
                        ending("imo");
                    } else {
                        ending("hospital");
                    }
                }
            } else if (room == "mart") {
                //   EVENT1.css({ 'left': 0, 'top': 0 });
                //   EVENT2.css({ 'left': 0, 'top': 0 });
                BACK_IMG.attr('src', './imgs/B1/mart1.jpg');
                EVENT.show();
                EVENT3.hide();
                ARROWS.hide();
                DOWN_ARROW.show();
                SMALL_EVENT.hide();

                if (eventNum == 1) { //이벤트1 클릭이벤트 / 황유하 김동건 
                    EVENT.hide();
                    SMALL_EVENT1.show();
                    BACK_IMG.attr('src', './imgs/B1/kimHwang4.png');
                    eventBool = true;
                    eventNum = 0;
                    if (smallEventNum == 1) {
                        if ($('.check > img').attr('alt') == '유성준오리') {
                            BACK_IMG.attr('src', './imgs/B1/kimHwang4-2.png');
                            itemAdd('이모');
                            SMALL_EVENT1.hide();
                        }
                    }
                } else if (eventNum == 2) { //이벤트2 클릭이벤트 / 유성준 침대
                    EVENT.hide();
                    SMALL_EVENT1.show();
                    BACK_IMG.attr('src', './imgs/B1/hidingYSJ.png');
                    eventBool = true;
                    eventNum = 0;
                    if (smallEventNum == 1) {
                        BACK_IMG.attr('src', './imgs/B1/yooSeongJun6.png');
                        SMALL_EVENT1.hide();
                        itemAdd('유성준오리');
                    }
                }
            }
        }
    }
    //아이템 추가 함수
    function itemAdd(itemName) {
        item.push(itemName);
        ITEMS.empty();
        // 중복제거
        $.each(item, function (i, value) {
            if (itemVal.indexOf(value) == -1) itemVal.push(value);
        });
        //아이템 추가
        $.each(itemVal, function (i, value) {
            let itemHTML;
            itemHTML = `
            <div class="item mx-1">
            <img src="./imgs/items/${value}.png" alt="${value}">
            </div>`;
            if (i == 0) {
                itemHTML = `
                <div class="check mx-1">
                <img src="./imgs/items/${value}.png" alt="${value}">
                </div>`;
            }
            $('.items').append(itemHTML);
        });
    }
    //대답할때 버튼 클릭시 이벤트
    ANSWER_BTN.click(function () {
        answer = $('.answer').val();
        if ($.trim(answer) == "") {
            alert("정답을 입력해주세요");
        } else if (answer == "킹콩" && numberAnswer == 1) {
            answerText = false;
            ANSWER_BOX.hide();
            TEXTBOX.find('h2').show();
            textAdd('칫 정답이다');
            textAdd('다음문제는 쉽지 않을꺼야');
            textAdd('금은 금인데 도둑고양이에게 가장 어울리는 금은?')
            numberAnswer++;
            $('.answer').val("");
            textAdd("answer", "turnEvent");
        } else if (answer == "야금야금" && numberAnswer == 2) {
            answerText = false;
            ANSWER_BOX.hide();
            TEXTBOX.find('h2').show();
            textAdd('흐음 정답이다');
            textAdd('이번 문제는 진짜 어려울꺼야');
            textAdd('헤어나올 수 없는 곳은?')
            numberAnswer++;
            $('.answer').val("");
            textAdd("answer", "turnEvent");
        } else if (answer == "대머리" && numberAnswer == 3) {
            answerText = false;
            ANSWER_BOX.hide();
            TEXTBOX.find('h2').show();
            textAdd('젠장 정답이다');
            textAdd('이제 열쇠를 주겠다');
            itemAdd('영화관열쇠');
            BACK_IMG.css({ 'bottom': '0' });
            numberAnswer++;
            DOWN_ARROW.show();
            textAdd("show", "event");
        } else {
            answerText = false;
            ANSWER_BOX.hide();
            TEXTBOX.find('h2').show();
            BACK_IMG.css({ 'bottom': '0' });
            textAdd('낄낄낄');
            textAdd('그럴줄알았다');
            textAdd('진실의 방으로');
            ending("die");
        }
    });
    //선택지1을 골랐을때 이벤트
    CHOICE1.click(function () {
        CHOICE_BOX.fadeOut(0);
        if (numberChoice == 1) {
            textAdd('날 때린여자는 너가 처음이야');
            textAdd('심심한데 우리 뽑뽀나 할까??');
            textAdd('움~~~~~~~~쪽!');
            ending("die");
        } else if (numberChoice == 2) {
            textAdd('이걸 받아주네 ㄷㄷ');
            textAdd('와 찐광기다 ㄷㄷ');
            textAdd('튀튀');
            textAdd("show", "event");
            DOWN_ARROW.show();
            numberChoice++;
        }
    });
    //선택지2을 골랐을때 이벤트
    CHOICE2.click(function () {
        CHOICE_BOX.fadeOut(0);
        if (numberChoice == 1) {
            CHOICE1.find('h2').text('좋아요♥');
            CHOICE2.find('h2').text('좋아요~');
            CHOICE3.find('h2').text('좋아요!!');
            textAdd('어멋 도발적이야!!!');
            textAdd('내 사랑을 받아줘 아잉♥');
            textAdd("choice", "event");
            numberChoice++;
        } else if (numberChoice == 2) {
            textAdd('왤케 영혼이 없어?');
            textAdd('또 나만 진심이였지');
            textAdd('죽어랏!');
            ending("die");
        }
    });
    //선택지3을 골랐을때 이벤트
    CHOICE3.click(function () {
        CHOICE_BOX.fadeOut(0);
        if (numberChoice == 1) {
            textAdd('밀당 없는 여자 매력없어!!!');
            textAdd('나는 싫어!!!');
            ending("die");
        } else if (numberChoice == 2) {
            textAdd('나보다 발랄한 여자 매력없어!');
            textAdd('내가 짱이란 말야');
            textAdd('죽어랏!');
            ending("die");
        }
    });

    //아래쪽 버튼 이벤트
    DOWN_ARROW.click(function () {
        console.log(room)
        console.log(eventBool)
        downBool();
        roomEvent();
    });
    function downEvent(back_img) {
        BACK_IMG.attr('src', back_img);
        EVENT.show();
        SMALL_EVENT.hide();
        eventBool = false;
    }
    //아래쪽 여부 체크 
    function downBool() {
        if (eventBool) {
            if (room == "clothingStore") {
                downEvent('./imgs/floor2/clothingStore1.jpg');
            } else if (room == "toilet") {
                downEvent('./imgs/floor2/bathroom1.png');
            } else if (room == "bookStore") {
                downEvent('./imgs/floor1/bookStore1.png');
            } else if (room == "theater") {
                downEvent('./imgs/floor1/cinema1.jpg');
            } else if (room == "mart") {
                downEvent('./imgs/B1/mart1.jpg');
            }
        } else {
            if (room == "clothingStore") {
                room = "floor2Hall";
            } else if (room == "toilet") {
                room = "floor2Hall2";
            } else if (room == "bookStore") {
                room = "floor1Hall";
            } else if (room == "theater") {
                room = "floor1Hall2";
            } else if (room == "mart") {
                room = "B1Hall";
            }
        }
    }
    //왼쪽 오른쪽 클릭 이벤트
    RIGHT_ARROW.click(function () {
        rightEvent();
        roomEvent();
    });
    LEFT_ARROW.click(function () {
        leftEvent();
        roomEvent();
    });
    //오른쪽 화살표 이벤트
    function rightEvent() {
        if (room == "floor2Hall") {
            room = "floor2Hall2";
        } else if (room == "floor2Stair") {
            room = "floor2Hall";
        } else if (room == "floor1Hall") {
            room = "floor1Hall2";
        } else if (room == "floor1Stair") {
            room = "floor1Hall";
        } else if (room == "B1Stair") {
            room = "B1Hall";
        } else if (room == "B1Hall") {
            room = "B1Hall2";
        }
    }
    //왼쪽 화살표 이벤트
    function leftEvent() {
        if (room == "floor2Hall2") {
            room = "floor2Hall";
        } else if (room == "floor2Hall") {
            room = "floor2Stair";
        } else if (room == "floor1Hall2") {
            room = "floor1Hall";
        } else if (room == "floor1Hall") {
            room = "floor1Stair";
        } else if (room == "B1Hall") {
            room = "B1Stair";
        } else if (room == "B1Hall2") {
            room = "B1Hall";
        }
    }
    //엔딩
    function ending(endingName) {
        EVENT.hide();
        SMALL_EVENT.hide();
        ARROWS.hide();
        ITEMS.hide();
        floor = "ending";
        if (endingName == "die") {
            textAdd('김아무개씨가 죽었다');
            textAdd('죽음 엔딩');
            bgimg = "dieEnding.png";
            textAdd("bgimg", "event");
        } else if (endingName == "imo") {
            textAdd('김아무개씨가 죽었다');
            textAdd('죽음 엔딩');
            bgimg = "dieEnding.png";
            textAdd("bgimg", "event");
        } else if (endingName == "hospital") {
            textAdd('김아무개씨가 죽었다');
            textAdd('죽음 엔딩');
            bgimg = "hospital.png";
            textAdd("bgimg", "event");
            textAdd('김아무개씨가 죽었다');
            textAdd('죽음 엔딩');
            bgimg = "hospital.png";
            textAdd("bgimg", "event");
        }
    }
    //템창 나왔다가 들어갔다가 하는 함수들
    let bool = false;
    $(document).on('click', '.check', function () {
        $('.check').addClass('item');
        $('.check').removeClass('check');
        $(this).addClass('check');
        $(this).removeClass('item');
        toggleCheck();
    });
    $(document).on('click', '.item', function () {
        $('.check').addClass('item');
        $('.check').removeClass('check');
        $(this).addClass('check');
        $(this).removeClass('item');
        toggleCheck();
    })
    //check가 되있다면 안되게 안되있다면 되게 바꾸는 함수
    function toggleCheck() {
        if (!bool) {
            $('.item').show();
            bool = true;
        } else {
            $('.item').hide();
            bool = false;
        }
    }

})



