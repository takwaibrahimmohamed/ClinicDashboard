
window.onload = ()=>{

  const desktopNavItems = document.querySelectorAll(".report_nav .nav-item");
  function handleNavigation(target) {
    desktopNavItems.forEach((item) => {
      item.classList.remove("active");
      
    });
    let activeNavItem = document.querySelector(`.report_nav .nav-item[data-target='${target}']`);
        if (activeNavItem) {
            activeNavItem.classList.add("active");
        }
          document.querySelectorAll(".report_content").forEach((section) => {
          section.classList.remove("active");
         });
      document.getElementById(target).classList.add("active");
      page_name.innerHTML =`report » <span>${target}</span>`

  }
  desktopNavItems.forEach((link) => {
    page_name.innerHTML =`report » <span>Treatments</span>`
    link.addEventListener("click", function () {
        handleNavigation(this.getAttribute("data-target"));
    });
});

mobileNav.addEventListener("change", function () {
  
  handleNavigation(this.value);
});

  function handleScreenResize() {
    if (window.innerWidth < 768) {
      desktopNavItems.forEach((link) => {
        link.removeEventListener("click", function () {
            handleNavigation(this.getAttribute("data-target"));
        });
    });
    }
    else{
      desktopNavItems.forEach((link) => {
        if (!link.hasAttribute("onclick")) {
            link.addEventListener("click", function () {
                handleNavigation(this.getAttribute("data-target"));
            });
        }
    });
    }
  }
  handleScreenResize();
  window.addEventListener("resize", handleScreenResize);
  filters_btn.setAttribute("data-bs-target", `#filters_Treatments`);
}

  const select = document.querySelectorAll("select")
const inputs = document.querySelectorAll(".form-control");

select.forEach(select => {
  if(select.getAttribute("id") != "mobileNav"){
    select.addEventListener("change", function (e) {
       
      const  save_btn = this.parentElement.parentElement.parentElement.parentElement.querySelectorAll(".modal-footer .report_btn")||
      this.parentElement.parentElement.parentElement.parentElement.querySelector(".modal-footer .save_report")||
      this.parentElement.parentElement.parentElement.parentElement.querySelector(".modal-footer .add_report")||
      this.parentElement.parentElement.parentElement.parentElement.querySelector(".reportHours ")
   console.log(save_btn)
      const  clear_btn =this.parentElement.parentElement.querySelector(".clear_btn")||
       this.parentElement.parentElement.parentElement.parentElement.querySelector(".delete ")
       
       const incom_total_price = this.parentElement.parentElement.parentElement.querySelector(".price")
  ||this.parentElement.parentElement.parentElement.parentElement.querySelector(".price")
      if (this.value.trim() !== "") {
          this.classList.add("selected");
          save_btn.length!==0&&(save_btn.length>1?
          save_btn.forEach((item)=>{
            item.classList.add("selected")
          
          })
          : save_btn[0]&&(save_btn[0].classList.add("selected")))
          clear_btn&&(clear_btn.classList.add("selected"))
          incom_total_price && incom_total_price.classList.add("selected")
         
        } else {
         
          this.classList.remove("selected");
          save_btn.length!==0&&(save_btn.length>1?
            save_btn.forEach((item)=>{
              item.classList.remove("selected")
            })
            : save_btn[0]&&(save_btn[0].classList.remove("selected")))
          clear_btn&&(clear_btn.classList.remove("selected"))
          incom_total_price && incom_total_price.classList.remove("selected")
        }

  })
  }
  
  
})

inputs.forEach(input => {
  input.addEventListener("input", function (e) {
    e.preventDefault()
        console.log(this)
        const  save_btn = this.parentElement.parentElement.parentElement.parentElement.querySelectorAll(".modal-footer .report_btn")||
        this.parentElement.parentElement.parentElement.parentElement.querySelector(".modal-footer .save_report")||
        this.parentElement.parentElement.parentElement.parentElement.querySelector(".modal-footer .add_report")||
        this.parentElement.parentElement.parentElement.parentElement.querySelector(".reportHours ")
        const  clear_btn = this.parentElement.parentElement.querySelector(".clear_btn")||
        this.parentElement.parentElement.parentElement.parentElement.querySelector(".delete ")
        const incom_total_price = this.parentElement.parentElement.parentElement.querySelector(".price")
    ||this.parentElement.parentElement.parentElement.parentElement.querySelector(".price")
        console.log(save_btn)
        if (this.value !== "") {
            this.classList.add("selected");
            save_btn.length!==0&&(save_btn.length>1?
              save_btn.forEach((item)=>{
                item.classList.add("selected")
              })
              : save_btn[0]&&(save_btn[0].classList.add("selected")))
           
            clear_btn&&(clear_btn.classList.add("selected"))
            incom_total_price && incom_total_price.classList.add("selected")
          } else {
           
            this.classList.remove("selected");
            save_btn.length!==0&&(save_btn.length>1?
              save_btn.forEach((item)=>{
                item.classList.remove("selected")
              })
              : save_btn[0]&&(save_btn[0].classList.remove("selected")))
            clear_btn&&(clear_btn.classList.remove("selected"))
            incom_total_price && incom_total_price.classList.remove("selected")
          }

    })
})

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

/////
const filters_btn = document.querySelector(".report_nav .mobile_filters_btn")
mobileNav.addEventListener("change", function () {
  filters_btn.setAttribute("data-bs-target", `#filters_${this.value}`);
  console.log(this.value)
    })


