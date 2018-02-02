$(function () {
    let opened = false;
    $(window).scroll(function () {
        if ($(document).scrollTop() > $('.navbar').height()) {
            $('.navbar-inverse').css('background-color', '#333');
            // $('.screen-phone .collapse ul').addClass('navbar-dark');
        } else {
            if (!opened) {
                $('.navbar-inverse').css('background-color', 'transparent');
            }
        }
        $('#navbar-collapse-1').collapse('hide')
    });

    $('#navbar-collapse-1').on('show.bs.collapse', function () {
        if ($(document).scrollTop() <= 80) {
            if (!opened) {
                $('.navbar-inverse').css('background-color', '#333');
            }
        }
    });
    $('#navbar-collapse-1').on('hide.bs.collapse', function () {
        if ($(document).scrollTop() <= 80) {
            $('.navbar-inverse').css('background-color', 'transparent');
        }
    });
    $('#navbar-collapse-1').on('shown.bs.collapse', function () {//下拉导航打开后flag设置为true
        opened = true;
    })
    $('#navbar-collapse-1').on('hidden.bs.collapse', function () {//下拉导航关闭后flag设置为false
        opened = false;
    });
    $('.gallery img').click(function () {
        let src = $(this).attr('src');
        $('.modal-body img').attr('src', src);
        $('#myModal').modal('show');
    });

});