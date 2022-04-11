var form = document.getElementById('reservation');

form.addEventListener("submit", function(event){
    event.preventDefault();
    fetch(form.action, {
        method: "POST",
        body: new FormData(document.getElementById('reservation')),
    }).then(
        response => response.json()
    ).then((html)=>{
        document.getElementById('message').innerHTML = "Your reservation has been made.";
    })
})