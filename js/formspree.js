$(document).on('submit', '#contact-form', function(e) {
    e.preventDefault();
    var replyto = $('input[name=_replyto]'),
        replyto_text = replyto.val(),
        body = $('textarea[name=message]'),
        body_text = body.val();

    $.ajax({
        url: "https://formspree.io/addr@example.com",
        method: "POST",
        data: {
            _replyto: replyto_text,
            message: body_text
        },
        dataType: "json",
        beforeSend: function( xhr ) {
            spinner.show();
      }
    }).done(function(){
        $('#contacts-success-wrapper').show();
    }).fail(function() {
        $('#contacts-error-wrapper').show();
    }).always(function() {
        spinner.hide();
        $('#contacts-wrapper').remove();
    });
});