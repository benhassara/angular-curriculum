var input = document.getElementById("in-name");

input.addEventListener("input", function(e) {
  var out = document.getElementById("name");
  out.innerHTML = input.value;
});
