$(function () {
    /*scrollbar
    ============================================*/
    jQuery('.scrollbar-outer').scrollbar();


    /*Accordion
    ============================================*/

    $('[data-collapse]').on('click', function (event) {
        event.preventDefault();
        var $this = $(this);
        $this.parent().toggleClass('active');
        
    });


    /*Description
    ============================================*/
    var year = $('[data-year]');
    

    year.on('click', function (event) {
        event.preventDefault();
        var text = $(this).text();

        $('.accordion__title').text(text);

        $('[data-year]').removeClass('active');
        $(this).addClass('active');

        var id = $(this).data('year');

        $('[id^="year"]').each(function () {
            var idItem = $(this).attr('id');


            if (idItem === id) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });

        $('[data-dot]').each(function () {
            var idItem = $(this).data('dot');

            if (idItem === id) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });


        

    });

    

    

});