$(document).ready(function() {

    /*mobile menu*/

    $("#mob-menu-btn").click(function() {
        $(".mob-menu-btn-wrapper .menu-txt").toggleClass('menubtn_txt_add');

    });

    $("#mob-menu-btn").click(function() {
        $(".mob-menu-btn span:nth-child(1)").toggleClass('menubtn_add_a');
        $(".mob-menu-btn span:nth-child(2)").toggleClass('menubtn_add_b');


        $(".mob-main-menu-wrapper").slideToggle();
        $(".header-wrapper, .mob-main-menu-wrapper").toggleClass('hdr_menu_mobbg_add');

    });






    /*mobile menu*/

});

$(document).ready(function() {
    // executes when HTML-Document is loaded and DOM is ready
    console.log("document is ready");


    $(".card").hover(
        function() {
            $(this).addClass('shadow-lg').css('cursor', 'pointer');
        },
        function() {
            $(this).removeClass('shadow-lg');
        }
    );

    // document ready
});

function modal() {
    $("#modal-trigger").animatedModal({
        modalTarget: 'js-modal',
        animatedIn: 'lightSpeedIn',
        animatedOut: 'bounceOutDown',
        color: '#3498db',
        // Callbacks
        beforeOpen: function() {
            console.log("The animation was called");
        },
        afterOpen: function() {
            console.log("The animation is completed");
        },
        beforeClose: function() {
            console.log("The animation was called");
        },
        afterClose: function() {
            console.log("The animation is completed");
        }
    });
}