document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function() {
    document.getElementById('loading').style.opacity = '0';
    setTimeout(function() {
      document.getElementById('loading').style.display = 'none';
      document.querySelector('.ops').style.display = 'block';
      setTimeout(function() {
        document.querySelector('.ops').style.opacity = '1';
      }, 50);
    }, 1000);
  }, 2000);
  // pengecekan form page 1
  document.getElementById("buttons").addEventListener("click", function () {
    const formFields = document.querySelectorAll("#first-form .form-control");
    let allFilled = true;

    formFields.forEach(function (field) {
      if (field.value === "") {
        allFilled = false;
      }
    });

    if (allFilled) {
      document.getElementById("second-page").style.display = "block";
      // Display success toast (if needed)
    } else {
      const toastElement = document.getElementById("liveToast");
      const toast = new bootstrap.Toast(toastElement);
      toast.show();
    }
  });
  const questionGroups = document.querySelectorAll(".question-group");
  questionGroups.forEach((group) => {
    const radios = group.querySelectorAll('input[type="radio"]');
    radios.forEach((radio) => {
      radio.addEventListener("change", function () {
        const groupName = this.name;
        if (this.checked) {
          group.querySelectorAll("label.box").forEach((label) => {
            label.classList.remove("active");
            const input = label.querySelector('input[type="text"]');
            if (input) {
              input.disabled = true;
            }
          });
          const selectedLabel = group.querySelector(`label[for="${this.id}"]`);
          selectedLabel.classList.add("active");
          const input = selectedLabel.querySelector('input[type="text"]');
          if (input) {
            input.disabled = false;
            input.focus();
          }
        }
      });
    });
  });

  // tabel
  document.querySelectorAll('input[type="radio"]').forEach((radio) => {
    radio.addEventListener("change", function () {
      const groupName = this.name;
      const allInGroup = document.querySelectorAll(
        `input[name="${groupName}"]`
      );

      // Remove 'active' class from all labels in the group
      allInGroup.forEach((radio) => {
        const label = document.querySelector(`label[for="${radio.id}"]`);
        if (label) {
          label.classList.remove("active");
        }
      });

      // Add 'active' class to the selected label
      const selectedLabel = document.querySelector(`label[for="${this.id}"]`);
      if (selectedLabel) {
        selectedLabel.classList.add("active");
      }
    });
  });
  // Handle all checkbox groups
  const checkboxGroups = document.querySelectorAll(".check-question-group");
  checkboxGroups.forEach((group) => {
    const checkboxes = group.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", function () {
        const label = group.querySelector(`label[for="${this.id}"]`);
        if (this.checked) {
          label.classList.add("active");
        } else {
          label.classList.remove("active");
        }

        // Handle input text inside the same label
        const input = label.querySelector('input[type="text"]');
        if (input) {
          if (this.checked) {
            input.disabled = false;
            input.focus();
          } else {
            input.disabled = true;
          }
        }
      });
    });
  });
});
