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

$('.header__nav-item  a').click(function(){
    $(this).parent().toggleClass('nav-item__active').find('.header__nav__dropdown').slideToggle();
});

$('.header__toggle').click(function(){
    $(this).parent().toggleClass('header__header-menu__add-background');
    $(this).parent().find('.header__nav').slideToggle();
});

$('.header__nav > ul > li.header__nav-item:not(.header__nav-item__search-icon, .header__nav-item__away-link) > a').click(function(e){
    e.preventDefault();
});

/*==========================================
 for Filter
 * ==============================================*/

/*tabs*/
$(document).ready(function() {
    $(".filter__filter-menu a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("filter__filter-menu__current");
        $(this).parent().siblings().removeClass("filter__filter-menu__current");
        var tab = $(this).attr("href");
        $(".filter__tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
});
/*tabs end*/

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