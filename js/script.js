/* OJO ----------------------------------------------------------------------------------------------------------------------*/
const eye = document.getElementById('eye');
const pupil = document.querySelector('.pupil');

document.addEventListener('mousemove', (e) => {
    const eyeX = eye.getBoundingClientRect().left + eye.offsetWidth / 2;
    const eyeY = eye.getBoundingClientRect().top + eye.offsetHeight / 2;

    const deltaX = e.clientX - eyeX;
    const deltaY = e.clientY - eyeY;
    const angle = Math.atan2(deltaY, deltaX);

    // Calcula el radio máximo al que puede moverse la pupila dentro del globo ocular
    const maxRadius = (eye.offsetWidth - pupil.offsetWidth) / 2;

    // Calcula la distancia desde el centro del ojo
    const distance = Math.min(maxRadius, Math.hypot(deltaX, deltaY));

    // Calcula la posición de la pupila
    const pupilX = distance * Math.cos(angle);
    const pupilY = distance * Math.sin(angle);

    pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
});
/* OJO ----------------------------------------------------------------------------------------------------------------------*/
/* CAMBIA PALABRA -----------------------------------------------------------------------------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
    const wordContainer = document.getElementById('wordContainer');
    const words = ['Hello', 'Salut', 'Hallo', 'Ciao', 'Olá']; // Lista de palabras a mostrar
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % words.length;
        animateWord(words[currentIndex]);
    }, 4000); // 1000 = 1 segundo

    function animateWord(word) {
        let i = 0;
        wordContainer.textContent = ''; // Limpiar el contenido actual

        function addLetter() {
            if (i < word.length) {
                wordContainer.textContent += word.charAt(i);
                i++;
                setTimeout(addLetter, 200); // Ajusta el tiempo entre letras
            }
        }

        addLetter();
    }
});
/* CAMBIA PALABRA -----------------------------------------------------------------------------------------------------------*/
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

