document.querySelector('#menu').addEventListener('click',()=>{
    document.querySelector('nav ul').classList.toggle('showmenu');
});

//galery
function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
}


let mybutton = document.getElementById("myBtn");// Get the button

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function saveToFile() {
  var name = document.getElementById("txtName").value;
  var email = document.getElementById("txtEmail").value;
  var msg = document.getElementById("txtMsg").value;

  // Validace jména a emailu
  if (name === "" || !/^[a-zA-Z]+$/.test(name)) {
    alert("Zadejte prosím platné jméno.");
    return;
  }

  if (email === "" || !/^\S+@\S+\.\S+$/.test(email)) {
    alert("Zadejte prosím platný email.");
    return;
  }

  // Validace zprávy
  if (msg === "") {
    alert("Zadejte prosím zprávu.");
    return;
  }

  var data = { "name": name, "email": email, "msg": msg };
  var jsonData = JSON.stringify(data);

  console.log(jsonData); // Kontrola JSON řetězce

  var file = new Blob([jsonData], {type: 'application/json'});
  var a = document.createElement("a");
  var url = URL.createObjectURL(file);
  a.href = url;
  a.download = "form-data.json";
  document.body.appendChild(a);
  a.click();
  setTimeout(function() {
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);  
  }, 0);
}

function myFunction(imgElement) {
    var expandedImg = document.getElementById("expandedImg");
    expandedImg.src = imgElement.src;
  }

  // Získání všech obrázků
  var images = document.querySelectorAll(".gallery-pic img");

  // Index aktuálního obrázku
  var currentImageIndex = 0;

  // Funkce pro zobrazení předchozího obrázku
  function previousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    var expandedImg = document.getElementById("expandedImg");
    expandedImg.src = images[currentImageIndex].src;
  }

  // Funkce pro zobrazení následujícího obrázku
  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    var expandedImg = document.getElementById("expandedImg");
    expandedImg.src = images[currentImageIndex].src;
  }
