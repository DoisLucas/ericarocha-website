imageSelected = 0;
imagesCount = 3;

window.addEventListener("scroll", function () {
    let navArea = document.getElementById("navArea");

    if (window.pageYOffset > 0) {
        navArea.classList.add("is-sticky");
    } else {
        navArea.classList.remove("is-sticky");
    }
});

const links = document.querySelectorAll("ul a");

for (const link of links) {
    console.log(link);
    link.addEventListener("click", clickHandler);
}

document.getElementById('tel').addEventListener('keypress', (e) => mascaraTelefone(e.target.value)) // Dispara quando digitado no campo
document.getElementById('tel').addEventListener('change', (e) => mascaraTelefone(e.target.value)) // Dispara quando autocompletado o campo

const mascaraTelefone = (valor) => {
    valor = valor.replace(/\D/g, "")
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2")
    valor = valor.replace(/(\d)(\d{4})$/, "$1-$2")
    tel.value = valor
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
        top: offsetTop - 90,
        behavior: "smooth",
    });
}

function changeSlideImage(index) {
    document.getElementById("image-slide-item").src = `./assets/slide/slide-${index}.png`;
    imageSelected = index;
    updateIndicators(index)
}

function updateIndicators(index) {
    document.getElementsByClassName("window-actions-item")[0].style.opacity = "0.5";
    document.getElementsByClassName("window-actions-item")[1].style.opacity = "0.5";
    document.getElementsByClassName("window-actions-item")[2].style.opacity = "0.5";
    document.getElementsByClassName("window-actions-item")[index].style.opacity = "1";
}

function openZap() {
    var name = document.getElementById('name').value;
    var tel = document.getElementById('tel').value;
    var email = document.getElementById('email').value;

    if (name === "" || tel === "" || email === "") {
        alert("Por favor, preencha todos os campos!")
        return;
    }


    window.open(`https://api.whatsapp.com/send?phone=557981070661&text=Olá, vim do site e gostaria de saber de mais detalhes! Nome: ${name}; Email: ${email}; Tel: ${tel}.`);
}

function openZapNoArgs() {
    window.open(`https://api.whatsapp.com/send?phone=557981070661&text=Olá, vim do site e gostaria de saber de mais detalhes dos empreendimentos!`);
}