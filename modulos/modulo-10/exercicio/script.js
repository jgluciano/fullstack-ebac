$(document).ready(function () {
    $('#campo-telefone').mask("(00) 00000-0000")
    $('#campo-cpf').mask("000.000.000-00")
    $('#campo-cep').mask("00000-000")

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
          cpf: {
            required: true,
          },
          endereco: {
            required: true,
          },
          cep: {
            required: true,
          },
        },
        messages: {
            nome: "Precisamos do seu nome completo.",
            email: "Precisamos de um email válido.",
            telefone: "Precisamos de um celular válido com DDD.",
            cpf: "Precisamos de um CPF válido.",
            endereco: "Precisamos do seu endereço completo.",
            cep: "Precisamos do CEP da sua cidade.",
          }
    })
})