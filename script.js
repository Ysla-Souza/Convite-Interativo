// Seleciona os elementos do DOM
const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModal = document.querySelector(".close");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// Quando o botão "Abrir Convite" é clicado, abre o modal
openModalBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Fecha o modal quando o usuário clica no "x"
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Fecha o modal quando o usuário clica fora do conteúdo do modal
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Resposta para o botão "Sim"
yesBtn.addEventListener("click", () => {
    alert("Só tinha essa opção mesmo");
    modal.style.display = "none";
});

// Resposta para o botão "Não"
noBtn.addEventListener("click", () => {
    alert("Que pena! Não tem como negar.");
    modal.style.display = "none";
});
