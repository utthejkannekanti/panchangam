/* ==========================================
   SIMPLE PANCHANG POSTER
========================================== */

const inputText = document.getElementById("inputText");

const posterText = document.getElementById("posterText");

const generateBtn = document.getElementById("generateBtn");

const downloadBtn = document.getElementById("downloadBtn");

/* ==========================================
   GENERATE POSTER
========================================== */

generateBtn.addEventListener("click", () => {

    const text = inputText.value.trim();

    if (text === "") {

        alert("Please paste today's Panchang.");

        inputText.focus();

        return;

    }

    posterText.textContent = text;

});

/* ==========================================
   DOWNLOAD PNG
========================================== */

downloadBtn.addEventListener("click", () => {

    html2canvas(document.getElementById("poster"), {

        backgroundColor: "#FFFDF8",

        scale: 2,

        useCORS: true

    }).then(canvas => {

        const link = document.createElement("a");

        const today = new Date();

        const fileName =
            "Panchang-" +
            today.getFullYear() + "-" +
            String(today.getMonth() + 1).padStart(2, "0") + "-" +
            String(today.getDate()).padStart(2, "0") +
            ".png";

        link.download = fileName;

        link.href = canvas.toDataURL("image/png");

        link.click();

    });

});

/* ==========================================
   AUTO FOCUS
========================================== */

window.onload = () => {

    inputText.focus();

};