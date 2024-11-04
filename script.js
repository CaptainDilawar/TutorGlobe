// Function to open WhatsApp link for contacting tutor
function contactTutor(link) {
    window.open(link, "_blank");
}

// Function to download CV of tutor
function downloadCV(filename) {
    const link = document.createElement("a");
    link.href = filename;
    link.download = filename;
    link.click();
}
