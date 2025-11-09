
function mostrarSenha() {
    let senhaInput = document.getElementById('senha');
    let btn = document.getElementById('btn-senha');

    if (senhaInput.type === 'password') {
        senhaInput.type = 'text';
        btn.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
    } else {
        senhaInput.type = 'password';
        btn.classList.replace('bi-eye-slash-fill', 'bi-eye-fill');
    }
}

// Controla cadeado e olho quando digitar
document.addEventListener('DOMContentLoaded', function() {
    let senhaInput = document.getElementById('senha');
    let btnOlho = document.getElementById('btn-senha');
    let iconCadeado = document.getElementById('icon-cadeado');

    senhaInput.addEventListener('input', function () {
        if (this.value.length > 0) {
            // Tem texto: mostra olho, esconde cadeado
            btnOlho.style.display = 'block';
            iconCadeado.style.display = 'none';
        } else {
            // Vazio: esconde olho, mostra cadeado
            btnOlho.style.display = 'none';
            iconCadeado.style.display = 'block';
        }
    });
});

