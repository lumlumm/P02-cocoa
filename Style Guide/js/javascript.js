function myFunction() {
    var x = document.getElementById("hammy_menu");
    if (x.className === "hamburger_menu") {
        x.className += " responsive";
    } else {
        x.className = "hamburger_menu";
    }
}

function openSSMenu(evt, SSMenuName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("SSMenu_type");
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active_tab", "");
  }
  document.getElementById(SSMenuName).style.display = "block";
  evt.currentTarget.className += " active_tab";
}