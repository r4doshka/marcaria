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