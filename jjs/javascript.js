function openEvent(evt, eventName) {  var i, x, tablinks;  x = document.getElementsByClassName("event_type");  for (i = 0; i < x.length; i++) {      x[i].style.display = "none";  }  tablinks = document.getElementsByClassName("tab");  for (i = 0; i < x.length; i++) {      tablinks[i].className = tablinks[i].className.replace(" active_tab", "");  }  document.getElementById(eventName).style.display = "block";  evt.currentTarget.className += " active_tab";}function openFood(evt, foodName) {  var i, x, tablinks;  x = document.getElementsByClassName("food_type");  for (i = 0; i < x.length; i++) {      x[i].style.display = "none";  }  tablinks = document.getElementsByClassName("tab");  for (i = 0; i < x.length; i++) {      tablinks[i].className = tablinks[i].className.replace(" active_tab", "");  }  document.getElementById(foodName).style.display = "block";  evt.currentTarget.className += " active_tab";}function openSSMenu(evt, SSMenuName) {  var i, x, tablinks;  x = document.getElementsByClassName("SSMenu_type");  for (i = 0; i < x.length; i++) {      x[i].style.display = "none";  }  tablinks = document.getElementsByClassName("tab");  for (i = 0; i < x.length; i++) {      tablinks[i].className = tablinks[i].className.replace(" active_tab", "");  }  document.getElementById(SSMenuName).style.display = "block";  evt.currentTarget.className += " active_tab";}function myFunction() {    var x = document.getElementById("hammy_menu");    if (x.className === "hamburger_menu") {        x.className += " responsive";    } else {        x.className = "hamburger_menu";    }}