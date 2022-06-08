$(() => {

    const EVENT1 = $('.event1'); //이벤트 1버튼
    const EVENT2 = $('.event2'); //이벤트 2버튼
    const EVENT3 = $('.event3'); //이벤트 3버튼
    const EVENTS = $('.event'); //이벤트들
    const SMALL_EVENT = $('.small_event'); //이벤트 속 이벤트
    const BACK_IMG = $('.back_img'); //뒷배경
    const LEFT_ARROW = $('.arrow_left'); //왼쪽 화살표
    const RIGHT_ARROW = $('.arrow_right'); //오른쪽 화살표
    const DOWN_ARROW = $('.arrow_bottom'); //아래쪽 화살표
    const ARROWS = $('.arrow'); //화살표들
    const CHECK_ITEM = $('.check > img'); //아이템 check된 이미지
    let floor = "floor2"; //기본 설정(층)
    let room = "clothingStore"; //기본 설정(방)
    let event = ""; //기본 설정(이벤트)
    let item = []; //아이템 

    //층 구별
    if (floor == "floor2") {
        ARROWS.hide();
        DOWN_ARROW.show();
        //방 구별
        if (room == "clothingStore") {
            //   EVENT1.css({ 'left': 0, 'top': 0 });
            //   EVENT2.css({ 'left': 0, 'top': 0 });
            //   EVENT3.css({ 'left': 0, 'top': 0 });
            SMALL_EVENT.css({ 'left': 0, 'top': 0 });
            SMALL_EVENT.hide();
            BACK_IMG.attr('src', './imgs/2floor/옷.png');

            EVENT1.click(function () {
                console.log('1들감')
                EVENTS.hide();
                SMALL_EVENT.show();
                BACK_IMG.attr('src', './imgs/2floor/아이템.png');
                event = "유성준";
                DOWN_ARROW.click(function () {
                    downEvent('./imgs/2floor/옷.png');
                });
            });
            EVENT2.click(function () {
                EVENTS.hide();
                SMALL_EVENT.show();
                BACK_IMG.attr('src', './imgs/2floor/a.png');
                event = "마네킹";
                DOWN_ARROW.click(function () {
                    downEvent('./imgs/2floor/옷.png');
                });
            });
            EVENT3.click(function () {
                EVENTS.hide();
                SMALL_EVENT.show();
                BACK_IMG.attr('src', './imgs/2floor/옷.png');
                event = "옷";
                DOWN_ARROW.click(function () {
                    downEvent('./imgs/2floor/옷.png');
                });
            });
            if (event == "유성준") {
                SMALL_EVENT.click(function () {
                    // BACK_IMG.attr('src','여기에 해당 이벤트 아이템 바뀔 이미지.png');
                    //아이템들어감
                    DOWN_ARROW.show();
                });
                DOWN_ARROW.click(function () {
                    downEvent('./imgs/2floor/옷.png');
                });
            }
            DOWN_ARROW.click(function () {
                room = "floor2Hall";
                // BACK_IMG.attr('src','floor2Hall.png');
                ARROWS.show();
                DOWN_ARROW.hide();
            });
        } else if (room == "floor2Hall") {
            EVENT1.css({ 'left': 0, 'top': 0 });
            EVENT2.css({ 'left': 0, 'top': 0 });
            EVENT3.css({ 'left': 0, 'top': 0 });
            SMALL_EVENT.css({ 'left': 0, 'top': 0 });
            SMALL_EVENT.hide();

            EVENT1.click(function () {
                room = "clothingStore";
                // BACK_IMG.attr('src','clothingStore.png');
                ARROWS.hide();
                DOWN_ARROW.show();
            });
            EVENT2.click(function () {
                if (CHECK_ITEM.attr('alt') == '유성준') {
                    room = "toilet";
                    // BACK_IMG.attr('src','toilet.png');
                    ARROWS.hide();
                    DOWN_ARROW.show();
                }
            });
        }


    }

    //아래 버튼 이벤트
    function downEvent(back_img) {
        event = "";
        BACK_IMG.attr('src', back_img);
        EVENTS.show();
        SMALL_EVENT.hide();
        DOWN_ARROW.hide();
    }

    //템창 나왔다가 들어갔다가
    let bool = false;
    $('.check').click(function () {
        $('.check').addClass('item');
        $('.check').removeClass('check');
        $(this).addClass('check');
        $(this).removeClass('item');
        toggleCheck();
    });
    $('.item').click(function () {
        $('.check').addClass('item');
        $('.check').removeClass('check');
        $(this).addClass('check');
        $(this).removeClass('item');
        toggleCheck();
    })
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
    let firstChat = true;
    let txt = []; // 텍스트 배열
    const TXTBOX = $(".text_box"); // 텍스트 박스
    TXTBOX.click(() => {
        nextChat();
    });
    function nextChat() {
        if (!txt.length) {
            TXTBOX.hide();
            firstChat = true;
        } else {
            TXTBOX.show();
            $(".text_box h2").text(txt[0].msg);
            txt.splice(0, 1);
        }
    }
    function txtAdd(msg) {
        if (!msg) {
            console.log("메세지 오류!");
            return;
        }
        if (firstChat) {
            TXTBOX.show();
            $(".text_box h2").text(msg);
            firstChat = false;
        } else {
            txt.push({ "msg": msg });
        }
    }




})



