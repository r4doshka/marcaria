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

$('.header__nav-item  a').click(function(e){
    $(this).parent().toggleClass('nav-item__active').find('.header__nav__dropdown').slideToggle();
    if($(this).attr("href") == '#'){
        e.preventDefault();
    }
});

$('.header__toggle, .header__nav').click(function(e){
    e.stopPropagation();
});

$('.header__toggle').click(function(e){
    $(this).parent().toggleClass('header-menu__add-background');
    $(this).parent().find('.header__nav').slideToggle();

});

$('body').click(function(){
    if($('.header__nav:visible')) {
        $('.header__nav').slideUp();
        $('.header__header-menu').removeClass('header-menu__add-background');
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
