$(document).ready(function () {
    $("#name").keyup(function (event) {
        console.log(event.target.value)
        $("#svgname").html(event.target.value);
    });
    $("#cardnumber").keyup(function (event) {
        console.log(event.target.value)
        $("#svgnumber").html(event.target.value);
    });
    $("#securitycode").keyup(function (event) {
        console.log(event.target.value)
        $("#svgsecurity").html(event.target.value);
    });
    $("#expirationdate").keyup(function (event) {
        console.log(event.target.value)
        $("#svgexpire").html(event.target.value);
    });
    $('.card__next-button, .card__done-button').click(function () {
        $('.card__rotate').toggleClass('card__active')
    })
    document.querySelector('.preload').classList.remove('preload');
    document.querySelector('.creditcard').addEventListener('click', function () {
        if (this.classList.contains('flipped')) {
            this.classList.remove('flipped');
        } else {
            this.classList.add('flipped');
        }
    })

    //On Focus Events
    document.getElementById('name').addEventListener('focus', function () {
        document.querySelector('.creditcard').classList.remove('flipped');
    });

    cardnumber.addEventListener('focus', function () {
        document.querySelector('.creditcard').classList.remove('flipped');
    });

    expirationdate.addEventListener('focus', function () {
        document.querySelector('.creditcard').classList.remove('flipped');
    });

    securitycode.addEventListener('focus', function () {
        document.querySelector('.creditcard').classList.add('flipped');
    });

    // if($("#name").val() == "" && $("#cardnumber").val() == "" && $("#securitycode").val() == "" && $("#expirationdate").val() == ""){
    //     $("#btn_credcard").attr("disabled", true);
    // }else{
    //     $("#btn_credcard").attr("disabled", false);
    // }
    $("#loading").css("display", "none");

    $("input[name=cep]").blur(function () {
        var cep = $(this).val().replace(/[^0-9]/, '');
        $("#loading").css("display", "block");
        if (cep) {
            var url = 'https://viacep.com.br/ws/' + cep + '/json/';
            $.ajax({
                url: url,
                dataType: 'jsonp',
                crossDomain: true,
                contentType: "application/json",
                success: function (json) {
                    $("input[name=cidade]").val(json.localidade);
                    $("input[name=uf]").val(json.uf);
                    $("#loading").css("display", "none");
                }
            });
            
        }
    });

})
