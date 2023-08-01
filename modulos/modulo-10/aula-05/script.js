$(document).ready(function () {
  $("#carousel-imagens").slick({
    autoplay: true,
  });

  $(".menu-hamburguer").click(function () {
    $("nav").slideToggle();
  });

  $("#campo-telefone").mask("(00) 00000-0000");

  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: true,
      },
      veiculoDeInteresse: {
        required: true,
      },
    },
    messages: {
      nome: "Precisamos do seu nome completo.",
      email: "Precisamos de um email válido.",
      telefone: "Precisamos de um número de celular válido com DDD.",
      veiculoDeInteresse: "Precisamos saber seu veículo de interesse",
    },
    submitHandler: function (form) {
      console.log(fom);
    },
    invalidHandler: function (evento, validador) {
      let camposIncorretos = validador.numberOfInvalids();
      console.log(camposIncorretos);
    },
  })

  $('.lista-veiculos button').click(function() {
    const destino = $('#contato')
    const nomeVeiculo = $(this).parent().find('h3').text()

    $('#veiculo-interesse').val(nomeVeiculo)

    $('html').animate({
        scrollTop: destino.offset().top
    }, 900)
  })
})
