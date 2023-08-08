let acc;
let email = document.getElementById("email");
let spanAlert = document.querySelector("span")
let butt = document.getElementsByClassName("button")
let signUp = document.getElementById("sign-up")
let mess = document.getElementById("message")
let messEm = document.getElementById("messEmail")
function validation(){
  if (signUp.style.display == "none"){
    butt[1].style.background = "hsl(234, 29%, 20%)"
    // location.reload()
    return(true)
  }
  const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if(pattern.test(email.value)){
    acc = email.value
    signUp.style.display = "none"
    mess.id = "messStart"
    messEm.innerHTML = acc
    messEm.style.fontWeight = "bold"
    return (true)
  }
  else{
    spanAlert.innerHTML = "Valid email required"
    spanAlert.classList.add("spanAlert")
    email.classList.add("inAlert")
    butt.classList.add("act")
    } 
}