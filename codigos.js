/* De tu mano - efectos con jQuery (tema 5.2 del manual) */
$(document).ready(function () {

    /* Las guías se ocultan al cargar; sin JavaScript se ven completas */
    $('.mas-info').slideUp(0);

    /* Botón "Ver guía": despliega el contenido */
    $('.ver-mas').click(function (event) {
        event.preventDefault();
        $(this).css('display', 'none');
        $(this).next().slideDown(500);
    });

    /* Botón "Ocultar guía": recoge el contenido y vuelve a mostrar el botón */
    $('.ocultar').click(function (event) {
        event.preventDefault();
        $(this).parent().slideUp(500);
        $(this).parent().prev().css('display', 'inline-block');
    });

    /* ===== Formulario de sugerencias (solo existe en index.html) ===== */
    $('#error-form').slideUp(0);
    $('#confirmacion').slideUp(0);

    $('#form-sugerencias').submit(function (event) {
        event.preventDefault();

        var nombre = $('#nombre').val();
        var correo = $('#correo').val();
        var tema = $('#tema').val();
        var mensaje = $('#mensaje').val();
        var errores = '';

        /* Validación de cada campo */
        if (nombre.length < 3) {
            errores = errores + 'Escribe tu nombre (mínimo 3 letras).<br>';
        }

        var arroba = correo.indexOf('@');
        var punto = correo.lastIndexOf('.');
        if (arroba < 1 || punto < arroba + 2 || punto >= correo.length - 1) {
            errores = errores + 'Escribe un correo electrónico válido, por ejemplo nombre@correo.com.<br>';
        }

        if (tema == '') {
            errores = errores + 'Selecciona la sección sobre la que opinas.<br>';
        }

        if (mensaje.length < 10) {
            errores = errores + 'Tu sugerencia debe tener al menos 10 caracteres.<br>';
        }

        if (errores != '') {
            /* Hay errores: se muestran sobre el formulario */
            $('#error-form').html(errores);
            $('#error-form').slideDown(300);
        } else {
            /* Todo correcto: se oculta el formulario y se confirma */
            $('#error-form').slideUp(300);
            $('#nombre-gracias').text(nombre);
            $('#tema-gracias').text(tema);
            $('#form-sugerencias').slideUp(500);
            $('#confirmacion').slideDown(500);
        }
    });

    /* "Escribir otra sugerencia": limpia los campos y vuelve a mostrar el formulario */
    $('#otra-sugerencia').click(function (event) {
        event.preventDefault();
        $('#nombre').val('');
        $('#correo').val('');
        $('#tema').val('');
        $('#mensaje').val('');
        $('#confirmacion').slideUp(300);
        $('#form-sugerencias').slideDown(500);
    });

});
