
function view() {
    var x = document.getElementById("mydiv");
    
    if (x.style.display === "none") {
      x.style.display = "flex";
      document.getElementById("viewMore").innerHTML = "View Less";
    } else {
      x.style.display = "none";
      document.getElementById("viewMore").innerHTML = "View More";
    }
  }

