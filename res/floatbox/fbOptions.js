var fb = self.fb || {};
fb.fbOptions = {
global: {
	showMagCursor:true,
	footerGap:5,
	pageScroll:false,
	shadowType:'none',
	shadowSize:0,
	outerBorder:0,
	innerBorder:0,
	innerBorderRadius:0,
	boxCornerRadius:3,
	enableImageResize:false,
	enableDragMove:false,
	titleAsCaption:false,
	fetchVideoInfo:false,
	padding:20,
	minBoxWidth:300,
	maxWidth:2000,
	maxHeight:900,
	overlayOpacity:1.0,
	resizeTime:0.7,
	transitionTime:0.6,
	imageTransition:'crossfade',
	animationTime:0.2,
	startAt:`start`,
	endAt:`start`,
	boxColor:'#31546e',
	textColor:'#d1d9df',
	arrowColor:'#d1d9df',
	overlayColor:'#000000',
	outerBorderColor:'#eeeeee',
	showItemNumber:false,
	showClose:false,
	navType:'overlay',
	navOverlayWidth:45,
	showNavOverlay:false,
	autoFitSpace:15,
	enableWrap:false,
	autoEndVideo:false,
	autoPlayVideo:false,
	addVideoThumb:false,
	language:'zz'
},
mobile: {
	padding:2,
	minBoxWidth:140,
	showItemNumber:false,
	strictCentering:false,
	imageTransition:'slide',
	preloadLimit:1,
	autoFitSpace:5,
	enableImageResize:true
},
type: {
	pdf: {
		mobile: {newWindow:true}
	}
},
className: {
	fbTooltip: {
		placement:'top',
		minBoxWidth:0,
		outerBorderRadius:0
	}
}
};
fb.data.strings = ["","","","","","","","Image %1 of %2","Image %1 of %2","Image %1 of %2","","","","","","",""];