var submit_btn = document.querySelector("#submit"),
    input = document.querySelector("#input");


submit_btn.onclick = function(e) {
  e.preventDefault()
  var text = input.value;

  if(text !== "") {

    fetch("/", {
      method: 'POST',
      body: JSON.stringify({ prolog: text }), // stringify JSON
      headers: new Headers({ "Content-Type": "application/json" }) // add headers
    });

    input.value = "";

  }
  
}
