/*https://www.w3schools.com/w3css/w3css_tabulators.asp*/

function openEvent(evt, eventName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("event_type");
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active_tab", "");
  }
  document.getElementById(eventName).style.display = "block";
  evt.currentTarget.className += " active_tab";
}

function openFood(evt, foodName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("food_type");
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active_tab", "");
  }
  document.getElementById(foodName).style.display = "block";
  evt.currentTarget.className += " active_tab";
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
/* https://codepen.io/corysimmons/pen/KbFcg */

$('button').click(function() {
  $(this).toggleClass('expanded').siblings('div').slideToggle();
});