var 
// Sends form information to Google Sheet
var form = document.getElementById('reservation');
form.addEventListener("submit",function(event){
    event.preventDefault();
    fetch(form.action,{
        method: "POST",
        body: new FormData(document.getElementById('reservation'))
    }).then(()=>{
        document.getElementById('message').innerHTML="Thank you, your reservation is set";
    })
});

function createEvent () {
    const calendar = '853474722699-6gmq2orobce9vte5bv48qsmuvgutob77.apps.googleusercontent.com';

}