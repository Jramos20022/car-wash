//Form Variables
const form = document.getElementById('reservation');
const fname = form.elements['name'];
const phNumber = form.elements['number'];
const address = form.elements['address'];
const city = form.elements['city'];
const state = form.elements['state'];
const zipCode = form.elements['zipcode'];
const pckgSelected = form.elements['package'];
const car = form.elements['car'];
const date = form.elements['date'];
const hour = form.elements['hour'];

form.addEventListener("submit",function(event){
    let fullName = console.log(name.value);
    let number = console.log(phNumber.value);
    let location = console.log(address.value);
    let locationCity = city.value;
    let locationState = state.value;
    let locationZipcode = zipCode.value;
    let pckg = pckgSelected.value;
    let vCar = car.value;
    let day = date.value;
    let time = hour.value;

});

