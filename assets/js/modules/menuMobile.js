import $ from 'jquery';

export default function menuMobile() {
    $('.open-button-menu').on('click', function () {
        $('.mobile-menu nav').css('transform', 'translateX(0%)');
    });

    $('.close-button-menu').on('click', function () {
        $('.mobile-menu nav').css('transform', 'translateX(-100%)');
    });

    $('.mobile-menu .nav-links a').on('click', function () {
        $('.mobile-menu nav').css('transform', 'translateX(-100%)');
    });
}
  