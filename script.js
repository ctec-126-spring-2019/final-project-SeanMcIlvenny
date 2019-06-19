
$(document).ready(
    function () {
        $('#add').click(
            function () {
                var addItem = $('#item').val();
                $('#list').append('<li>' + addItem + '</li>');
            });

        if ($('#item') === '') {
            alert('Error, type something!');
            $('#item').css('border','2px','solid','red');
            console.log('error need text');
        }

        $('#item').keyup(function (e) {
            if (e.keyCode === 13) {
                $('#add').click();
            }
        });

        $(document).on('dblclick', 'li', function () {
            $(this).toggleClass('strike').fadeOut('fast');
        });

        $('#item').focus(function () {
            $(this).val('');
        });



    });