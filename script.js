// Función de saludo
function saludar(buttonElement) {
    buttonElement.innerText = '¡Bienvenido a mi portafolio, agradecido con ustedes! 👋';
    buttonElement.disabled = true; // Desactivar el botón después de hacer clic
}

// -------- MENÚ HAMBURGUESA --------
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Opcional: cerrar menú al hacer clic en un enlace
    document.querySelectorAll("#nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
}

// -------- MODAL DE CONTACTO --------
const btnContacto = document.getElementById("btn-contacto");
const modalContacto = document.getElementById("modal-contacto");
const closeModal = document.getElementById("close-modal");

if (btnContacto && modalContacto && closeModal) {
    btnContacto.addEventListener("click", (e) => {
        e.preventDefault(); // para que no haga salto raro
        modalContacto.style.display = "flex";
    });

    closeModal.addEventListener("click", () => {
        modalContacto.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modalContacto) {
            modalContacto.style.display = "none";
        }
    });
}


