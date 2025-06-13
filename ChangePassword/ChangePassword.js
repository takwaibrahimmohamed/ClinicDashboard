const inputField = document.getElementById("contact-input");
let change_modal = document.querySelector(".change_modal")
let sumbit_changes =document.querySelector(".sumbit_changes a")
let _verify_emailorphone = document.querySelector("._verify")
if(change_modal && sumbit_changes){
change_modal.addEventListener("click", function () {
    if (inputField.type === "tel") {
        inputField.type = "email";
        inputField.placeholder = "e.g: example.example@example.com";
        inputField.setAttribute("id", "contact-input");
        document.querySelector("label").textContent = "Email address";
        change_modal.textContent = "Use phone number instead?";
          _verify_emailorphone.innerHTML = "test@gmail.com"
        
    } else {
        inputField.type = "tel";
        inputField.placeholder = "e.g: +201006871558";
        inputField.setAttribute("id", "contact-input");
        document.querySelector("label").textContent = "Mobile number";
        change_modal.textContent = "Use Email address instead?";
          _verify_emailorphone.innerHTML = "01110234"
    }
});
}
inputField.addEventListener("input",(e)=>{
    _verify_emailorphone.innerHTML = e.target.value
})