document.getElementById("formContacto").addEventListener("submit", function(event){
  event.preventDefault();
  document.getElementById("respuesta").innerText = "¡Gracias por tu mensaje! Te contactaremos pronto.";
});
