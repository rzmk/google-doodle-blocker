// After the entire page renders, remove the element with id "hplogo"
window.onload = function () {
  var element = document.getElementById("hplogo");
  element.parentNode.removeChild(element);
};
