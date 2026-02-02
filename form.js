const form = document.getElementById("contactForm"); // doit correspondre à l'ID du form
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };

  const response = await fetch("https://formspree.io/f/mrelkyae", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  if (response.ok) {
    successMessage.classList.remove("hidden");
    form.reset();
  } else {
    alert("Une erreur est survenue, veuillez réessayer.");
  }
});
