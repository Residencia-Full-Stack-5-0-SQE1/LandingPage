document.querySelectorAll('header a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

const modal = document.getElementById("modal");

const modalNome = document.getElementById("modal-nome");
const modalImg = document.getElementById("modal-img");
const modalDescricao = document.getElementById("modal-descricao");
const modalLinkedin = document.getElementById("modal-linkedin");

document.querySelectorAll(".integrantes").forEach(card => {

    card.addEventListener("click", () => {

        modalNome.innerHTML =
            `<span class="tag">&lt;</span>${card.dataset.nome}<span class="tag">&gt;</span>`;

        modalImg.src = card.dataset.foto;

        modalDescricao.textContent = card.dataset.descricao;

        modalLinkedin.href = card.dataset.linkedin;

        modal.style.display = "flex";

    });

});

document.querySelector(".fechar").addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", e => {

    if (e.target === modal) {
        modal.style.display = "none";
    }

});