document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Collecting form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Basic validation
    if (!name || !email || !message) {
        displayResponseMessage("Please fill out all fields!", "error");
        return;
    }

    // Simulate form submission (Replace with actual backend logic if needed)
    setTimeout(() => {
        displayResponseMessage("Thank you for reaching out! I'll get back to you soon.", "success");
        document.getElementById("contactForm").reset();
    }, 1000);
});

function displayResponseMessage(message, type) {
    const responseDiv = document.getElementById("responseMessage");
    responseDiv.textContent = message;
    responseDiv.className = type; // Adds "success" or "error" class
}

