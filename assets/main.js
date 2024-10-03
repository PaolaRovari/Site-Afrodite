function Cadastro(event) {

    event.preventDefault();
    
    let nome = document.getElementById("InputNome").value;
    let nascimento = document.getElementById("InputDataNascimento").value;
    let sexo = (document.querySelector('input[name="gender"]:checked') != null) ? document.querySelector('input[name="gender"]:checked').value : "";
    let email = document.getElementById("InputEmail").value;
    let cpf = document.getElementById("InputCpf").value;
    let tel = document.getElementById("InputTelefone").value;
    let senha = document.getElementById("InputSenha").value;




    if (nome == "" || nascimento == "" || sexo == "" || email == "" || cpf == "" || tel == "" || senha == "") {
        document.getElementById("alerta").getElementsByTagName('span')[0].innerHTML = "Preencha os campos obrigatórios";
        document.getElementById("alerta").style.display = "block";
        setTimeout(function () {
            document.getElementById("alerta").animate(
                [
                    { transform: "translateX(550px)" },
                ],
                {
                    duration: 1000,
                    iterations: 1,
                }
            );
        }, 5000);

        setTimeout(function () {
            document.getElementById("alerta").style.display = "none";
        }, 6000);
    }
    else {
        var lista_usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');



        lista_usuarios.push({
            nome: nome,
            nascimento: nascimento,
            sexo: sexo,
            email: email,
            cpf: cpf,
            tel: tel,
            senha: senha,
        });

        localStorage.setItem("usuarios", JSON.stringify(lista_usuarios));

        document.getElementById("alerta").getElementsByTagName('span')[0].innerHTML = "Obrigado por cadastrar";
        document.getElementById("alerta").style.display = "block";
        setTimeout(function () {
            document.getElementById("alerta").animate(
                [
                    { transform: "translateX(550px)" },
                ],
                {
                    duration: 1000,
                    iterations: 1,
                }
            );
        }, 5000);

        setTimeout(function () {
            document.getElementById("alerta").style.display = "none";
        }, 6000);

    }

}

function Logar(event) {

    event.preventDefault();

    localStorage.setItem("logado", false);
    let Email = document.getElementById("InputEmail").value;
    let Senha = document.getElementById("InputSenha").value;
    let existe = false;
    let nome = "";

    let lista_usuarios = JSON.parse(localStorage.getItem('usuarios'));

    if (Email != "" || Senha != "") {
        if (lista_usuarios != null) {
            for (i = 0; i < lista_usuarios.length; i++) {
                if (lista_usuarios[i].email == Email && lista_usuarios[i].senha == Senha) {
                    existe = true;
                    nome = lista_usuarios[i].nome;
                    localStorage.setItem("logado", JSON.stringify(lista_usuarios[i]));

                }
            }
        }
    }
    if (existe) {
        window.location.href = "../Site-Afrodite/home.html";
        document.getElementById("alerta").getElementsByTagName('span')[0].innerHTML = "Seja bem vindo" + " " + nome;
        document.getElementById("alerta").style.display = "block";
        setTimeout(function () {
            document.getElementById("alerta").animate(
                [
                    { transform: "translateX(550px)" },
                ],
                {
                    duration: 1000,
                    iterations: 1,
                }
            );
        }, 5000);

        setTimeout(function () {
            document.getElementById("alerta").style.display = "none";
        }, 6000);
    }
    else {
        document.getElementById("alerta").getElementsByTagName('span')[0].innerHTML = "Usuário não cadastrado";
        document.getElementById("alerta").style.display = "block";
        setTimeout(function () {
            document.getElementById("alerta").animate(
                [
                    { transform: "translateX(550px)" },
                ],
                {
                    duration: 1000,
                    iterations: 1,
                }
            );
        }, 5000);

        setTimeout(function () {
            document.getElementById("alerta").style.display = "none";
        }, 6000);
    }
}