console.log("interface.js");

// script for certain UI elements

// date UI
const dateText = document.getElementById("ui_dateTimeUI");

function updateTimeText() {
    const date = new Date();

    dateText.innerText =
        date.toLocaleDateString("en-US", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        })
        + " • " +
        date.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
        });
}

updateTimeText();
setInterval(updateTimeText, 3000);

// name editor
const nameText = document.getElementById("ui_schemaName");

nameText.addEventListener("click", () => {
    if (nameText.innerText === "> SCHEMA NAME <") {
        nameText.innerText = "";
    }

    nameText.setAttribute("contenteditable", "true");
    nameText.focus();
});

nameText.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        nameText.removeAttribute("contenteditable");
        nameText.blur();
    }
});

nameText.addEventListener("focusout", (e) => {
    if (nameText.innerText.trim() === "") {
        nameText.innerText = "> SCHEMA NAME <";
    }
})