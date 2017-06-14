/*https://www.w3schools.com/w3css/w3css_tabulators.asp*/

function openCity(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("event_type");
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active_tab", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active_tab";
}