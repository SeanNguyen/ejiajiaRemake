var filterMaxHeight = 1000;
var filterMinHeight = 40;

var EXPAND_STATE = { EXPANDED: '1', COLLAPSED: '2'};

var TEXT_EXPAND = '与 4 个筛选...';
var TEXT_COLLAPSE = '隐藏';

//init will be in expand state
var filterExpandState = EXPAND_STATE.COLLAPSED;

var phoneMaxWidth = 480;

//when implement further, anytime the filter list change then call this function so it update the filter bar. you impliment it
function onListChange() {

}

function toggleFilter() {
	if(filterExpandState === EXPAND_STATE.COLLAPSED) {
		$( '.selectedItemContainer' ).css({ "max-height": filterMaxHeight + 'px' });
		$( '#expandButton' ).text(TEXT_COLLAPSE);
		filterExpandState = EXPAND_STATE.EXPANDED;
	} else {
		$( '.selectedItemContainer' ).css({ "max-height": filterMinHeight + 'px' });
		$( '#expandButton' ).text(TEXT_EXPAND);	
		filterExpandState = EXPAND_STATE.COLLAPSED;
	}

	$('#showFilterButton').height($('.selectedItemContainer').height() + 10);
}

function toggleFilterOption() {
	if($('.filterOptions').css('display') === 'none') {
		$('.filterOptions').css({ 'display': 'block'});
	} else {
		$('.filterOptions').css({ 'display': 'none'});
	}
}

function swapElement(element1, element2) {
	element1.before(element2);
}

//load slider component
$("#priceSlider").slider({});