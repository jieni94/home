document.onkeydown = function(event) {
	switch(event.keyCode) {
		case 32: // spacebar
			if(typeof fb.getInstance() !== 'undefined') {
				toggleplay();
			}
	}
};
function fixTitlebar() {
	var iconCount = $('#ne-navleft img').length + $('#ne-navright img').length;
	if((window.innerHeight < 500 || window.innerWidth < 500) && iconCount > 0) {
		var navH = $('#ne-navleft').outerHeight(false);
		if(navH > 32) {
			$('#ne-navleft, #ne-navright').css({'height': '32px'});
			$('#ne-navleft img, #ne-navright img').css({'height': '32px', 'width': '32px'});
			navH = 32;
		}
		$('#ne-navleft, #ne-navright').css({'width': 'auto'});
		if($('.ne-logo').length) {
			$('.ne-logo').css({'padding-top': (5 + navH).toString() + 'px'});
		}
		else {
			$('.ne-pagetitle, .ne-pagetitleTI').css({'padding-top': (5 + navH).toString() + 'px'});
		}
	}
};
function checkFloats() {
	isfFloat = $('#ne-fthumbs > div > div:first-of-type').css('float') == 'left' || $('#ne-fthumbs > div > div:first-of-type').css('float') == 'right';
	if(isfFloat && $(window).width() < $('#ne-fthumbs')[0].scrollWidth) {
		$('#ne-fthumbs > div').css({'width': 'auto', 'background': 'none'});
		$('#ne-fthumbs > div > div:first-of-type').css({'float': 'none', 'margin': '0px auto'});
		$('.ne-fthumbcaption').css({'text-align': 'center', 'padding': '5px 5px 10px'});
		isfFloat = false;
	}
	isFloat = $('#ne-thumbs > div > div:first-of-type').css('float') == 'left' || $('#ne-thumbs > div > div:first-of-type').css('float') == 'right';	
	if(isFloat && $(window).width() < $('#ne-thumbs')[0].scrollWidth) {
		$('#ne-thumbs > div').css({'width': 'auto', 'background': 'none'});
		$('#ne-thumbs > div > div:first-of-type').css({'float': 'none', 'margin': '0px auto'});
		$('.ne-thumbcaption').css({'text-align': 'center', 'padding': '5px 5px 10px'});
		isFloat = false;
	}
};
function checkCaptions() {
	var maxfHeight = 0;
	if($('.ne-fthumbcaption').length) {
		$('.ne-fthumbcaption').each(function(){
			maxfHeight = $(this).height() > maxfHeight ? $(this).height() : maxfHeight;
		});
		if(maxfHeight > 0) {
			$('.ne-fthumbcaption').css({'min-height': maxfHeight.toString() + 'px'});
			if(!isfFloat) {
				$('#ne-fthumbs > div').css({'margin-bottom': '0px'});
			}
		}
		else {
			$('.ne-fthumbcaption').css({'display': 'none'});
		}
	}
	var maxHeight = 0;
	if($('.ne-thumbcaption').length) {
		$('.ne-thumbcaption').each(function(){
			maxHeight = $(this).height() > maxHeight ? $(this).height() : maxHeight;
		});
		if(maxHeight > 0) {
			$('.ne-thumbcaption').css({'min-height': maxHeight.toString() + 'px'});
			if(!isFloat) {
				$('#ne-thumbs > div').css({'margin-bottom': '0px'});
			}
		}
		else {
			$('.ne-thumbcaption').css({'display': 'none'});
		}
	}
};
function topScroll() {
	if($('#ne-parabody').length) {
		$('#ne-parabody').scroll(function(){
			if($('#ne-paracontent').position().top < -150){
				$('#ne-pagetop').fadeIn(700);
			}
			else {
				$('#ne-pagetop').fadeOut(700);
			}
		});
		$('#ne-pagetop').click(function(){
			$('#ne-parabody').animate({scrollTop:0},700);
			return false;
		});
	}
	else {
		$(window).scroll(function(){
			if($(window).scrollTop() > 400) {
				$('#ne-pagetop').fadeIn(700);
			}
			else {
				$('#ne-pagetop').fadeOut(700);
			}
		});
		$('#ne-pagetop').click(function(){
			$('body,html').animate({scrollTop:0},700);
			return false;
		});
	}
};
function fullscreenDetect() {
	if (typeof screenfull !== 'undefined') {
		screenfull.on('change', () => {
			var fscurrent = $('#ne-fstoggle').attr('src');
			if(screenfull.isFullscreen) {
				$('#ne-fstoggle').attr('src', fscurrent.replace('full', 'exitfull'));
			}
			else {
				$('#ne-fstoggle').attr('src', fscurrent.replace('exitfull', 'full'));
			}
		});
	}
};
function retainPos() {
	var pathName = document.location.pathname;
	pathName = pathName.substring(0, pathName.lastIndexOf("/")) + "/"
	var isPara = $('#ne-parabody').length;
	window.onbeforeunload = function () {
		if(isPara) {
			var scrollPosition = $('#ne-parabody').scrollTop();
		}
		else {
			var scrollPosition = $(document).scrollTop();
		}
		sessionStorage.setItem("scrollPosition_" + pathName, scrollPosition.toString());
	}
};
function toggleplay() {
	if(paused) {
		$('.ne-play').css({'display':'none'});
		$('.ne-pause').css({'display':'initial'});
	}
	else {
		$('.ne-pause').css({'display':'none'});
		$('.ne-play').css({'display':'initial'});
	}
	fb.pause(!paused);
	paused = !paused;
};
function audioFade() {
	if($('#ne-musicdiv').length) {
		$('#ne-musicdiv').fadeIn(700);
		setTimeout(function(){$('#ne-musicdiv').fadeOut(700)},5000);	
	}
};
function init() {
	fixTitlebar();
	checkFloats();
	checkCaptions();
	topScroll();
	fullscreenDetect();
	retainPos();
	paused = true;
	$('.ne-pause').css({'display':'none'});
	audioFade();
};
$(document).ready(init);
