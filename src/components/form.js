const formBtn = document.getElementById("form-btn");

const form = () => {
    formBtn.addEventListener("click", () => {
        const form = document.getElementById("form");
        form.classList.toggle("hidden")
    });
}

export default form