// function mostrarSenha() {
//     let senhaInput = document.getElementById('senha')
//     let btn = document.getElementById('btn-senha')
//     if (senhaInput.type === 'password') {
//         senhaInput.setAttribute('type', 'text')
//         btn.classList.replace('bi-eye-fill', 'bi-eye-slash-fill')
//     } else {

//         senhaInput.setAttribute('type', 'password')
//         btn.classList.replace('bi-eye-slash-fill', 'bi-eye-fill')

//     }
// }const senhaInput = document.getElementById('senha');
// const btn = document.getElementById('btn-senha');

// senhaInput.addEventListener('input', () => {
//   if (senhaInput.value.length > 0) {
//     btn.style.display = 'block';
//   } else {
//     btn.style.display = 'none';
//     senhaInput.setAttribute('type', 'password');
//     btn.classList.replace('bi-eye-slash-fill', 'bi-eye-fill');
//   }
// });
// function mostrarSenha() {
//     let senhaInput = document.getElementById('senha');
//     let btn = document.getElementById('btn-senha');

//     if (senhaInput.type === 'password') {
//         senhaInput.type = 'text';
//         btn.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
//     } else {
//         senhaInput.type = 'password';
//         btn.classList.replace('bi-eye-slash-fill', 'bi-eye-fill');
//     }
// }

// // Mostrar o olho só quando o usuário começar a digitar
// document.getElementById('senha').addEventListener('input', function () {
//     let btn = document.getElementById('btn-senha');
//     if (this.value.length > 0) {
//         btn.style.display = 'block';
//     } else {
//         btn.style.display = 'none';
//     }
// });
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

