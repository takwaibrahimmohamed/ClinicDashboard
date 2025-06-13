const filter_btn = document.querySelectorAll(".filter button")
console.log(filter_btn)
filter_btn.forEach((btn)=>{
 btn.addEventListener('click',()=>{
    btn.classList.toggle("active")
 })
})
const selects = document.querySelectorAll("select");
const inputs = document.querySelectorAll(".form-control");

function getContainerElements(element) {
  const modal = element.closest(".modal");
  const form = element.closest("form");

  const container = modal || form;
  if (!container) return null; 

  const footer = container.querySelector(".modal-footer") || container.querySelector(".form-footer");
  const clearBtn = container.querySelector(".clear_btn");
  
  const incom_total_price = container.querySelector(".Orders_total")
  console.log(incom_total_price)
  return {
      saveBtn: footer?.querySelector(".Orders_btn, .save_Orders, .add_Orders"),
      clearBtn,incom_total_price
  };
}

function toggleSelectedClass(element) {
  const containerElements = getContainerElements(element);
  if (!containerElements) return; 

  const { saveBtn, clearBtn,incom_total_price } = containerElements;
  const isNotEmpty = element.value.trim() !== "";

  element.classList.toggle("selected", isNotEmpty);
  saveBtn?.classList.toggle("selected", isNotEmpty);
  clearBtn?.classList.toggle("selected", isNotEmpty);
  incom_total_price?.classList.toggle("selected", isNotEmpty);
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