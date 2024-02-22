
/* ANIMACION LENGUAJES UTILIZADOS -----------------------------------------------------------------------------------------------------------*/
const lenguajesContainer = document.getElementById('lenguajesContainer');

// Añade un evento al pasar el cursor sobre la etiqueta contenedora
lenguajesContainer.addEventListener('mouseover', () => {
    // Agrega una clase para aplicar la transición de altura en el CSS
    lenguajesContainer.classList.add('hovered');
});

// Añade un evento al quitar el cursor de la etiqueta contenedora
lenguajesContainer.addEventListener('mouseout', () => {
    // Elimina la clase para revertir la transición de altura en el CSS
    lenguajesContainer.classList.remove('hovered');
});
/* ANIMACION LENGUAJES UTILIZADOS -----------------------------------------------------------------------------------------------------------*/
const conocimientosContainer = document.getElementById('conocimientosContainer');
const habilidadesContainer = document.getElementById('habilidadesContainer');

conocimientosContainer.addEventListener('mouseover', () => {
    conocimientosContainer.classList.add('hovered');
});

conocimientosContainer.addEventListener('mouseout', () => {
    conocimientosContainer.classList.remove('hovered');
});

habilidadesContainer.addEventListener('mouseover', () => {
    habilidadesContainer.classList.add('hovered');
});

habilidadesContainer.addEventListener('mouseout', () => {
    habilidadesContainer.classList.remove('hovered');
});
/* Animación del header*/
document.addEventListener("DOMContentLoaded", function() {
    var header = document.getElementById("header");
    var toggleButton = document.getElementById("toggleButton");

    toggleButton.addEventListener("click", function() {
        header.style.display = (header.style.display === "none" || header.style.display === "") ? "flex" : "none";
    });
});
/* Animación section*/
document.addEventListener("DOMContentLoaded", function () {
    var sections = document.querySelectorAll('.section');
    
    // Encontrar la sección activa por defecto
    var defaultActiveIndex = Array.from(sections).findIndex(section => section.classList.contains('active'));

    sections.forEach(function (section, index) {
        section.addEventListener("click", function () {
            selectSection(index);
        });
    });

    // Seleccionar la sección activa por defecto al cargar la página
    selectSection(defaultActiveIndex);

    function selectSection(selectedIndex) {
        sections.forEach(function (section, index) {
            if (index === selectedIndex) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });

        // Ajustar el tiempo de la animación según tus preferencias (500ms en este caso)
        setTimeout(function () {
            sections[selectedIndex].style.transition = 'transform 0.8s ease-in-out, opacity 0.8s ease-in-out';
        }, 500);
    }
});
/* Animación de carrusel horizontal*/
document.addEventListener("DOMContentLoaded", function () {
    var sectionsContainer = document.querySelector('.container');
    var sections = document.querySelectorAll('.section');

    // Calcula el ancho total de la sección y establece la transformación inicial
    var sectionWidth = sections[0].offsetWidth + parseInt(window.getComputedStyle(sections[0]).marginRight);
    sectionsContainer.style.width = (sectionWidth * sections.length - parseInt(window.getComputedStyle(sections[0]).marginRight)) + 'px';
    
    // Calcula el ancho visible de las secciones en la página
    var visibleWidth = document.documentElement.clientWidth;

    // Calcula la distancia máxima que se puede mover el carrusel
    var maxDistance = (sections.length - 1) * sectionWidth;

    // Añade un valor para rastrear la posición actual del carrusel
    var currentPosition = 0;

    // Agrega un evento de clic a cada sección
    sections.forEach(function (section, index) {
        section.addEventListener("click", function () {
            rotateSections(index);
        });
    });

    function rotateSections(selectedIndex) {
        // Calcula la distancia a la que se debe mover el carrusel
        var distanceToMove = sectionWidth * selectedIndex * -1;

        // Ajusta la posición actual para mantener el carrusel en su lugar correcto
        currentPosition = Math.max(Math.min(currentPosition + distanceToMove, maxDistance), 0);

        // Aplica la transformación
        sectionsContainer.style.transform = 'translateX(' + -currentPosition + 'px)';
    }

    // Ajusta el tamaño del contenedor principal cuando cambia el tamaño de la ventana
    window.addEventListener('resize', function () {
        visibleWidth = document.documentElement.clientWidth;
        maxDistance = (sections.length - 1) * sectionWidth;
    });
});
