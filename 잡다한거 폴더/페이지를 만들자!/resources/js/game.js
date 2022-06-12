$(() => {

    const EVENT1 = $('.event1'); //이벤트 1버튼
    const EVENT2 = $('.event2'); //이벤트 2버튼
    const EVENT3 = $('.event3'); //이벤트 3버튼
    const EVENTS = $('.event'); //이벤트들
    const SMALL_EVENT = $('.small_event'); //이벤트 속 이벤트1
    const SMALL_EVENT1 = $('.small_event1'); //이벤트 속 이벤트1
    const SMALL_EVENT2 = $('.small_event2'); //이벤트 속 이벤트1
    const SMALL_EVENT3 = $('.small_event3'); //이벤트 속 이벤트1
    const BACK_IMG = $('.back_img'); //뒷배경
    const LEFT_ARROW = $('.arrow_left'); //왼쪽 화살표
    const RIGHT_ARROW = $('.arrow_right'); //오른쪽 화살표
    const DOWN_ARROW = $('.arrow_bottom'); //아래쪽 화살표
    const ARROWS = $('.arrow'); //화살표들
    const CHECK_ITEM = $('.check'); //아이템 check된 이미지
    const ITEMS = $('.items');
    let floor = "floor2"; //기본 설정(층)
    let room = "clothingStore"; //기본 설정(방)
    let event = ""; //기본 설정(이벤트)
    let item = []; //아이템 
    let itemVal = []; //아이템 중복 제거 값
    let eventBool = false; //이벤트 중인지 방안인지 확인 용도
    let eventNum = 0; //몇번째 버튼 눌렀는지 확인 용도
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

    //층과 방 구별 하고 여러 클릭 이벤트 들어있는 함수
    roomEvent();
    function roomEvent() {
        //층 구별
        if (floor == "floor2") {
            //방 구별
            if (room == "clothingStore") {
                //   EVENT1.css({ 'left': 0, 'top': 0 });
                //   EVENT2.css({ 'left': 0, 'top': 0 });
                //   EVENT3.css({ 'left': 0, 'top': 0 });
                BACK_IMG.attr('src', './imgs/2floor/옷.png');
                ARROWS.hide();
                DOWN_ARROW.show();
                SMALL_EVENT.hide();

                if (eventNum == 1) { //이벤트1 클릭이벤트
                    EVENTS.hide();
                    SMALL_EVENT1.show();
                    BACK_IMG.attr('src', './imgs/2floor/아이템.png');
                    eventBool = true;
                    eventNum = 0;
                    SMALL_EVENT1.click(function () {
                        BACK_IMG.attr('src', './imgs/2floor/a.png');
                        item.push('유성준');
                        itemAdd();
                    });
                } else if (eventNum == 2) { //이벤트2 클릭이벤트
                    EVENTS.hide();
                    SMALL_EVENT1.show();
                    BACK_IMG.attr('src', './imgs/2floor/a.png');
                    event = "마네킹";
                    eventBool = true;
                    eventNum = 0;
                    SMALL_EVENT1.click(function () {
                        BACK_IMG.attr('src', './imgs/2floor/a.png');
                        item.push('마네킹');
                        itemAdd();
                    });
                } else if (eventNum == 3) { //이벤트3 클릭이벤트
                    EVENTS.hide();
                    SMALL_EVENT1.show();
                    BACK_IMG.attr('src', './imgs/2floor/옷.png');
                    event = "옷";
                    eventBool = true;
                    eventNum = 0;
                    SMALL_EVENT1.click(function () {
                        BACK_IMG.attr('src', './imgs/2floor/a.png');
                        item.push('옷');
                        itemAdd();
                    });
                }
            } else if (room == "toilet") {
                //   EVENT1.css({ 'left': 0, 'top': 0 });
                //   EVENT2.css({ 'left': 0, 'top': 0 });
                //   EVENT3.css({ 'left': 0, 'top': 0 });
                BACK_IMG.attr('src', './imgs/2floor/화장실.jpg');
                ARROWS.hide();
                DOWN_ARROW.show();
                SMALL_EVENT.hide();
                EVENTS.show();
                if (eventNum == 1) { //이벤트1 클릭이벤트
                    EVENTS.hide();
                    SMALL_EVENT1.show();
                    BACK_IMG.attr('src', './imgs/2floor/아이템.png');
                    eventBool = true;
                    eventNum = 0;
                    SMALL_EVENT1.click(function () {
                        BACK_IMG.attr('src', './imgs/2floor/a.png');
                        item.push('유성준');
                        itemAdd();
                    });
                } else if (eventNum == 2) { //이벤트2 클릭이벤트
                    EVENTS.hide();
                    SMALL_EVENT1.show();
                    BACK_IMG.attr('src', './imgs/2floor/a.png');
                    event = "마네킹";
                    eventBool = true;
                    eventNum = 0;
                    SMALL_EVENT1.click(function () {
                        BACK_IMG.attr('src', './imgs/2floor/a.png');
                        item.push('마네킹');
                        itemAdd();
                    });
                } else if (eventNum == 3) { //이벤트3 클릭이벤트
                    EVENTS.hide();
                    SMALL_EVENT1.show();
                    BACK_IMG.attr('src', './imgs/2floor/옷.png');
                    event = "옷";
                    eventBool = true;
                    eventNum = 0;
                    SMALL_EVENT1.click(function () {
                        BACK_IMG.attr('src', './imgs/2floor/a.png');
                        item.push('옷');
                        itemAdd();
                    });
                }
            } else if (room == "floor2Hall") {
                BACK_IMG.attr('src', './imgs/2floor/밖1.png');
                // EVENT1.css({ 'left': 0, 'top': 0 });
                ARROWS.show();
                DOWN_ARROW.hide();
                EVENTS.hide();
                EVENT1.show();
                SMALL_EVENT.hide();
                //이벤트1 클릭 이벤트
                if (eventNum == 1) {
                    room = "clothingStore";
                    BACK_IMG.attr('src', './imgs/2floor/옷.png');
                    ARROWS.hide();
                    DOWN_ARROW.show();
                    SMALL_EVENT.hide();
                    EVENTS.show();
                    eventNum = 0;
                }
            } else if (room == "floor2Hall2") {
                BACK_IMG.attr('src', './imgs/2floor/밖2.png');
                // EVENT1.css({ 'left': 0, 'top': 0 });
                ARROWS.hide();
                LEFT_ARROW.show();
                EVENTS.hide();
                EVENT1.show();
                SMALL_EVENT.hide();
                //이벤트1 클릭 이벤트
                if (eventNum == 1) {
                    if ($('.check > img').attr('alt') == '유성준') {
                        room = "toilet";
                        BACK_IMG.attr('src', './imgs/2floor/화장실.jpg');
                        ARROWS.hide();
                        DOWN_ARROW.show();
                        SMALL_EVENT.hide();
                        EVENTS.show();
                    }
                    eventNum = 0;
                }
            } else if (room == "floor2Stair") {
                BACK_IMG.attr('src', './imgs/2floor/계단.jpg');
                // EVENT1.css({ 'left': 0, 'top': 0 });
                ARROWS.hide();
                RIGHT_ARROW.show();
                EVENTS.hide();
                EVENT1.show();
                SMALL_EVENT.hide();
                //이벤트1 클릭 이벤트
                if (eventNum == 1) {
                    if (CHECK_ITEM.attr('alt') == '유성준') {
                    }
                    eventNum = 0;
                }
            }

        }
    }
    //아이템 추가 함수
    function itemAdd() {
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
            <img src="./imgs/2floor/${value}.jpg" alt="${value}" class="w-100 h-100">
            </div>`
            if (i == 0) {
                itemHTML = `
                <div class="check mx-1">
                <img src="./imgs/2floor/${value}.jpg" alt="${value}" class="w-100 h-100">
                </div>`
            }
            $('.items').append(itemHTML);
        });
    }

    //아래쪽 버튼 이벤트
    DOWN_ARROW.click(function () {
        downBool();
        roomEvent();
        console.log(room)
    });
    function downEvent(back_img) {
        event = "";
        BACK_IMG.attr('src', back_img);
        EVENTS.show();
        SMALL_EVENT1.hide();
        eventBool = false;
    }
    //아래쪽 여부 체크 
    function downBool() {
        if (eventBool) {
            if (room == "clothingStore") {
                downEvent('./imgs/2floor/옷.png');
            }
        } else {
            if (room == "clothingStore") {
                room = "floor2Hall";
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
        }
    }
    //왼쪽 화살표 이벤트
    function leftEvent() {
        if (room == "floor2Hall2") {
            room = "floor2Hall";
        } else if (room == "floor2Hall") {
            room = "floor2Stair";
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
    // 텍스트 박스 
    let firstChat = true; //첫번째 텍스트
    let text = []; // 텍스트 배열
    const TEXTBOX = $(".text_box"); // 텍스트 박스
    //텍스트 박스 눌렀을때
    TEXTBOX.click(() => {
        nextChat();
    });
    //다음 텍스트로 넘기기
    function nextChat() {
        if (!text.length) {
            TEXTBOX.hide();
            firstChat = true;
        } else {
            TEXTBOX.show();
            $(".text_box h2").text(text[0].msg);
            text.splice(0, 1);
        }
    }
    //텍스트 추가하기
    function textAdd(msg) {
        if (!msg) {
            console.log("메세지 오류!");
            return;
        }
        if (firstChat) {
            TEXTBOX.show();
            $(".text_box h2").text(msg);
            firstChat = false;
        } else {
            text.push({ "msg": msg });
        }
    }



})



