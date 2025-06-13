const filter_btn = document.querySelectorAll(".filter button")
console.log(filter_btn)
filter_btn.forEach((btn)=>{
 btn.addEventListener('click',()=>{
    btn.classList.toggle("active")
 })
})
document.addEventListener("DOMContentLoaded", function () {
    const mainNavItems = document.querySelectorAll(".navigate_items .nav-item");
    const subNavItems = document.querySelectorAll(".nav_content .nav-item");
    const mainContentSections = document.querySelectorAll(".medical_content");
    const subContentSections = document.querySelectorAll(".Recordscontent");

    function handleNavigation(navItems, contentSections) {
        navItems.forEach(item => {
            item.addEventListener("click", function () {
                navItems.forEach(nav => nav.classList.remove("active"));
                contentSections.forEach(section => section.classList.remove("active"));

                this.classList.add("active");
                console.log(this)
                const targetId = this.getAttribute("data-target");
                const targetContent = document.getElementById(targetId);
                if (targetContent) {
                    targetContent.classList.add("active");
                 
                }
            });
        });
    }

    handleNavigation(mainNavItems, mainContentSections);
    handleNavigation(subNavItems, subContentSections);
});

  /////////////////
  const select = document.querySelectorAll("select")
  const inputs = document.querySelectorAll(".form-control")
  const checkboxes = document.querySelectorAll(".form-check-input");

    select.forEach(select => {
        select.addEventListener("change", function (e) {
          
            const modal = this.closest(".modal") || this.closest("form");
      
        if (!modal) return;
        
        const save_btns = modal.querySelectorAll(".modal-footer .save_record");

         const clear_btn = this.closest(".parent-class")?.querySelector(".clear_btn") || modal.querySelector(".delete");
            const incom_total_price = modal.querySelector(".price");
        console.log(incom_total_price)
      if (this.value.trim() !== "") {
        this.classList.add("selected");

        if (save_btns.length > 0) {
            save_btns.forEach(btn => btn.classList.add("selected"));
        }

        clear_btn && clear_btn.classList.add("selected");
        
        incom_total_price && incom_total_price.classList.add("selected")
    } else {
        this.classList.remove("selected");

        if (save_btns.length > 0) {
            save_btns.forEach(btn => btn.classList.remove("selected"));
        }

        clear_btn && clear_btn.classList.remove("selected");
        incom_total_price && incom_total_price.classList.remove("selected")
    }
        })
      
      
    })
    
    inputs.forEach(input => {
      input.addEventListener("input", function (e) {
        e.preventDefault()
        const modal = this.closest(".modal") || this.closest("form");
        const incom_total_price = modal.querySelector(".price");
        console.log(incom_total_price)
        if (!modal) return;
        
        const save_btns = modal.querySelectorAll(".modal-footer .save_record");
    
        const clear_btn = modal.querySelector(".clear_btn, .delete");
   
        if (this.value.trim() !== "") {
          this.classList.add("selected");

          if (save_btns.length > 0) {
              save_btns.forEach(btn => btn.classList.add("selected"));
          }

          clear_btn && clear_btn.classList.add("selected");
          incom_total_price && incom_total_price.classList.add("selected")
      } else {
          this.classList.remove("selected");

          if (save_btns.length > 0) {
              save_btns.forEach(btn => btn.classList.remove("selected"));
          }

          clear_btn && clear_btn.classList.remove("selected");
          incom_total_price && incom_total_price.classList.remove("selected")
      }
        })
    })
  

    const selectButton = document.getElementById("customSelectButton");
    const selectItems = document.querySelectorAll("#customSelectList .dropdown-item");

    selectItems.forEach(item => {
        item.addEventListener("click", function () {
            selectButton.innerHTML = this.innerHTML; 
        });
    });


    const selectionModeBtn = document.querySelector(".SelectionMood");

    const actionButtons = document.querySelector(".actionButtons");
    selectionModeBtn.addEventListener("click", function() {
       
        selectionModeBtn.classList.add("d-none");  
        actionButtons.classList.remove("d-none");
    });

    closeBtn.addEventListener("click", function() {
        actionButtons.classList.add("d-none");
        selectionModeBtn.classList.remove("d-none");
    });

    let toggleSwitch = document.getElementById("ChartoggleSwitch");
    let ChartoggleLabel = document.getElementById("ChartoggleLabel");
    let adult = document.querySelector(".adult")
    let pedo = document.querySelector(".pedo")
   toggleSwitch.addEventListener('change',(e)=>{
    console.log(e.target.checked)
    if (e.target.checked) {
        console.log(this)
        adult.classList.remove("hiddenChart");
        pedo.classList.add("hiddenChart");
        ChartoggleLabel.textContent = "Adult"
    } else {
        adult.classList.add("hiddenChart");
        pedo.classList.remove("hiddenChart");
        ChartoggleLabel.textContent = "Pedo"
    }
   })