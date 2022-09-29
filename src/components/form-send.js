const sendBtn = document.getElementById("send-btn");
const nameInput = document.getElementById("name");
const numberInput = document.getElementById("number");
const emailInput = document.getElementById("email");

const send = () => {
    sendBtn.addEventListener("click", () => {
        if (nameInput.value.length===0||numberInput.value.length===0||emailInput===0) {
            
        }
    })
};



export default send