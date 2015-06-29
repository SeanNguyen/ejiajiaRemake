'use-strict';

var filterMaxHeight = 1000;
var filterMinHeight = 40;

var EXPAND_STATE = { EXPANDED: '1', COLLAPSED: '2'};

var TEXT_EXPAND = '与 4 个筛选...';
var TEXT_COLLAPSE = '隐藏';

//init will be in expand state
var filterExpandState = EXPAND_STATE.COLLAPSED;

var widthSm = 992;

//when implement further, anytime the filter list change then call this function so it update the filter bar. you impliment it
function onListChange() {

}

function toggleFilter() {
	if(filterExpandState === EXPAND_STATE.COLLAPSED) {
		$( '.selectedItemContainer' ).css({ 'max-height': filterMaxHeight + 'px' });
		$( '#expandButton' ).text(TEXT_COLLAPSE);
		filterExpandState = EXPAND_STATE.EXPANDED;
	} else {
		$( '.selectedItemContainer' ).css({ 'max-height': filterMinHeight + 'px' });
		$( '#expandButton' ).text(TEXT_EXPAND);	
		filterExpandState = EXPAND_STATE.COLLAPSED;
	}

	$('#showFilterButton').height($('.selectedItemContainer').height() + 10);
}

function toggleFilterOption() {
	if($('.filterOptions').css('display') === 'none') {
		$('.filterOptions').css({ 'display': 'block'});

		if(Math.max( $(window).width(), window.innerWidth) <= widthSm) {
			$('.main-result').css({ 'display': 'none'});
		}
	} else {
		$('.filterOptions').css({ 'display': 'none'});
		$('.main-result').css({ 'display': 'block'});
	}
}

function toggleFavouriteBar() {
	if($('.main-favourite').css('display') === 'none') {
		$('.main-favourite').css({ 'display': 'block'});
	} else {
		$('.main-favourite').css({ 'display': 'none'});
	}
}

function swapElement(element1, element2) {
	element1.before(element2);
}

//load slider component
$('#priceSlider').slider({});

// apply chinese font
$youziku.load('.main', '8800337e3fa7441abaa76b0539b577fb', 'Microsoft_YaHei');
$youziku.load('.featureConnerText', 'b94f842897f14998ba7ef2a5dd301e33', 'jdzhonyuanjian');
$youziku.draw();