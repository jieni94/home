var pathName = document.location.pathname;
pathName = pathName.substring(0, pathName.lastIndexOf("/")) + "/"
var isPara = $('#ne-parabody').length;
if(sessionStorage["scrollPosition_" + pathName]) {
	var folders = $('.ne-fthumbbox').length;
	var images = $('.ne-thumbbox').length;
	if(!folders && !images) {
		$(document).ready(function() {
			if(isPara) {
				$('#ne-parabody').scrollTop(sessionStorage.getItem("scrollPosition_" + pathName));
			}
			else {
				$(document).scrollTop(sessionStorage.getItem("scrollPosition_" + pathName));
			}
		});
	}
	else if(folders && !images) {
		$(document).ready(function() {
			$('#ne-fthumbs').justifiedGallery().on('jg.complete', function() {
				if(isPara) {
					$('#ne-parabody').scrollTop(sessionStorage.getItem("scrollPosition_" + pathName));
				}
				else {
					$(document).scrollTop(sessionStorage.getItem("scrollPosition_" + pathName));
				}
			});
		});
	}
	else if(!folders && images) {
		$(document).ready(function() {
			$('#ne-thumbs').justifiedGallery().on('jg.complete', function() {
				if(isPara) {
					$('#ne-parabody').scrollTop(sessionStorage.getItem("scrollPosition_" + pathName));
				}
				else {
					$(document).scrollTop(sessionStorage.getItem("scrollPosition_" + pathName));
				}
			});
		});
	}
	else {
		$(document).ready(function() {
			$('#ne-fthumbs').justifiedGallery().on('jg.complete', function() {
				$('#ne-thumbs').justifiedGallery().on('jg.complete', function() {
					if(isPara) {
						$('#ne-parabody').scrollTop(sessionStorage.getItem("scrollPosition_" + pathName));
					}
					else {
						$(document).scrollTop(sessionStorage.getItem("scrollPosition_" + pathName));
					}
				});
			});
		});
	}
}