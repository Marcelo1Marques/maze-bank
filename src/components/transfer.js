const transferBtn = document.getElementById("transfer-btn");

const transfer = () => {
    transferBtn.addEventListener("click", () => {
        const form = document.getElementById("transfer");
        form.classList.toggle("hidden")
    });
}

export default transfer