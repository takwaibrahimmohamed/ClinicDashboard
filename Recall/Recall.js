// wrap all in this initTodoPage function 

const select = document.querySelectorAll("select");
const inputs = document.querySelectorAll(".form-control");
select.forEach(select => {
    select.addEventListener("change", function (e) {
       
        const  save_btn = this.parentElement.parentElement.parentElement.
        parentElement.querySelector(".modal-footer .recall_btn")||
        this.parentElement.parentElement.parentElement.querySelector(".modal-footer .save_recall")||
        this.parentElement.parentElement.parentElement.querySelector(".modal-footer .add_recall")

        const  clear_btn = this.parentElement.parentElement.parentElement.
        parentElement.querySelector(".clear_btn")
        console.log(save_btn)
        if (this.value.trim() !== "") {
            this.classList.add("selected");
            save_btn&&(save_btn.classList.add("selected"))
            clear_btn&&(clear_btn.classList.add("selected"))
          
          } else {
           
            this.classList.remove("selected");
            save_btn&&(save_btn.classList.remove("selected"))
            clear_btn&&(clear_btn.classList.remove("selected"))
          
          }

    })
})

inputs.forEach(input => {
  input.addEventListener("input", function (e) {
    e.preventDefault()
        
        const  save_btn = this.parentElement.parentElement.parentElement.querySelector(".modal-footer .save_recall")||
        this.parentElement.parentElement.parentElement.querySelector(".modal-footer .add_recall")||

        console.log(this.parentElement.parentElement.parentElement)
        console.log(save_btn)
        const  clear_btn = this.parentElement.parentElement.parentElement
        .querySelector(".clear_btn")
        if (this.value !== "") {
            this.classList.add("selected");
            save_btn&&(save_btn.classList.add("selected"))
            clear_btn&&(clear_btn.classList.add("selected"))
          
          } else {
           
            this.classList.remove("selected");
            save_btn&&(save_btn.classList.remove("selected"))
            clear_btn&&(clear_btn.classList.remove("selected"))
          
          }

    })
})