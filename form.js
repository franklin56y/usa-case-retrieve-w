emailjs.init("m2bWM261xKbc0wi-A"); // paste your public key here

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  emailjs.send("template_ezxtpkl", "YOUR_TEMPLATE_ID", {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  })
  .then(function(response) {
    document.getElementById("status").textContent = "Message sent!";
  }, function(error) {
    document.getElementById("status").textContent = "Error sending message.";
  });
});