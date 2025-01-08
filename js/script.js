// Seleção de elementos
const buttons = document.querySelectorAll("#img-picker li");
const images = document.querySelector("#product-image");

//Funções


//Eventos
buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log(e)
        
        buttons.forEach((btn) => {
            btn.querySelector(".color").classList.remove("selected");
        });

        const button = e.target;

        const id = button.getAttribute("id");

        button.querySelector(".color").classList.add("selected")

        images.classList.add("changing")

        images.setAttribute("src", `img/iphone_${id}.jpg`)

        setTimeout(() => {
            images.classList.toggle("changing")
        }, 200)
    })
})