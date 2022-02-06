const delayPreloader = setTimeout(Preloader, 2000);

function Preloader() {
    var loader = document.querySelector('.preloader');
    loader.style.display = "none";
}
function stopPreloader() {
  clearTimeout(Preloader);
}