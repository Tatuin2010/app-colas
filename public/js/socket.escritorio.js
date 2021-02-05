// comando para establecer la conexion
var socket = io();


var searchParams = new URLSearchParams(window.location.search);
let label = $('small');

if (!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('El escritorio es ncesario');
}

var escritorio = searchParams.get('escritorio');

$('h1').text('Escritorio ' + escritorio);

$('button').on('click', function() {
    socket.emit('atenderTicket', { escritorio: escritorio }, function(resp) {
        if (resp === 'No hay tickets') {
            alert(resp);
            return;
        }
        label.text('Ticket ' + resp.numero)
    });
});