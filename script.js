(function () {
  const form = document.querySelector("#add-form");
  const numberA = document.querySelector("#number-a");
  const numberB = document.querySelector("#number-b");
  const output = document.querySelector("#sum-output");

  if (!form || !numberA || !numberB || !output) {
    console.error("Add form is not available.");
    return;
  }

  function formatNumber(value) {
    if (Number.isNaN(value)) {
      return "Not a number";
    }

    const formatter = new Intl.NumberFormat(undefined, {
      maximumFractionDigits: 10,
    });

    return formatter.format(value);
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const a = parseFloat(numberA.value);
    const b = parseFloat(numberB.value);
    const sum = a + b;

    output.textContent = formatNumber(sum);
  });

  form.addEventListener("input", () => {
    output.textContent = "—";
  });
})();
