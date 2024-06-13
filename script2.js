document.getElementById("formular").addEventListener(
  "submit",
  function (event) {
    event.preventDefault();
    event.stopPropagation();

    var form = event.target;
    var checkboxes = form.querySelectorAll(".form-check-input");
    var feedback = form.querySelector("#checkbox-feedback");
    var valid = false;

    // Verificar si al menos uno de los checkboxes está seleccionado
    checkboxes.forEach(function (checkbox) {
      if (checkbox.checked) {
        valid = true;
      }
    });

    if (valid) {
      checkboxes.forEach(function (checkbox) {
        checkbox.classList.add("is-valid");
        checkbox.classList.remove("is-invalid");
      });
      feedback.style.display = "none";
    } else {
      checkboxes.forEach(function (checkbox) {
        checkbox.classList.remove("is-valid");
        checkbox.classList.add("is-invalid");
      });
      feedback.style.display = "block";
    }

    // Si el formulario es válido, puedes enviarlo manualmente
    if (form.checkValidity() && valid) {
      form.classList.add("was-validated");
      form.submit();
    } else {
      form.classList.add("was-validated");
    }
  },
  false
);

