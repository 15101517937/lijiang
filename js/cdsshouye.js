



window.onload=function(){
	/*banner轮播*/
	$('.cdsdada ul li').width($('.cdsdada ul li').width())
	$('.cdsdada ul').html($('.cdsdada ul').html()+$('.cdsdada ul').html())
	$('.cdsdada ul').width($('.cdsdada ul li a img').width()*$('.cdsdada ul li').length);
	var bannern=$('.cdsdada ul li').width();
	var bannerm=0;
	var index=0;
	var kkg=true;
	function bannergo(){
		if(bannerm>=$('.cdsdada ul').width()/2){
			bannerm=0
			$('.cdsdada ul').css('left',-bannerm+'px')
		}
		bannerm+=parseInt(bannern);
		index=bannerm/parseInt(bannern)
		//console.log(index)
		if(index==6){
			index=0;
		}

		//console.log(index)
		$('.cdsdian a').removeClass('active');
		$('.cdsdian a').eq(index).addClass('active');
		//console.log(index+1)
		
		//console.log(index,bannerm)
		$('.cdsdada ul').stop().animate({'left':-bannerm+'px'},500);
	}
	var bannertime=setInterval(bannergo,3000)
	$('.cdsnext').click(function(){
		if(kkg){
			kkg=false;
			
			if(bannerm>=$('.cdsdada ul').width()/2){
				bannerm=0
				$('.cdsdada ul').css('left',-bannerm+'px')
			}
			
			index++;
			if(index==6){
				index=0;
			}
			bannerm+=parseInt(bannern);
			$('.cdsdian a').removeClass('active');
			$('.cdsdian a').eq(index).addClass('active');
			$('.cdsdada ul').stop().animate({'left':-bannerm+'px'},500,function(){
				kkg=true;
			})
		}
		
	})
	$('.cdsprve').click(function(){
		if(kkg){
			kkg=false;
			
			index--;
			if(index==-1){
				index=5
			}
			if(bannerm<=0){
				//console.log($('.cdsdada ul').width()/2)
				bannerm=$('.cdsdada ul').width()/2;
				$('.cdsdada ul').css('left',-bannerm+'px')
			}
			//console.log(index,bannerm)
			$('.cdsdian a').removeClass('active');
			$('.cdsdian a').eq(index).addClass('active');
			bannerm-=parseInt(bannern);
			$('.cdsdada ul').stop().animate({'left':-bannerm+'px'},500,function(){
				kkg=true;
			})
		}
		
	})
	$('.cdsdada').mouseover(function(){
		clearInterval(bannertime)
	})
	$('.cdsdada').mouseout(function(){
		clearInterval(bannertime)
		bannertime=setInterval(bannergo,3000)
	})
	$('.cdsdian a').click(function(){
		$('.cdsdian a').removeClass('active');
		$(this).addClass('active');

		index=$(this).index();
		bannerm=index*bannern
		$('.cdsdada ul').stop().animate({'left':-bannerm+'px'},500)
	})
	/* 无缝滚动*/

	var cdswutime=setInterval(cdswffn,3000);
	var wf={};
	wf.n=0;
	wf.kg=true;
	function cdswffn(){
		wf.n+=298;
		if(wf.n>2086){
			wf.n=0;
		}
		if(wf.n>=2086){
			$('.span').addClass('cdsspan')
		}else{
			$('.span').removeClass('cdsspan')
		}
		if(wf.n<=0){
			$('.spanl').addClass('cdsspan')
		}else{
			$('.spanl').removeClass('cdsspan')
		}
		$('.cdswufeng ul').stop().animate({'left':-wf.n+'px'},700);
	}
	$('.spanl').click(function(){
		if(wf.kg){
			wf.kg=false;
			wf.n-=298;
			if(wf.n<0){
				wf.n=0;
			}
			if(wf.n<=0){
				$('.spanl').addClass('cdsspan')
			}else{
				$('.spanl').removeClass('cdsspan')
			}
			if(wf.n>=2086){
				$('.span').addClass('cdsspan')
			}else{
				$('.span').removeClass('cdsspan')
			}
			$('.cdswufeng ul').animate({'left':-wf.n+'px'},700,function(){
				wf.kg=true;
			});
		}
	})
	$('.span').click(function(){
		if(wf.kg){
			wf.kg=false;
			wf.n+=298;
			if(wf.n>2086){
				wf.n=2086;
			}
			if(wf.n<=0){
				$('.spanl').addClass('cdsspan')
			}else{
				$('.spanl').removeClass('cdsspan')
			}
			if(wf.n>=2086){
				$('.span').addClass('cdsspan')
			}else{
				$('.span').removeClass('cdsspan')
			}
			$('.cdswufeng ul').stop().animate({'left':-wf.n+'px'},700,function(){
				wf.kg=true;
			});
		}
	})

	$('.cdswufeng').mouseover(function(){
		clearInterval(cdswutime)
	})
	$('.cdswufeng').mouseout(function(){
		cdswutime=setInterval(cdswffn,3000);
	})
	$('.cdswufeng ul li').mouseover(function(){
		$(this).css('background','#ccc')
	})
	$('.cdswufeng ul li').mouseout(function(){
		$(this).css('background','#fff')
	})
	/* */
	
	
	/*底部轮播*/
	var dibuIndex=0;
	var dibuTime=null;
	$('.cdsul a').click(function(){
		dibuIndex=$(this).index();
		//console.log($(this).index())
		$(this).addClass('active').siblings().removeClass('active');
		$('.cdsx').eq(dibuIndex).addClass('show').siblings().removeClass('show');
	})
	function dibunext(){
		dibuIndex++;
		if(dibuIndex>3){
			dibuIndex=0;
		}
		$('.cdsul a').eq(dibuIndex).addClass('active').siblings().removeClass('active');
		$('.cdsx').eq(dibuIndex).addClass('show').siblings().removeClass('show');
	}
	$('#cdsnext').click(dibunext)
	$('#cdsprev').click(function(){
		dibuIndex--;
		if(dibuIndex<0){
			dibuIndex=3;
		}
		$('.cdsul a').eq(dibuIndex).addClass('active').siblings().removeClass('active');
		$('.cdsx').eq(dibuIndex).addClass('show').siblings().removeClass('show');
	})
	dibuTime=setInterval(dibunext,2000)
	$('.cdsxia').mousemove(function(){
		clearInterval(dibuTime)
	})
	$('.cdsxia').mouseout(function(){
		dibuTime=setInterval(dibunext,2000)
	})
	/*分页轮播*/
	
	var fyIndex=0;
	$('#cdssnext').click(function(){
		fyIndex++;
		if(fyIndex==3){
			fyIndex=0
		}
		$('.cdsposi').eq(fyIndex).addClass('show').siblings('div').removeClass('show')
	})
	$('#cdssprev').click(function(){
		fyIndex--;
		if(fyIndex==-1){
			fyIndex=2
		}
		$('.cdsposi').eq(fyIndex).addClass('show').siblings('div').removeClass('show')
	})
	$('.right ul li').mouseover(function(){
		$(this).addClass('right2').siblings().removeClass('right2').parents('.cdsposi').find('.left img').eq($(this).index()).addClass('show').siblings().removeClass('show');
		//$('.left img')
	})
}














