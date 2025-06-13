const filter_btn = document.querySelectorAll(".filter button")
console.log(filter_btn)
filter_btn.forEach((btn)=>{
 btn.addEventListener('click',()=>{
    btn.classList.toggle("active")
 })
})

const select = document.querySelectorAll("select");
const inputs = document.querySelectorAll(".form-control");
const deleted_image = document.querySelector("#deleted_image")
console.log(deleted_image)
select.forEach(select => {
    select.addEventListener("change", function () {
        const modal = this.closest(".modal"); // Find the closest modal
        if (!modal) return; // Exit if no modal is found
        
        const save_btn = modal.querySelector(".modal-footer .save_patient") ||
                         modal.querySelector(".modal-footer .add_patient");

        const clear_btn = modal.querySelector(".clear_btn");

        if (this.value.trim() !== "") {
            this.classList.add("selected");
            save_btn && save_btn.classList.add("selected");
            clear_btn && clear_btn.classList.add("selected");
            deleted_image && deleted_image.classList.add("selected");
        } else {
            this.classList.remove("selected");
            save_btn && save_btn.classList.remove("selected");
            clear_btn && clear_btn.classList.remove("selected");
            deleted_image && deleted_image.classList.remove("selected");
        }
    });
});

inputs.forEach(input => {
    input.addEventListener("input", function () {
        const modal = this.closest(".modal"); 
        if (!modal) return; 
        
        const save_btn = modal.querySelector(".modal-footer .save_patient") ||
                         modal.querySelector(".modal-footer .add_patient");

        const clear_btn = modal.querySelector(".clear_btn");

        if (this.value.trim() !== "") {
            this.classList.add("selected");
            save_btn && save_btn.classList.add("selected");
            clear_btn && clear_btn.classList.add("selected");
            deleted_image && deleted_image.classList.add("selected");
        } else {
            this.classList.remove("selected");
            save_btn && save_btn.classList.remove("selected");
            clear_btn && clear_btn.classList.remove("selected");
            deleted_image && deleted_image.classList.remove("selected");
        }
    });
});
