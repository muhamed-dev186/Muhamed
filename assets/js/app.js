const navbar = document.querySelector('.navbar')

window.addEventListener('scroll', () => {
    if(this.scrollY > 0) {
        navbar.classList.remove('py-4')
        navbar.classList.add('shadow', 'py-3')
    } else {
        navbar.classList.add('py-4')
        navbar.classList.remove('shadow', 'py-3')
    }
})

// AOS
AOS.init({
    duration: 700
});

// Include the EmailJS script (if not already added)
const script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
document.head.appendChild(script);

script.onload = () => {
    // Initialize EmailJS with your Public Key
    emailjs.init("1nEIPdk3VWo8Axfas"); // Replace with your actual public key

    // Form handling
    const form = document.getElementById("contact");
    const responseMessage = document.getElementById("response-message");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Get form values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        // Send email via EmailJS
        emailjs.send("service_kgs3v3m","template_8mc8gfe", {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
        })
        .then(() => {
            responseMessage.textContent = "Message sent successfully!";
            responseMessage.style.color = "green";
            form.reset();
        })
        .catch((error) => {
            responseMessage.textContent = "Error sending message. Try again.";
            responseMessage.style.color = "red";
            console.error("Error:", error);
        });
    });
};
