
window.onload = ()=>{
    const mobileNav = document.getElementById("mobileNav");
    const desktopNavItems = document.querySelectorAll(".Setting_nav .nav-item");
    const MobileNavItems = document.querySelectorAll(".filter_treatment .nav-item");
    MobileNavItems.forEach((item) => {
    
      item.addEventListener('click',(e)=>{
        target = e.target.parentElement.getAttribute("data-target")
        addingbutton(target)
        MobileNavItems.forEach((navitem) => {
          navitem.classList.remove("active");
        })
             let activeNavItem_treatment = document.querySelector(`.filter_treatment .nav-item[data-target='${target}']`);
              if (activeNavItem_treatment) {
                activeNavItem_treatment.classList.add("active");
              }
              document.querySelectorAll(".treatment_content").forEach((section) => {
                section.classList.remove("active");
            });
            document.getElementById(target).classList.add("active");
      }) 
    
      });
    function handleNavigation(target) {
      desktopNavItems.forEach((item) => {
        item.classList.remove("active");
      });
      let activeNavItem = document.querySelector(`.Setting_nav .nav-item[data-target='${target}']`);
          if (activeNavItem) {
              activeNavItem.classList.add("active");
          }
          document.querySelectorAll(".Setting_content").forEach((section) => {
            section.classList.remove("active");
        });
        document.getElementById(target).classList.add("active");
    
        
        page_name.innerHTML =`Setting » <span>${target}</span>`
  
    }
    desktopNavItems.forEach((link) => {
      
      page_name.innerHTML =`Setting » <span>Lab</span>`
      link.addEventListener("click", function () {
          handleNavigation(this.getAttribute("data-target"));
      });
  });
  
  mobileNav.addEventListener("change", function () {
    if(this.value == "Recall"){
      console.log(this.value)
      mobileNav.style.setProperty("width", "71%", 'important');
      mobileNav.style.setProperty("padding-right", "2.25rem", 'important');
      mobileNav.classList.add("custom_width")
     }
    if(this.value.length >6 && this.value.length<=8 ){
      mobileNav.style.setProperty("width", "59%", 'important');
    
      mobileNav.style.setProperty("padding-right", "2rem", 'important');
     } 
     else if (this.value.length<=6){
        mobileNav.style.width ="45%"
       
      mobileNav.style.setProperty("padding-right", "2rem", 'important');
     }
     else if(this.value.length >8){
      console.log(this.value =="Recall")
      mobileNav.style.setProperty("width", "71%", 'important');
      mobileNav.style.setProperty("padding-right", "2.25rem", 'important');
      mobileNav.classList.add("custom_width")
  
     } 
   else{
    mobileNav.classList.remove("custom_width")
  
   }
    handleNavigation(this.value);
    addingbutton(this.value)
 
  });
  
  function addingbutton(target){
   if(target == "Banks"){
    target = "CountryBank"
   }
    if(target =="Treatments"){
      target = "Plan"
    }
    else{
     
      if(target =="TreatmentsPlan"){
        target = "Plan"
      }
     else if (target === "TreatmentsGroups") {
         target = "Group";
       } 
       else if(target == "TreatmentNoteTemplates") {
         target = "Note";
     }
     else if(target =="Medical Record" || target == "Questions"){
      target = "Questions"
    }
     else if(target =="AllergyOptions"){
      target = "Allergy"
    }
     else if(target =="DocumentTemplate"){
      target = "Document"
    }
    }
    const adding_btn = document.querySelector(".mobile .Adding_btn")

    adding_btn.innerHTML =`  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M7.42188 2.5C7.42188 2.267 7.233 2.07812 7 2.07812C6.767 2.07812 6.57812 2.267 6.57812 2.5V6.57812H2.5C2.267 6.57812 2.07812 6.767 2.07812 7C2.07812 7.233 2.267 7.42188 2.5 7.42188H6.57812V11.5C6.57812 11.733 6.767 11.9219 7 11.9219C7.233 11.9219 7.42188 11.733 7.42188 11.5V7.42188H11.5C11.733 7.42188 11.9219 7.233 11.9219 7C11.9219 6.767 11.733 6.57812 11.5 6.57812H7.42188V2.5Z" fill="white"/>
                   </svg> Add ${target}`
    adding_btn.setAttribute(`data-bs-target`, `#Add_${target}`);
  
   if(adding_btn.getAttribute("data-bs-target") == "#Add_Document"){
    adding_btn.style.display= "none"
    document.querySelector(".mobile .Setting_Lab_btn").style.display= "none"
   }
   else{
     adding_btn.style.display= "block"
      document.querySelector(".mobile .Setting_Lab_btn").style.display= "block"
   }
  }
  
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
  }
  
  
  
    /////////////////
    const select = document.querySelectorAll("select")
  const inputs = document.querySelectorAll(".form-control")
  const checkboxes = document.querySelectorAll(".form-check-input");

    select.forEach(select => {
      if(select.getAttribute("id") != "mobileNav"){
        select.addEventListener("change", function (e) {
          console.log(this.closest("form"))
          const modal = this.closest(".modal ,form") ;

          if (!modal) return;
          const save_btns = modal.querySelectorAll("form .Setting_btn,.modal-footer .Setting_btn, .modal-footer .save_Setting, .modal-footer .add_Setting, .SettingHours");
    const clear_btn = this.closest(".parent-class")?.querySelector(".clear_btn") || modal.querySelector(".delete");
    const incom_total_price = modal.querySelector(".price");
      
            if (this.value.trim() !== "") {
              this.classList.add("selected");

              save_btns.forEach(btn => btn.classList.add("selected"));
              clear_btn && clear_btn.classList.add("selected");
              incom_total_price && incom_total_price.classList.add("selected");

          }  else {
            this.classList.remove("selected");
    
            save_btns.forEach(btn => btn.classList.remove("selected"));
            clear_btn && clear_btn.classList.remove("selected");
            incom_total_price && incom_total_price.classList.remove("selected");
        }
      })
      }
      
      
    })
    
    inputs.forEach(input => {
      input.addEventListener("input", function (e) {
        e.preventDefault()
        const modal = this.closest(".modal") || this.closest("form");
      
        if (!modal) return;
        const save_btns = modal.querySelectorAll("form .Setting_btn,.modal-footer .Setting_btn, .modal-footer .save_Setting, .modal-footer .add_Setting, .SettingHours");
        const clear_btn = modal.querySelector(".clear_btn, .delete");
        const incom_total_price = modal.querySelector(".price");
   
        if (this.value.trim() !== "") {
          this.classList.add("selected");

          if (save_btns.length > 0) {
              save_btns.forEach(btn => btn.classList.add("selected"));
          }

          clear_btn && clear_btn.classList.add("selected");
          incom_total_price && incom_total_price.classList.add("selected");
      } else {
          this.classList.remove("selected");

          if (save_btns.length > 0) {
              save_btns.forEach(btn => btn.classList.remove("selected"));
          }

          clear_btn && clear_btn.classList.remove("selected");
          incom_total_price && incom_total_price.classList.remove("selected");
      }
        })
    })
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", function () {
          const modal = checkbox.closest(".modal"); // Use 'checkbox' instead of 'this'
          console.log(checkbox); // Log the correct checkbox element
  
          if (!modal) return;
  
          const save_btns = modal.querySelectorAll(".modal-footer .Setting_btn, .modal-footer .save_Setting, .modal-footer .add_Setting, .SettingHours");
          const clear_btn = modal.querySelector(".clear_btn, .delete");
  
          if (checkbox.checked) {
              if (save_btns.length > 0) {
                  save_btns.forEach(btn => btn.classList.add("selected"));
              }
              clear_btn && clear_btn.classList.add("selected");
          } else {
              checkbox.classList.remove("selected"); // Use 'checkbox' instead of 'this'
              
              if (save_btns.length > 0) {
                  save_btns.forEach(btn => btn.classList.remove("selected"));
              }
              clear_btn && clear_btn.classList.remove("selected");
          }
      });
  });
  

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
  

  
  // document editor  
  function execCmd(command) {
    if(command =="seen"){
      document.getElementById("editor").classList.toggle("seen")
    }
    document.execCommand(command, false, null);
}
document.getElementById("editor").addEventListener("input", function () {
  const save_btns = document.querySelector("#DocumentTemplate .Setting_btn")
  
  let text = this.innerText.trim();
  console.log("ff",text)
  if (text.length > 0) {
    document.getElementById("editor").classList.add("selected");
    save_btns.classList.add("selected");
  } else {
    document.getElementById("editor").classList.remove("selected");
    save_btns.classList.remove("selected");
  }
})


// collabsed 
document.querySelectorAll('.Permission_card button').forEach(button => {
  button.addEventListener('click', function () {
    this.classList.toggle("rotate")
  });
});
