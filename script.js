let menuVisible = false;

// Función que oculta o muestra el menú
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    // Oculto el menú una vez que selecciono una opción
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Función que aplica las animaciones de las habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("paqueteoffice");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("java");
        habilidades[5].classList.add("php");
        habilidades[6].classList.add("git");
        habilidades[7].classList.add("basesdedatos");
        habilidades[8].classList.add("comunicacion");
        habilidades[9].classList.add("trabajo");
        habilidades[10].classList.add("creatividad");
        habilidades[11].classList.add("dedicacion");
        habilidades[12].classList.add("proyect");
        habilidades[13].classList.add("resolucion");
        habilidades[14].classList.add("adaptacion");
        habilidades[15].classList.add("tratoclientes");
    }
}

// Función para descargar el CV
function descargarCV() {
    var fileName = "BrunoVazquezCV.pdf";
    var fileUrl = "img/brunoluisvazquezpaisCV.pdf";
    
    var a = document.createElement("a");
    a.href = fileUrl;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// Detecto el scrolling para aplicar la animación de la barra de habilidades
window.onscroll = function() {
    efectoHabilidades();
}
