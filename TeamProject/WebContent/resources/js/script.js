$(()=>{
	 $(window).scroll(function(){
	      let scroll = $(this).scrollTop();


//	      let pinkScroll = 33.3 - scroll / 3;
//	      let yellowScroll = 100 - scroll / 1;
//
//	      if (scroll > 100) {
//	        $(".pink").css({
//	          'transform': `translate3d(0, ${pinkScroll}px, 0)`,
//	        });
//	        $(".yellow").css({
//	          'transform': `translate3d(0, ${yellowScroll}px, 0)`,
//	        });
//	      
//	      } else {
//	        $(".pink").css({
//	          'transform': `translate3d(0, 0, 0)`,
//	        });
//	        $(".yellow").css({
//	          'transform': `translate3d(0, 0, 0)`,
//	        });
//	      }

	      let mainSectionScroll = $("#main").offset().top;
	      let posX = (scroll - mainSectionScroll - 0) / 1;

	      if (scroll >= mainSectionScroll + 0) {
	        $(".truck").css({
	          "transform": `translateX(${posX}px)`,
	        });
	      }
	      
	    })	
	

})



