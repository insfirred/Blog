document.getElementById('pop-bar').addEventListener('click', function() {
    document.getElementById('pop-bar').style.visibility = "hidden";
    document.getElementById('navlinks').style.visibility = "visible";
    document.getElementById('close-icon').style.visibility = "visible";
    document.getElementById('heading').style.marginTop = "120px";
});
document.getElementById('close-icon').addEventListener('click', function() {
    document.getElementById('pop-bar').style.visibility = "visible";
    document.getElementById('navlinks').style.visibility = "hidden";
    document.getElementById('close-icon').style.visibility = "hidden";
    document.getElementById('heading').style.marginTop = "30px";
})