
document.addEventListener("DOMContentLoaded", function() {
    // Captura todos os links do menu
    const links = document.querySelectorAll("nav .lin");
    links.forEach(link => {
        link.addEventListener("click", () => {
            console.log(`Você clicou em: ${link.textContent}`);
        });
    });

    // Botão SIGN UP
    const signUpBtn = document.querySelector(".lin6");
    signUpBtn.addEventListener("click", () => {
        alert("Página de cadastro em breve!");
    });

    // Botão entrar
    const entrarBtn = document.querySelector(".imail input[type='button']");
    entrarBtn.addEventListener("click", () => {
        const email = document.getElementById("email").value.trim();
        const senha = document.querySelector("input[type='text']").value.trim();

        if (email === "" || senha === "") {
            alert("Preencha todos os campos!");
        } else if (!email.includes("@")) {
            alert("Digite um e-mail válido!");
        } else {
            alert(`Bem-vindo, ${email}!`);
        }
    });
});