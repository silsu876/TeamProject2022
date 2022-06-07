$(()=>{
	//-----------------------------페펄랙스
	 $(window).scroll(function(){
	      let scroll = $(this).scrollTop();


	      // 1 Section

	      let pinkScroll = 33.3 - scroll / 3;
	      let yellowScroll = 100 - scroll / 1;

	      if (scroll > 100) {
	        $(".pink").css({
	          'transform': `translate3d(0, ${pinkScroll}px, 0)`,
	        });
	        $(".yellow").css({
	          'transform': `translate3d(0, ${yellowScroll}px, 0)`,
	        });
	      
	      } else {
	        $(".pink").css({
	          'transform': `translate3d(0, 0, 0)`,
	        });
	        $(".yellow").css({
	          'transform': `translate3d(0, 0, 0)`,
	        });
	      }

	      // 2 Section

	      let targetScroll = $(".target").offset().top;
	      let successSectionScroll = $(".bg-success").offset().top;

	      let sectionHeight = $(".bg-danger").height(); // 100vh

	      let pos = (targetScroll - (sectionHeight / 2)); 
	      let opacity = (scroll - pos) / 500 ;


	      if (scroll >= targetScroll - (sectionHeight / 2)) {

	        $(".box").css({
	          "position": "fixed",
	          "top": (sectionHeight / 2) + "px",
	          "opacity": (opacity > 1) ? 1 : opacity,
	          "transform": `scale(${(opacity > 1) ? 1 : opacity})`,
	        })

	        if (scroll >= targetScroll) {
	          $(".target").css({
	            "paddingTop": "50vh",
	            "paddingBottom": 0,
	          })
	          
	          $(".box").css({
	            "position": "relative",
	            "top": "auto",
	          })
	        }

	      } else {
	        $(".target").css({
	          "paddingTop": 0,
	          "paddingBottom": "calc(100vh - 100px)",
	        })

	        $(".box").css({
	          "position": "relative",
	          "top": "auto",
	          "opacity": 0,
	        })
	      }

	      // 3 Section

	      let warningSectionScroll = $(".bg-warning").offset().top;
	      let posX = (scroll - warningSectionScroll - 150) / 3;

	      if (scroll >= warningSectionScroll + 150) {
	        $(".text").css({
	          "transform": `translateX(-${posX}px)`,
	        });
	      }
	      
	    })	
	

})



