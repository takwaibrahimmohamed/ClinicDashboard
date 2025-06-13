const filter_btn = document.querySelectorAll(".filter button")
filter_btn.forEach((btn)=>{
 btn.addEventListener('click',()=>{
    const  clear_btn = btn.parentElement.parentElement.
    parentElement.querySelector(".clear_btn")
    btn.classList.toggle("active")
   if(btn.classList.contains("active")){
    clear_btn&&(clear_btn.classList.add("selected"))
   }
    else{
        clear_btn&&(clear_btn.classList.remove("selected"))
    }
 })
})
const select = document.querySelectorAll("select");
const inputs = document.querySelectorAll("input");
select.forEach(select => {
    select.addEventListener("change", function (e) {
        const  save_btn = this.parentElement.parentElement.parentElement.
        parentElement.querySelector(".modal-footer .appoint_btn")
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
console.log(inputs)
inputs.forEach(input => {
  input.addEventListener("input", function (e) {
    
        const  save_btn = this.parentElement.parentElement.parentElement.
        parentElement.querySelector(".modal-footer .appoint_btn")
        const  clear_btn = this.parentElement.parentElement.parentElement.
        parentElement.querySelector(".clear_btn")
        console.log(save_btn)
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
