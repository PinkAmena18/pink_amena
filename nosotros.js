// Función para mostrar u ocultar la descripción del miembro del equipo
function toggleDescription(button) {
    const teamMember = button.closest('.team-member'); // Encuentra el miembro del equipo más cercano
    const descriptionBox = teamMember.querySelector('.description-box'); // Encuentra la caja de descripción dentro del miembro
    const allDescriptionBoxes = document.querySelectorAll('.description-box'); // Encuentra todas las cajas de descripción

    // Ocultar todas las demás descripciones
    allDescriptionBoxes.forEach(box => {
        if (box !== descriptionBox) {
            box.classList.remove('visible'); // Usar clase 'visible' para manejar el estado
            box.closest('.team-member').classList.remove('open');
        }
    });

    // Mostrar u ocultar la descripción del miembro actual
    if (descriptionBox.classList.contains('visible')) {
        descriptionBox.classList.remove('visible'); // Si está visible, ocultar
        teamMember.classList.remove('open'); // Remover la clase open
    } else {
        descriptionBox.classList.add('visible'); // Si no está visible, mostrar
        teamMember.classList.add('open'); // Agregar la clase open
    }
}
