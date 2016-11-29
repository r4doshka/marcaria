/*==========================================
for FAQ
* ==============================================*/
$('.faq-list__toggle, .faq-list__heading').click(function(){
    $(this).siblings('.faq-list__description').slideToggle();
});

$('.faq-list__show-more').click(function(){

    $(this).siblings().slideToggle();
});

/*==========================================
 for Header menu
 * ==============================================*/

$('.header__nav li ').click(function(e){
    $(this).toggleClass('nav-item--active').find('.header__nav__dropdown').filter(':first').slideToggle();
    e.stopPropagation();

    if($(this).find('a').attr("href") == '#'){
        e.preventDefault();
    }
});

$(document).ready(function(){
    $('.header__nav-item .header__nav__dropdown').parent().addClass('has-child');
});

$('.dropdown-menu__toggle, .header__nav').click(function(e){
    e.stopPropagation();
});

$('.dropdown-menu__toggle').click(function(){
    $(this).parent().toggleClass('header-menu__add-background');
    $(this).parent().find('.header__nav').slideToggle();

});

$('body').click(function(){
    if($('.header__nav:visible')) {
        $('.header__nav').slideUp();
        $('.dropdown-menu').removeClass('header-menu__add-background');
    }
});


/*==========================================
 for Filter
 * ==============================================*/


$('.filter__options ').click(function(){
    $(this).toggleClass('filter__options-active');
    $('.filter__all-classes-wrap').slideToggle();
});

/*==========================================
 for breadcrumbs
 * ==============================================*/

$('.breadcrumbs li:last-child a').click(function(e){
    e.preventDefault();
});

/*==========================================
 for search result
 * ==============================================*/

$('.search-options__item, .search-result__arrow-up').click(function(){
    $('.search-result__search-options, .search-result__dropdown-options').slideToggle();

});

$('.identical-result__view-detail').click(function(){
    $(this).parents('.identical-result__item').find('.identical-result__value').not('.identical-result__trademark').slideToggle();

});


/*==========================================
 for share
 * ==============================================*/
$('.found__share-text, .found__share-icon').click(function(e){
    e.preventDefault();
    $(this).siblings('.share-links').toggle("slide");
});

/*==========================================
 for cart
 * ==============================================*/
$('.cart .cart-icon').on('click', function(){
    $('.cart-content').slideToggle();
});

$('.select-panel__item').on('click', function(){
   $(this).siblings('.select-panel__dropdown').slideToggle();
});

/*==========================================
 for account panel
 * ==============================================*/
$('.account-menu__user-name').on('click', function(){
    $('.account-menu__dropdown').slideToggle();
});

$(document).ready(function(){
    var dividend = $('.account-menu__menu-context').width();
    var leftIndent = -100+(dividend/2);
    $('.account-menu .account-menu__dropdown').css('left', leftIndent);
});

/*=======*/
if (Modernizr.mq('(max-width: 767px)')) {
    $('.our-advantages .list-with-icon__title').on('click', function () {
        $(this).siblings('.list-with-icon__text').slideToggle();

    });
}
if (Modernizr.mq('(max-width: 767px)')) {
    $(document).ready(function(){
        $('.main-search--small .main-search__search input').attr('value', '');
    });
}

/*==========================================
 for tabs
 * ==============================================*/

$(document).ready(function() {
    $('.filter__filter-content').each(function(){
        $(this).children().filter(':first').css("display", "block") ;
    });

    $(".default-tabs .filter__filter-menu a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("filter__filter-menu--current");
        $(this).parent().siblings().removeClass("filter__filter-menu--current");
        var tab = $(this).attr("href");
        var $tabContent = $(this).parents('.default-tabs').find('.filter__tab-content');
        $tabContent.not(tab).css("display", "none");
        $(tab).fadeIn();
    });


    $(".tabs-with-slider .filter__filter-menu a").click(function(event) {
        event.preventDefault();
        $('.tabs-with-slider .filter__filter-menu--current').removeClass("filter__filter-menu--current");
        $(this).parent().addClass("filter__filter-menu--current");
        var tab = $(this).attr("href");
        var $tabContent = $(this).parents('.tabs-with-slider').find('.filter__filter-content');
        console.log($tabContent);
        $tabContent.find('.filter__tab-content').not(tab).css("display", "none");
        $(tab).fadeIn();
    });
});


/*==========================================
 for bulk search
 * ==============================================*/

$('.bulk-search-field, .main-search__search-field.bulk-case').attr("placeholder","Domain 1\nDomain 2\nDomain 3\nDomain 4");

$('.search-result .btn-link.bulk-search').on('click', function(e){
    $(this).toggleClass('hidden').siblings().toggleClass('hidden');
    (e).preventDefault();
    $('.bulk-case, .single-case, .button-single-case, .button-bulk-case').toggleClass('hidden');
});

$('.main-search .btn-link.bulk-search').on('click', function(e){
    (e).preventDefault();
    $('.bulk-case, .single-case').toggleClass('hidden');
});

$('.check-order .edit-button, .check-order .btn-small').click(function(){
    $(this).parents('.check-order').find('.edit-button, .edit-control-panel, .default-select, .check-order__description').toggleClass('hidden');
});