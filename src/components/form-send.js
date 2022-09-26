const sendBtn = document.getElementById("send-btn");

const send = () => {
    sendBtn.addEventListener("click", () => {
        const send = document.getElementById("form-results");
        if (document.querySelector(form) == "hidden") {
            send.classList.toggle("hidden")
        }else {
            ""
        }
    });
}

export default send