document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("submitButton").addEventListener("click", function (e) {
      e.preventDefault();
  
      const form = document.getElementById("contactForm");
      const formData = new FormData(form);
      const formObj = {};
      formData.forEach((value, key) => {
        formObj[key] = value.trim();
      });
  
      if (!formObj.name) {
        document.getElementById("errorMessage").style.display = "block";
        document.getElementById("errorMessage").textContent = "Please fill out your name.";
        return;
      }
      if (!formObj.email) {
        document.getElementById("errorMessage").style.display = "block";
        document.getElementById("errorMessage").textContent = "Please fill out your email.";
        return;
      }
      if (!formObj.subject) {
        document.getElementById("errorMessage").style.display = "block";
        document.getElementById("errorMessage").textContent = "Please fill out the subject.";
        return;
      }
      if (!formObj.comment) {
        document.getElementById("errorMessage").style.display = "block";
        document.getElementById("errorMessage").textContent = "Please fill out your message.";
        return;
      }
  
      document.querySelector(".contact-form").style.display = "none";
      document.getElementById("loadingMessage").style.display = "block";
      document.getElementById("errorMessage").style.display = "none";
      document.getElementById("successMessage").style.display = "none";
  
      console.log(formObj);
  
      setTimeout(() => {
        document.getElementById("loadingMessage").style.display = "none";
        document.querySelector(".contact-form").style.display = "none";
        document.getElementById("successMessage").style.display = "block";
      }, 1500);
    });
  });
