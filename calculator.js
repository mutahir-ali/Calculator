let displayBar = document.querySelector(".display-bar")


document.querySelector(".nine").addEventListener("click", function() {
    
    displayBar.innerHTML = displayBar.innerHTML + document.querySelector(".nine").innerHTML
  });

document.querySelector(".eight").addEventListener("click", function() {
    displayBar.innerHTML = displayBar.innerHTML + document.querySelector(".eight").innerHTML
  });
document.querySelector(".seven").addEventListener("click", function() {
    displayBar.innerHTML = displayBar.innerHTML + document.querySelector(".seven").innerHTML
  });
document.querySelector(".six").addEventListener("click", function() {
    displayBar.innerHTML = displayBar.innerHTML + document.querySelector(".six").innerHTML
  });
document.querySelector(".five").addEventListener("click", function() {
    displayBar.innerHTML = displayBar.innerHTML + document.querySelector(".five").innerHTML
  });
document.querySelector(".four").addEventListener("click", function() {
    displayBar.innerHTML =displayBar.innerHTML + document.querySelector(".four").innerHTML
  });
document.querySelector(".three").addEventListener("click", function() {
    displayBar.innerHTML = displayBar.innerHTML + document.querySelector(".three").innerHTML
  });
document.querySelector(".two").addEventListener("click", function() {
    displayBar.innerHTML = displayBar.innerHTML + document.querySelector(".two").innerHTML
  });
document.querySelector(".one").addEventListener("click", function() {
    displayBar.innerHTML = displayBar.innerHTML + document.querySelector(".one").innerHTML
  });
document.querySelector(".dot").addEventListener("click", function() {
    displayBar.innerHTML = displayBar.innerHTML + document.querySelector(".dot").innerHTML
  });

document.querySelector(".zero").addEventListener("click", function() {
    displayBar.innerHTML = displayBar.innerHTML + document.querySelector(".zero").innerHTML
  });

document.querySelector(".plus").addEventListener("click", function() {
    displayBar.innerHTML = displayBar.innerHTML + document.querySelector(".plus").innerHTML
  });
document.querySelector(".minus").addEventListener("click", function() {
    displayBar.innerHTML = displayBar.innerHTML + document.querySelector(".minus").innerHTML
  });
document.querySelector(".divide").addEventListener("click", function() {
    displayBar.innerHTML = displayBar.innerHTML + document.querySelector(".divide").innerHTML
  });
document.querySelector(".cross").addEventListener("click", function() {
    displayBar.innerHTML = displayBar.innerHTML + document.querySelector(".cross").innerHTML
  });

document.querySelector(".clearBtn").addEventListener("click", function() {
    displayBar.innerHTML = ``
})







document.querySelector(".equals").addEventListener("click", e => {
    e.preventDefault()
    const equation = displayBar.innerText
    
    displayBar.innerHTML = eval(equation)
  });






