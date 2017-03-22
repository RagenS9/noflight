$(document).ready(function() {

    $('#items').load('cart.html');

    $('.add-to-cart').on('click', function() {
        $('#modal').removeClass('hidden');

        // this hides is when you click on it.
        $('.closeButton').on('click', function() {
            $('#modal').addClass('hidden');
        });
    });
    
});