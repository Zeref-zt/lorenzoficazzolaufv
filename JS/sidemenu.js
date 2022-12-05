function show(id) {
    var x = document.getElementById(id);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  function showTitle(title){
    var x = document.getElementById("general");
    x.style.display = "block";
    var x = document.getElementById("Fundamentos");
        x.style.display = "none";
    document.getElementById("title").innerHTML=title;
  }

  function showFundamentos(){
    var x = document.getElementById("general");
    x.style.display = "none";
    var x = document.getElementById("Fundamentos");
        x.style.display = "block";
  }