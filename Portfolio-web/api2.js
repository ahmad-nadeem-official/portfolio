document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form");

    form.addEventListener("submit", async (e) => {
        e.preventDefault(); // Prevent page reload

        // Collect data from form
    const formData = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("e-mail").value.trim(),
        subject: document.getElementById("subject").value.trim(),
        message: document.getElementById("mess").value.trim()
    };


        try {
            const response = await fetch('https://ahmadnadeem.vercel.app/contact', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert("Message sent successfully!");
                form.reset();
            } else {
                const errorData = await response.json();
                console.error("Server Error:", errorData);
                alert("There was an error submitting your message.");
            }
        } catch (error) {
            console.error("Network Error:", error);
            alert("Failed to send message. Please try again later.");
        }
    });
});



// That grabs the first .form-group div, not the <form>. A div doesn’t fire a submit event, so your listener never runs.

//getElementById does not use # (that’s only for CSS selectors).
//Also, your <textarea> has id="mess", but in JS you’re calling #message.

//CORS (Cross-Origin Resource Sharing) dragon. If your frontend is served from a different origin (domain, protocol, or port) than your backend, the browser will block requests unless the backend explicitly allows them. You need to configure your Flask backend to handle CORS requests. You can use the Flask-CORS extension for this:
//from flask_cors import CORS
//app = Flask(__name__)
//CORS(app)