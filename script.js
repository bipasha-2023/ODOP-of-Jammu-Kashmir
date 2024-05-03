// const bar = window.document.querySelector('bar');
// const nav = window.document.querySelector('navbar');

// if (bar) {
// bar.addEventListener('click', () => {
//     nav.classList.add('active');
//     console.log("hello")
//     })
// }
function showModal() {
    document.querySelector('.overlay').classList.add('showoverlay')
    document.querySelector('.loginform').classList.add('showloginform')
}
function closeModal() {
    document.querySelector('.overlay').classList.remove('showoverlay')
    document.querySelector('.loginform').classList.remove('showloginform')
}
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
}
function showPosition(position) {
    console.log(
        "Latitude: " + position.coords.latitude +
        "Longitude: " + position.coords.longitude);
}
getLocation()
