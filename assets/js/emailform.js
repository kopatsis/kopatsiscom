document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("submitButton")
    .addEventListener("click", function (e) {
      e.preventDefault();

      const form = document.getElementById("contactForm");
      const formData = new FormData(form);
      const formObj = {};
      formData.forEach((value, key) => {
        formObj[key] = value.trim();
      });

      if (!formObj.name) {
        document.getElementById("errorMessage").style.display = "block";
        document.getElementById("errorMessage").textContent =
          "Please fill out your name.";
        return;
      }
      if (!formObj.email) {
        document.getElementById("errorMessage").style.display = "block";
        document.getElementById("errorMessage").textContent =
          "Please fill out your email.";
        return;
      }
      if (!formObj.subject) {
        document.getElementById("errorMessage").style.display = "block";
        document.getElementById("errorMessage").textContent =
          "Please fill out the subject.";
        return;
      }
      if (!formObj.comment) {
        document.getElementById("errorMessage").style.display = "block";
        document.getElementById("errorMessage").textContent =
          "Please fill out your message.";
        return;
      }

      document.querySelector(".contact-form").style.display = "none";
      document.getElementById("loadingMessage").style.display = "block";
      document.getElementById("errorMessage").style.display = "none";
      document.getElementById("successMessage").style.display = "none";

      const postURL = "https://emaildrop.kopatsis.com/contact"

      fetch(postURL, {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (response.status === 204) {
            document.querySelector(".contact-form").style.display = "none";
            document.getElementById("successMessage").style.display = "block";
          } else {
            return response.json().then((data) => {
              if (data.error) {
                document.getElementById("errorMessage").style.display = "block";
                document.getElementById("errorMessage").textContent =
                  data.error;
              } else {
                document.getElementById("errorMessage").style.display = "block";
                document.getElementById("errorMessage").textContent =
                  "Sorry, I'm unable to process your form submission request at the moment. Please email me directly, thanks :).";
              }
            });
          }
        })
        .catch(() => {
          document.getElementById("loadingMessage").style.display = "none";
          document.querySelector(".contact-form").style.display = "none";
          document.getElementById("errorMessage").style.display = "block";
          document.getElementById("errorMessage").textContent =
            "Sorry, I'm unable to process your form submission request at the moment. Please email me directly, thanks :).";
        }).finally(() => {
            document.getElementById("loadingMessage").style.display = "none";
        });
    });
});
