const defaultColors = ["#EFAAAB", "#6CB5DF", "#E9E582"];
let addNoteContextDiv = document.querySelector(".add-note-context");
let mainPartDiv = document.querySelector(".main-part");

addNoteContextDiv.addEventListener("click", function (e) {
    let eachNote = document.createElement("div");
    eachNote.className = "each-note";
    let eachNoteContext = `
                <textarea placeholder="Enter the Note...."></textarea>
                <i class='bx bxs-trash delete-btn'></i>
    `;
    eachNote.innerHTML = eachNoteContext;

    // Assign background color based on the clicked button
    if (e.target.className === "primary-color") {
        eachNote.style.backgroundColor = defaultColors[0];
        mainPartDiv.appendChild(eachNote);
    } else if (e.target.className === "secondary-color") {
        eachNote.style.backgroundColor = defaultColors[1];
        mainPartDiv.appendChild(eachNote);
    } else if (e.target.className === "third-color") {
        eachNote.style.backgroundColor = defaultColors[2];
        mainPartDiv.appendChild(eachNote);
    } else if (e.target.id === "custom-color-value") {
        let inputColor = document.getElementById("custom-color-value");
        inputColor.addEventListener(
            "change",
            () => {
                eachNote.style.backgroundColor = inputColor.value;
            },
            { once: true }
        );
        mainPartDiv.appendChild(eachNote);
    }

    let deleteBtn = eachNote.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", function () {
        mainPartDiv.removeChild(eachNote); // Remove this specific note
    });
});
