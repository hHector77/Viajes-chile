// Ejecuta el código cuando el documento esté listo
$(document).ready(function () {
    
    // Inicializa los popovers para los elementos que tengan el atributo data-toggle="popover"
    $('[data-toggle="popover"]').popover();
    
    // Agrega un evento click a todos los elementos <a>
    $("a").click(function (evento) { 
        // Previene la acción predeterminada del evento click (navegación)
        evento.preventDefault();
        
        // Obtiene el valor del hash del enlace (ancla)
        var gato = this.hash;
        
        // Anima el desplazamiento de la página hasta la posición del elemento especificado por el hash
        $("html").animate({
            scrollTop: $(gato).offset().top,
        }, 800); // La animación dura 800 milisegundos
    });
});

// Ejecuta el código cuando el documento esté listo
$(function () {
    // Inicializa las tooltips para los elementos que tengan el atributo data-toggle="tooltip"
    $('[data-toggle="tooltip"]').tooltip();
});
