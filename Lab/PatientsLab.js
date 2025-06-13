const selects = document.querySelectorAll("select");
const inputs = document.querySelectorAll(".form-control");

function getContainerElements(element) {
  const modal = element.closest(".modal");
  const form = element.closest("form");

  const container = modal || form;
  if (!container) return null; 

  const footer = container.querySelector(".modal-footer") || container.querySelector(".form-footer");
  const clearBtn = container.querySelector(".clear_btn");
  
  return {
      saveBtn: footer?.querySelector(".patientLab_btn, .save_patientLab, .add_patientLab"),
      clearBtn,
  };
}

function toggleSelectedClass(element) {
  const containerElements = getContainerElements(element);
  if (!containerElements) return; 

  const { saveBtn, clearBtn } = containerElements;
  const isNotEmpty = element.value.trim() !== "";

  element.classList.toggle("selected", isNotEmpty);
  saveBtn?.classList.toggle("selected", isNotEmpty);
  clearBtn?.classList.toggle("selected", isNotEmpty);
}

selects.forEach(select => {
  select.addEventListener("change", function () {
      toggleSelectedClass(this);
  });
});

inputs.forEach(input => {
  input.addEventListener("input", function () {
      toggleSelectedClass(this);
  });
});