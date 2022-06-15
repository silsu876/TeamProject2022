$(() => {
	//패럴랙스 스크롤링
	$(window).scroll(function () {

		let scroll = $(this).scrollTop(); //현재 스크롤
		let mainSectionScroll = $("#main").offset().top; //해당 섹션 스크롤
		let posX = (scroll - mainSectionScroll + 1000) / 1; //트럭 스크롤
		let gigocuScroll = 200 - (scroll - mainSectionScroll) / 1; //사람 스크롤

		//스크롤 사람 이벤트
		if (scroll > mainSectionScroll - 200) {
			$(".gigocu").css({
				'transform': `translate3d(0, -${gigocuScroll}px, 0)`,
			});

		} else {
			$(".gigocu").css({
				'transform': `translate3d(0, -340px, 0)`,
			});
		}
		//스크롤 트럭 이벤트
		if (scroll >= mainSectionScroll - 2000) {
			$(".truck").css({
				"transform": `translateX(${posX}px)`,
			});
		} else {
			$(".truck").css({
				"transform": `translateX(0)`,
			});

		}

	})


})



