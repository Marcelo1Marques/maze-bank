export const formBtn = document.getElementById("form-btn");

formBtn.addEventListener("click", () => {
    const form = document.getElementById("form");
    if (form.class.display === "hidden") {
        form.class.display = "block";
    }
    else {
        form.class.display = "hidden";
    }
});
