$(document).ready(function () {
    first = $('.show');
    second = $('.show2');

    $('.next').click(function () {
        now_img = $('.show');
        next_img = now_img.next();
        if (next_img.length > 0) {
            now_img.removeClass('show');
            next_img.addClass('show');
        }
        else {
            now_img.removeClass('show');
            first.addClass('show');
        }


    });
    $('.prev').click(function () {
        now_img = $('.show');
        prev_img = now_img.prev();
        if (prev_img.length) {
            now_img.removeClass('show');
            prev_img.addClass('show');
        }

    });
    $('.next2').click(function () {
        now2_img = $('.show2');
        next2_img = now2_img.next();
        if (next2_img.length > 0) {
            now2_img.removeClass('show2');
            next2_img.addClass('show2');
        }
        else {
            now2_img.removeClass('show2');
            second.addClass('show2');
        }


    });
    $('.prev2').click(function () {
        now2_img = $('.show2');
        prev2_img = now2_img.prev();
        if (prev2_img.length) {
            now2_img.removeClass('show2');
            prev2_img.addClass('show2');
        }

    });
});
