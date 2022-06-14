$(()=>{
	 $(window).scroll(function(){
	      let scroll = $(this).scrollTop();
    
	      let mainSectionScroll = $("#main").offset().top;
	      let posX = (scroll - mainSectionScroll + 1000) / 1;
	      let gigocuScroll = 200 - (scroll - mainSectionScroll) / 1;
	      
	      console.log(scroll)
	      if (scroll > mainSectionScroll - 200) {
		        $(".gigocu").css({
		          'transform': `translate3d(0, -${gigocuScroll}px, 0)`,
		        });
		      
		      } else {
		        $(".gigocu").css({
		          'transform': `translate3d(0, -340px, 0)`,
		        });
		      }
	      
	      if (scroll >= mainSectionScroll - 2000) {
	        $(".truck").css({
	          "transform": `translateX(${posX}px)`,
	        });
	      } else{
	    	  $(".truck").css({
	    		  "transform": `translateX(0)`,
	    	  });
	    	  
	      }
	      
	    })	
	

})



