document.addEventListener("DOMContentLoaded", function () {
  const startDateInput = document.getElementById("fecha-inicio");
  const endDateInput = document.getElementById("fecha-fin");
  const adCostDisplay = document.getElementById("ad-cost-display");
  const dailyRate = 55;

  function calculateAdCost() {
    const startDateValue = startDateInput.value;
    const endDateValue = endDateInput.value;

    if (startDateValue && endDateValue) {
      const startDate = new Date(startDateValue + "T00:00:00");
      const endDate = new Date(endDateValue + "T00:00:00");
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (startDate < today) {
        adCostDisplay.textContent =
          "La fecha de inicio no puede ser menor a la fecha actual.";
        return;
      }

      if (endDate >= startDate) {
        const timeDiff = endDate.getTime() - startDate.getTime();
        const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1;
        const totalCost = daysDiff * dailyRate;

        const options = { year: "numeric", month: "numeric", day: "numeric" };
        const startDateFormatted = startDate.toLocaleDateString(
          "es-ES",
          options
        );
        const endDateFormatted = endDate.toLocaleDateString("es-ES", options);

        adCostDisplay.textContent = `Por el periodo desde ${startDateFormatted} hasta ${endDateFormatted} el valor de la publicidad es $${totalCost}`;
      } else {
        adCostDisplay.textContent =
          "La fecha de fin debe ser posterior a la fecha de inicio.";
      }
    } else {
      adCostDisplay.textContent = "";
    }
  }

  startDateInput.addEventListener("change", calculateAdCost);
  endDateInput.addEventListener("change", calculateAdCost);
});

document.getElementById("formulario-publicitar").addEventListener("submit", function (event) {
  let checkBoxPublicitar = document.getElementById("terminos-publicitar");
  if (!checkBoxPublicitar.checked) {
    alert("Debes aceptar los términos antes de enviar el formulario.");
    event.preventDefault();
  }
});

(() => {
  "use strict";

  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

